import { getData } from '@/app/get-data';
import QuestionAnswerBox from './question-answer-box';


export default async function Page() {
  const data = await getData();

  return (
    <div className="container">
      <QuestionAnswerBox data={data}/>
    </div>
  );
}
