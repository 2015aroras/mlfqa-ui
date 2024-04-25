"use client"
import { Tabs, Tab, Card, CardBody, Divider, Snippet } from '@nextui-org/react';
import PromptingStateBox from '@/components/prompting-state-box';

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
              <>
                <Card>
                  <CardBody>
                    {translation.text}
                  </CardBody>
                </Card>
                {translation.prompting_state &&
                <PromptingStateBox
                  prompting_state={translation.prompting_state} title="State when translating" />
                }
              </>
            </Tab>
        )}
      </Tabs>
      <PromptingStateBox prompting_state={answer.prompting_state} title="State when prompting" />
    </>
  );
}
