import { Selection, Select, SelectItem } from '@nextui-org/react';

interface Params {
  answers: Answer[],
  modelName: string | undefined,
  onSelectionChange: (keys: Selection) => void
};

export default function AnswerSelection({ answers, modelName, onSelectionChange }: Params) {
  const answerNames = answers.filter((answer) => answer.prompting_state.model_name === modelName)
                             .map((answer) => answer.name);

  return (
    <>
      <Select
        label="Answer Name"
        onSelectionChange={onSelectionChange}
        className="min-w-80"
        >
          {answerNames.map((answerName) => (
            <SelectItem key={answerName}>
              {answerName}
            </SelectItem>
          ))}
      </Select>
    </>
  );
}
