import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/react';
import { Key } from 'react';

interface Params {
  answers: Answer[],
  modelName: string | undefined,
  onAction: ((key: Key) => void)
};

export default function AnswerDropdown({ answers, modelName, onAction }: Params) {
  const answerNamesMaps = answers.filter((answer) => answer.prompting_state.model_name === modelName)

  return (
    <>
      <Dropdown isDisabled={modelName === undefined}>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
          >
            Answer Name
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          key="questions"
          items={answerNamesMaps}
          onAction={onAction}
        >
          {(answerNamesMap) => (
            <DropdownItem<object>
              key={answerNamesMap.name}
            >
              {answerNamesMap.name}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
