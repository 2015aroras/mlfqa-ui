"use client"
import { useState } from 'react';
import AnswerChoices from './answer-choices';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import AnswerBox from './answer-box';
import QuestionDropdown from './question-dropdown';
import LanguageDropdown from './language-dropdown';

interface Params {
  data: { entries: Entry[] }
};

export default function QuestionAnswerBox({ data }: Params) {
  const [language, setLanguage] = useState<string | undefined>(undefined);
  const [questionName, setQuestionName] = useState<string | undefined>(undefined);
  const [modelName, setModelName] = useState<string | undefined>(undefined);
  const [answerName, setAnswerName] = useState<string | undefined>(undefined);

  const matchingEntries: Entry[] = data.entries.filter(
    (entry: any) => questionName && entry.question.name == questionName);
  const entry = matchingEntries.length == 1 ? matchingEntries[0] : undefined;

  return (
    <div>
      <LanguageDropdown entries={data.entries} language={language} onSetLanguage={(key) => setLanguage(key as string)} />
      <h1>{questionName}</h1>
      {language &&
      <QuestionDropdown entries={data.entries} language={language} onAction={(key) => setQuestionName(key as string)}/>
      }
      {questionName && matchingEntries.length > 1 &&
      <p>Error: found {matchingEntries.length} entries with name {questionName}</p>}
      {questionName && matchingEntries.length == 0 &&
      <p>Error: found no entries with name {questionName}</p>}
      {entry &&
      <>
        <div>
          <h2>Question</h2>
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
      </>}
    </div>
  );
}
