import {
  Card,
  CardRoot,
  StatDownIndicator,
  StatRootProps,
  StatUpIndicator,
  StatValueTextProps,
  Text,
} from "@chakra-ui/react";
import { StatHelpText, StatLabel, StatRoot, StatValueText } from "./ui/stat";
import { PropsWithChildren } from "react";

interface StatProps extends StatRootProps {
  label: string;
  value: number | undefined;
  formatOptions?: Intl.NumberFormatOptions;
  showHelpText?: boolean;
}

export const Stat = ({
  label,
  value,
  formatOptions,
  showHelpText = true,
  children,
  ...props
}: PropsWithChildren<StatProps>) => {
  return (
    <StatRoot {...props} as={CardRoot} padding={4}>
      <StatLabel>{label}</StatLabel>
      {value ? (
        <StatValueText value={value} formatOptions={formatOptions} />
      ) : (
        <Text fontSize="xl" fontWeight="bold">
          N/A
        </Text>
      )}
      {showHelpText && (
        <StatHelpText>
          <StatUpIndicator />
          <StatDownIndicator />
        </StatHelpText>
      )}
    </StatRoot>
  );
};
