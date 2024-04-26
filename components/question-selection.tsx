"use client"
import { Select, SelectItem, Selection } from '@nextui-org/react';

interface Params {
  numQuestions: number,
  questionNumber: number
  onSelectionChange: ((keys: Selection) => void)
};

export default function QuestionDropdown({ numQuestions, questionNumber, onSelectionChange }: Params) {
  return (
    <>
      <Select
        label="Question Number"
        selectedKeys={[questionNumber]}
        onSelectionChange={onSelectionChange}
        className="min-w-40"
        >
          {Array.from(Array(numQuestions).keys()).map((_, idx) => (
            <SelectItem key={idx}>
              {idx.toString()}
            </SelectItem>
          ))}
      </Select>
    </>
  );
}
