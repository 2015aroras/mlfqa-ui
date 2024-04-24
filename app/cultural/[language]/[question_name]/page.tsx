import { getData } from '@/app/get-data';
import QuestionAnswerBox from './question-answer-box';
import QuestionDropdown from '../question-dropdown';

interface Params {
  params: { language: string, question_name: string },
};

export default async function Page({ params }: Params) {
  const data = await getData();

  const question_name = decodeURIComponent(params.question_name);

  const matching_entries: object[] = data.entries.filter(
    (entry: any) => entry.question.name == question_name);

  return (
    <div className="container">
      <h1>Question name {question_name} {matching_entries.length}</h1>
      <QuestionDropdown entries={data.entries} language={params.language}/>
      {matching_entries.length > 1 && <p>Error: found {matching_entries.length} entries with name {question_name}</p>}
      {matching_entries.length == 0 && <p>Error: found no entries with name {question_name}</p>}
      {matching_entries.length == 1 && 
      <QuestionAnswerBox entry={matching_entries[0] as Entry}/>
      }
    </div>
  );
}
