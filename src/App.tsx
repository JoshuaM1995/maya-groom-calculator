import {
  Box,
  createListCollection,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { NumberInput } from "./components/numberinput";
import { Select } from "./components/select";
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
          />
          <Select<string>
            label="Area Density"
            placeholder="Select area density"
            collection={areaDensityOptions}
          />
        </HStack>

        <HStack spaceX={2}>
          <NumberInput label="Description Density" value={0} width="50%" />
          <NumberInput
            label="Map Mask"
            value={0}
            min={0}
            max={1}
            step={0.01}
            inputMode="decimal"
            width="50%"
          />
        </HStack>
      </VStack>
    </Box>
  );
};
