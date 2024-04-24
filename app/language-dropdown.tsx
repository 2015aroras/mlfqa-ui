"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/react';
import { Key } from 'react';

interface Params {
  entries: Entry[],
  language: string | undefined,
  onSetLanguage: (key: Key) => void
};

export default function LanguageDropdown({ entries, language, onSetLanguage }: Params) {
  const languages = [...new Set(entries.map((entry) => entry.question.language))];

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
            {language ?? "Language"}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          key="languages"
          items={entries}
          onAction={onSetLanguage}
        >
          {languages.map((language) => (
            <DropdownItem key={language}>
              {language}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
