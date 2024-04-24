"use client"
import { Tabs, Tab, Card, CardBody, Divider, Snippet } from '@nextui-org/react';

interface Params {
  entry: Entry
  answerName: string
};

export default function AnswerBox({ entry, answerName }: Params) {
  const answer = entry.answers.filter((answer) => answer.name == answerName)[0];

  return (
    <>
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
      <Divider className="my-4" />
      <h2>Prompting State</h2>
      <Card>
        <CardBody className="whitespace-pre">
          {JSON.stringify(answer.prompting_state, undefined, 2)}
        </CardBody>
      </Card>
    </>
  );
}
