"use client"
import { Select, SelectItem, Selection } from '@nextui-org/react';

interface Params {
  entries: any[],
  onSelectionChange: ((keys: Selection) => void)
};

export default function QuestionDropdown({ entries, onSelectionChange }: Params) {
  return (
    <>
      <Select
        label="Question Name"
        items={entries}
        onSelectionChange={onSelectionChange}
        className="min-w-40"
        >
          {(entry) => (
            <SelectItem key={entry.question.name}>
              {entry.question.name}
            </SelectItem>
          )}
      </Select>
    </>
  );
}
