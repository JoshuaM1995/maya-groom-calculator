import React from "react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select";
import { ListCollection, SelectRootProps } from "@chakra-ui/react";

interface SelectProps<Value> extends SelectRootProps {
  label: string;
  placeholder?: string;
  collection: ListCollection<{ value: Value; label: string }>;
}

export const Select = <Value extends string | number = string | number>({
  label,
  placeholder,
  collection,
  ...props
}: SelectProps<Value>) => {
  return (
    <SelectRoot collection={collection} {...props}>
      <SelectLabel marginBottom={1} fontSize="sm" fontWeight="medium">
        {label}
      </SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {collection.items.map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
