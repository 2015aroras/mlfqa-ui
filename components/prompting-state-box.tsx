import { Accordion, AccordionItem, Card, CardBody } from '@nextui-org/react';

interface Params {
  prompting_state: PromptingState,
  title: string,
};

export default function PromptingStateBox({ prompting_state, title }: Params) {
  return (
    <div className="py-4">
      <Accordion variant="bordered">
        <AccordionItem key="promptingState" title={title}>
          <Card className="m-2 mt-0">
            <CardBody className="whitespace-pre">
                {JSON.stringify(prompting_state, undefined, 2)}
            </CardBody>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
