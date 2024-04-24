interface QuestionTranslation {
    language: string,
    text: string,
}

interface QuestionTranslations {
    [language: string]: QuestionTranslation;
}

interface Question {
    name: string,
    type: Number,
    source: string,
    collector?: string,
    language: string,
    translations: QuestionTranslations,
    url: string,
}

interface PromptingState {
    prompt: string,
    model_name: string,
    max_output_tokens: string,
    other_state: any,
}

interface Answer {
    name: string,
    language: string,
    translations: object,
    prompting_state: PromptingState,
}

interface Entry {
    question: Question,
    answers: Answer[],
}