import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/react';
import { Dispatch, Key, SetStateAction } from 'react';
import AnswerDropdown from './answer-dropdown';
import ModelDropdown from './model-dropdown';

interface Params {
  answers: Answer[],
  modelName: string | undefined,
  setModelName: Dispatch<SetStateAction<string | undefined>>,
  answerName: string | undefined,
  setAnswerName: Dispatch<SetStateAction<string | undefined>>,
};

export default function AnswerChoices(params: Params) {
  return (
    <>
      <ModelDropdown answers={params.answers} onAction={(key: Key) => params.setModelName(key as string)}/>
      <AnswerDropdown
        answers={params.answers}
        modelName={params.modelName}
        onAction={(key: Key) => params.setAnswerName(key as string)}/>
    </>
  );
}
