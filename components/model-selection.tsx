import { Selection, Select, SelectItem } from '@nextui-org/react';

interface Params {
  modelName: string | undefined,
  answers: Answer[],
  onSelectionChange: (keys: Selection) => void
};

export default function ModelSelection({ modelName, answers, onSelectionChange }: Params) {
  const modelNamesWithDupes = answers.map((answer) => answer.prompting_state.model_name);
  const modelNames = Array.from(new Set(modelNamesWithDupes));

  return (
    <>
      <Select
        label="Model Name"
        onSelectionChange={onSelectionChange}
        className="min-w-40"
        >
          {modelNames.map((modelName) => (
            <SelectItem key={modelName}>
              {modelName}
            </SelectItem>
          ))}
      </Select>
    </>
  );
}
