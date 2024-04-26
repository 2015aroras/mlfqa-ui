"use client"
import AnswerChoices from '@/components/answer-choices';
import { Tabs, Tab, Card, CardBody, Divider } from '@nextui-org/react';
import AnswerBox from '@/components/answer-box';
import QuestionDropdown from '@/components/question-selection';
import DatasetSelection from '@/components/dataset-selection';
import { Selection } from '@nextui-org/react';
import { useState } from 'react';
import PromptingStateBox from '@/components/prompting-state-box';
import { DatasetType } from '@/components/datasets';

interface Params {
  datasets: { [key in DatasetType]?: Dataset }
};

export default function QuestionAnswerBox({ datasets }: Params) {
  const [datasetType, setDatasetType] = useState<DatasetType>(DatasetType.English);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [modelName, setModelName] = useState<string | undefined>(undefined);
  const [answerName, setAnswerName] = useState<string | undefined>(undefined);

  const data = datasets[datasetType] as Dataset;
  const entry = data.entries[questionNumber];

  function onDatasetSelectionChange(keys: Selection): void {
    const keySet = keys as Set<DatasetType>;
    if (keySet.size == 1) {
      setDatasetType((keys as Set<DatasetType>).values().next().value)
      setQuestionNumber(0)
      setModelName(undefined)
      setAnswerName(undefined)
    }
  }

  function onQuestionNumberSelectionChange(keys: Selection): void {
    setQuestionNumber((keys as Set<number>).values().next().value)
    setModelName(undefined)
    setAnswerName(undefined)
  }

  function onModelNameSelectionChange(keys: Selection): void {
    setModelName((keys as Set<string>).values().next().value)
    setAnswerName(undefined)
  }

  function onAnswerNameSelectionChange(keys: Selection): void {
    setAnswerName((keys as Set<string>).values().next().value)
  }

  return (
    <>
      <header className="flex flex-row justify-center">
        <div className="px-4 py-2">
          <DatasetSelection
            datasets={datasets}
            datasetType={datasetType}
            onSelectionChange={onDatasetSelectionChange} />
        </div>
        {datasetType &&
        <div className="px-4 py-2">
          <QuestionDropdown
            numQuestions={data.entries.length}
            questionNumber={questionNumber}
            onSelectionChange={onQuestionNumberSelectionChange}/>
        </div>
        }
      </header>
      {entry &&
      <div>
        <div>
          <h2>Question</h2>
          <Tabs aria-label="Dynamic tabs" items={Object.values(entry.question.translations)}>
            {(translation) => (
              <Tab key={translation.language} title={translation.language}>
                <>
                  <Card>
                    <CardBody>
                      {translation.text}
                    </CardBody>
                  </Card>
                  {translation.prompting_state &&
                  <PromptingStateBox
                    prompting_state={translation.prompting_state}
                    title="State when translating" />
                  }
                </>
              </Tab>
            )}
          </Tabs>
        </div>
        <Divider className="my-4" />
        <div>
          <h2>Answer</h2>
          {entry.answers.length > 0
          ? <>
              <div className="pb-2 flex flex-row">
                <AnswerChoices
                  answers={entry.answers}
                  modelName={modelName}
                  onModelNameSelectionChange={onModelNameSelectionChange}
                  answerName={answerName}
                  onAnswerNameSelectionChange={onAnswerNameSelectionChange} />
              </div>
              {modelName && answerName &&
              <div className="py-2">
                <AnswerBox entry={entry} answerName={answerName} />
              </div>}
            </>
          : <p>No answers found for this question.</p>}
        </div>
      </div>}
    </>
  );
}
