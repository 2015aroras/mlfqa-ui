import { Selection } from '@nextui-org/react';
import AnswerSelection from './answer-selection';
import ModelSelection from './model-selection';

interface Params {
  answers: Answer[],
  modelName: string | undefined,
  onModelNameSelectionChange: (keys: Selection) => void,
  answerName: string | undefined,
  onAnswerNameSelectionChange: (keys: Selection) => void,
};

export default function AnswerChoices(params: Params) {
  return (
    <>
      <div className="pr-2">
        <ModelSelection
          modelName={params.modelName}
          answers={params.answers}
          onSelectionChange={params.onModelNameSelectionChange}/>
      </div>
      {params.modelName &&
      <div>
        <AnswerSelection
          answers={params.answers}
          modelName={params.modelName}
          onSelectionChange={params.onAnswerNameSelectionChange}/>
      </div>}
    </>
  );
}