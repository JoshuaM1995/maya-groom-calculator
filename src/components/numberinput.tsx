import {
  NumberInputInputProps,
  NumberInputLabel,
  NumberInputRoot,
  NumberInputRootProps,
} from "@chakra-ui/react";
import { NumberInputField } from "./ui/number-input";

interface NumberInputProps extends Omit<NumberInputRootProps, "value"> {
  label: string;
  value: NumberInputInputProps["value"];
  inputProps?: NumberInputInputProps;
}

export const NumberInput = ({
  label,
  value,
  inputProps,
  ...props
}: NumberInputProps) => {
  return (
    <NumberInputRoot {...props}>
      <NumberInputLabel fontSize="sm" fontWeight="medium">
        {label}
      </NumberInputLabel>
      <NumberInputField marginTop={2} value={value} {...inputProps} />
    </NumberInputRoot>
  );
};
