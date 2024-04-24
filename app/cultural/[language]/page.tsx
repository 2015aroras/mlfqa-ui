import { getData } from '@/app/get-data';
import QuestionDropdown from './question-dropdown';

interface Params {
  params: { language: string },
};

export default async function Page({ params }: Params) {
  const data = await getData();

  const lang_entries: object[] = data.entries.filter((entry: any) => entry.question.language == params.language);

  return (
    <div>
      <QuestionDropdown
        key={params.language}
        entries={lang_entries}
        language={params.language}>
      </QuestionDropdown>
    </div>
  );
}
