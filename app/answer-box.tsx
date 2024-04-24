"use client"
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';

interface Params {
  entry: Entry
  answerName: string
};

export default function AnswerBox({ entry, answerName }: Params) {
  const answer = entry.answers.filter((answer) => answer.name == answerName)[0];

  return (
    <div>
      <h2>Answer</h2>
      <Tabs aria-label="Dynamic tabs"
        items={Object.values(answer.translations)}>
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
      <h2>Prompting state</h2>
      <Card>
        <CardBody>
          {JSON.stringify(answer.prompting_state, undefined, 2)}
        </CardBody>
      </Card>
    </div>
  );
}
