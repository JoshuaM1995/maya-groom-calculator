import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";

export const App = () => {
  return (
    <Box padding={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading flex={1} textAlign="center">
          Maya Groom Calculator
        </Heading>
        <ColorModeButton />
      </Flex>
    </Box>
  );
};
