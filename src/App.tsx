import {
  Box,
  createListCollection,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NumberInput } from "./components/numberinput";
import { Select } from "./components/select";
import { Stat } from "./components/stat";
import { ColorModeButton, useColorMode } from "./components/ui/color-mode";

const groomScaleOptions = createListCollection({
  items: [
    { label: "Small", value: "small" },
    { label: "Large", value: "large" },
  ],
});
const areaDensityOptions = createListCollection({
  items: [
    { label: "Low", value: "low" },
    { label: "High", value: "high" },
  ],
});

export const App = () => {
  const { setColorMode } = useColorMode();
  const [groomScale, setGroomScale] = useState<string[]>([]);
  const [areaDensity, setAreaDensity] = useState<string[]>([]);
  const [descriptionDensity, setDescriptionDensity] = useState(0);
  const [mapMask, setMapMask] = useState(0);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const isDarkMode = await window.darkMode.toggle();
      const newColorMode = isDarkMode ? "dark" : "light";
      setColorMode(newColorMode);
    })();
  }, []);

  return (
    <Box padding={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading flex={1} textAlign="center">
          Maya Groom Calculator
        </Heading>
        <ColorModeButton />
      </Flex>

      <VStack marginTop={6} width="100%" alignItems="flex-start" spaceY={2}>
        <HStack spaceX={2} width="100%">
          <Select<string>
            label="Groom Scale"
            placeholder="Select groom"
            collection={groomScaleOptions}
            value={groomScale}
            onValueChange={({ value }) => setGroomScale(value)}
          />
          <Select<string>
            label="Area Density"
            placeholder="Select area density"
            collection={areaDensityOptions}
            value={areaDensity}
            onValueChange={({ value }) => setAreaDensity(value)}
          />
        </HStack>

        <HStack spaceX={2}>
          <NumberInput
            label="Description Density"
            width="50%"
            value={Number(descriptionDensity)}
            onValueChange={({ value }) => setDescriptionDensity(Number(value))}
          />
          <NumberInput
            label="Map Mask"
            min={0}
            max={1}
            step={0.01}
            inputMode="decimal"
            width="50%"
            value={Number(mapMask)}
            onValueChange={({ value }) => setMapMask(Number(value))}
          />
        </HStack>
      </VStack>

      <HStack spaceX={2} width="100%">
        <Stat marginTop={6} label="Clump 1" value={0} showHelpText={false} />
        <Stat marginTop={6} label="Clump 2" value={0} showHelpText={false} />
      </HStack>
    </Box>
  );
};
