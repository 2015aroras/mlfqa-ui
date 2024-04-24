import { getData } from '@/components/get-data';
import QuestionAnswerBox from '@/components/question-answer-box';


export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <QuestionAnswerBox data={data}/>
    </div>
  );
}
