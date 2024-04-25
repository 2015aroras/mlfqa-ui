interface QuestionTranslation {
    language: string,
    text: string,
    prompting_state?: PromptingState,
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

interface AnswerTranslation {
    language: string,
    text: string,
    prompting_state?: PromptingState,
}

interface AnswerTranslations {
    [language: string]: AnswerTranslation;
}

interface Answer {
    name: string,
    language: string,
    translations: AnswerTranslations,
    prompting_state: PromptingState,
}

interface Entry {
    question: Question,
    answers: Answer[],
}