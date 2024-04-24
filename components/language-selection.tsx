"use client"
import { Selection, Select, SelectItem } from '@nextui-org/react';

interface Params {
  entries: Entry[],
  language: string | undefined,
  onSelectionChange: (keys: Selection) => void
};

export default function LanguageSelection({ entries, onSelectionChange }: Params) {
  const languages = [...new Set(entries.map((entry) => entry.question.language))];

  return (
    <>
      <Select
        label="Language"
        items={entries}
        onSelectionChange={onSelectionChange}
        className="min-w-40"
        >
          {languages.map((language) => (
            <SelectItem key={language}>
              {language}
            </SelectItem>
          ))}
      </Select>
    </>
  );
}
