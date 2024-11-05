import {
  Box,
  createListCollection,
  Flex,
  Heading,
  HStack,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ColorModeButton, useColorMode } from "./components/ui/color-mode";
import { Select } from "./components/select";

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

      <HStack marginTop={6}>
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
    </Box>
  );
};
