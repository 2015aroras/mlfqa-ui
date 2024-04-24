"use client"
import { useState } from 'react';
import AnswerChoices from './answer-choices';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import AnswerBox from './answer-box';

interface Params {
  entry: Entry
};

export default function QuestionAnswerBox({ entry }: Params) {
  const [modelName, setModelName] = useState<string | undefined>(undefined);
  const [answerName, setAnswerName] = useState<string | undefined>(undefined);

  return (
    <div>
      <div>
        <h2>Question</h2>
        <p>Original language: {entry.question.language}</p>
        <Tabs aria-label="Dynamic tabs" items={Object.values(entry.question.translations)}>
          {(translation) => (
            <Tab key={translation.language} title={translation.language}>
              <Card>
                <CardBody>
                  {translation.text}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
      <AnswerChoices
        answers={entry.answers}
        modelName={modelName}
        setModelName={setModelName}
        answerName={answerName}
        setAnswerName={setAnswerName} />
      {modelName && answerName && (
        <AnswerBox entry={entry} answerName={answerName} />
      )}
    </div>
  );
}
