import {
  Card,
  CardRoot,
  StatDownIndicator,
  StatRootProps,
  StatUpIndicator,
  StatValueTextProps,
} from "@chakra-ui/react";
import { StatHelpText, StatLabel, StatRoot, StatValueText } from "./ui/stat";
import { PropsWithChildren } from "react";

interface StatProps extends StatRootProps {
  label: string;
  value: number;
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
      <StatValueText value={value} formatOptions={formatOptions} />
      {showHelpText && (
        <StatHelpText>
          <StatUpIndicator />
          <StatDownIndicator />
        </StatHelpText>
      )}
    </StatRoot>
  );
};
