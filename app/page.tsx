import { getData } from '@/app/get-data';
import QuestionAnswerBox from './question-answer-box';


export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <QuestionAnswerBox data={data}/>
    </div>
  );
}
