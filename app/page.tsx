import { getAllDatasets } from '@/components/datasets';
import QuestionAnswerBox from '@/components/question-answer-box';


export default async function Page() {
  const datasets = await getAllDatasets();

  return (
    <div className="container mx-auto">
      <QuestionAnswerBox datasets={datasets}/>
    </div>
  );
}
