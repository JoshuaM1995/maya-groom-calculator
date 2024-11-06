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
import { GroomScale, AreaDensity } from "./type/types";
import { calculateClumps } from "./utils";

const groomScaleOptions = createListCollection({
  items: [
    { label: "Small", value: GroomScale.Small },
    { label: "Large", value: GroomScale.Big },
  ],
});
const areaDensityOptions = createListCollection({
  items: [
    { label: "Low", value: AreaDensity.Low },
    { label: "High", value: AreaDensity.High },
  ],
});

const MIN_DESCRIPTION_DENSITY = 0;
const MAX_DESCRIPTION_DENSITY = 9999999999;
const MIN_MASK_VALUE = 0;
const MAX_MASK_VALUE = 1;
const MAX_CLUMP_VALUE = 9999999999;

export const App = () => {
  const { setColorMode } = useColorMode();
  const [groomScale, setGroomScale] = useState<string[]>([GroomScale.Small]);
  const [areaDensity, setAreaDensity] = useState<string[]>([AreaDensity.Low]);
  const [descriptionDensity, setDescriptionDensity] = useState(0);
  const [clumpOneMask, setClumpOneMask] = useState(1);
  const [clumpTwoMask, setClumpTwoMask] = useState(0.5);

  const { clumpOne, clumpTwo, clumpOneMasked, clumpTwoMasked } =
    calculateClumps({
      descriptionDensity,
      areaDensity: areaDensity[0] as AreaDensity,
      groomScale: groomScale[0] as GroomScale,
      clumpOneMask,
      clumpTwoMask,
    });

  const hasErrors =
    descriptionDensity < MIN_DESCRIPTION_DENSITY ||
    descriptionDensity > MAX_DESCRIPTION_DENSITY ||
    clumpOneMask < MIN_MASK_VALUE ||
    clumpOneMask > MAX_MASK_VALUE ||
    clumpTwoMask < MIN_MASK_VALUE ||
    clumpTwoMask > MAX_MASK_VALUE ||
    clumpOneMasked > MAX_CLUMP_VALUE ||
    clumpTwoMasked > MAX_CLUMP_VALUE;

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

        <NumberInput
          label="Description Density"
          width="100%"
          value={Number(descriptionDensity)}
          min={0}
          max={MAX_DESCRIPTION_DENSITY}
          onValueChange={({ value }) => setDescriptionDensity(Number(value))}
        />

        <HStack spaceX={2}>
          <NumberInput
            label="Clump Two Mask"
            min={0}
            max={1}
            step={0.01}
            inputMode="decimal"
            width="50%"
            value={Number(clumpTwoMask)}
            onValueChange={({ value }) => setClumpTwoMask(Number(value))}
          />
          <NumberInput
            label="Clump One Mask"
            min={0}
            max={1}
            step={0.01}
            inputMode="decimal"
            width="50%"
            value={Number(clumpOneMask)}
            onValueChange={({ value }) => setClumpOneMask(Number(value))}
          />
        </HStack>
      </VStack>

      <HStack spaceX={2} width="100%">
        <Stat
          marginTop={6}
          label="Clump 2"
          value={hasErrors ? "N/A" : clumpTwoMasked}
          showHelpText={false}
        />
        <Stat
          marginTop={6}
          label="Clump 1"
          value={hasErrors ? "N/A" : clumpOneMasked}
          showHelpText={false}
        />
      </HStack>
    </Box>
  );
};
