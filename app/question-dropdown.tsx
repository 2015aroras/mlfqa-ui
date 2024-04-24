"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/react';
import { Key, useState } from 'react';

interface Params {
  entries: any[],
  language: string,
  onAction?: ((key: Key) => void)
};

export default function QuestionDropdown({ entries, language, onAction }: Params) {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
            Question Name
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          key="questions"
          items={entries}
          onAction={onAction}
        >
          {(entry) => (
            <DropdownItem key={entry.question.name}>
              {entry.question.name}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
