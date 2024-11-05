import React from "react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select";
import { ListCollection } from "@chakra-ui/react";

interface SelectProps<Value> {
  label: string;
  placeholder?: string;
  collection: ListCollection<{ value: Value; label: string }>;
}

export const Select = <Value extends string | number = string | number>({
  label,
  placeholder,
  collection,
}: SelectProps<Value>) => {
  return (
    <SelectRoot collection={collection}>
      <SelectLabel marginBottom={1}>{label}</SelectLabel>
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
