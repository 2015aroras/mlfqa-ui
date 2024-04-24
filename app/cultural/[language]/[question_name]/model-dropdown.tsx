import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/react';
import { Key } from 'react';

interface Params {
  answers: Answer[],
  onAction: ((key: Key) => void)
};

export default function ModelDropdown({ answers, onAction }: Params) {
  const modelNamesWithDupes = answers.map((answer) => answer.prompting_state.model_name);
  const modelNameMaps = Array.from(new Set(modelNamesWithDupes)).map(
    (modelName) => { return {"name": modelName}});

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
          >
            Model Name
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          key="questions"
          items={modelNameMaps}
          onAction={onAction}
        >
          {(modelNameMap) => (
            <DropdownItem<object>
              key={modelNameMap.name}
            >
              {modelNameMap.name}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
