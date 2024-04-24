"use client"
import AnswerChoices from '@/components/answer-choices';
import { Tabs, Tab, Card, CardBody, Divider } from '@nextui-org/react';
import AnswerBox from '@/components/answer-box';
import QuestionDropdown from '@/components/question-selection';
import LanguageSelection from '@/components/language-selection';
import { Selection } from '@nextui-org/react';
import { useState } from 'react';

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

  function onLanguageSelectionChange(keys: Selection): void {
    setLanguage((keys as Set<string>).values().next().value)
    setQuestionName(undefined)
    setModelName(undefined)
    setAnswerName(undefined)
  }

  function onQuestionNameSelectionChange(keys: Selection): void {
    setQuestionName((keys as Set<string>).values().next().value)
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
          <LanguageSelection
            entries={data.entries}
            language={language}
            onSelectionChange={onLanguageSelectionChange} />
        </div>
        {language &&
        <div className="px-4 py-2">
          <QuestionDropdown entries={data.entries} onSelectionChange={onQuestionNameSelectionChange}/>
        </div>
        }
      </header>
      {questionName && matchingEntries.length > 1 &&
        <p>Error: found {matchingEntries.length} entries with name {questionName}</p>}
      {questionName && matchingEntries.length == 0 &&
        <p>Error: found no entries with name {questionName}</p>}
      {entry &&
      <div>
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
