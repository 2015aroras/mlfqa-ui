"server only"
import { promises as fs } from 'fs';

export enum DatasetType {
    NonCultural,
    English,
    Arabic,
    Chinese,
    German,
    Hebrew,
    Hindi,
    Hungarian,
    Japanese,
    Korean,
    Polish,
    Russian,
    Spanish,
}


export function getDatasetName(type: DatasetType): string {
    const typeToName: { [key in DatasetType]: string} = {
        [DatasetType.NonCultural]: "Non-Cultural",
        [DatasetType.English]: "Cultural English",
        [DatasetType.Arabic]: "Cultural Arabic",
        [DatasetType.Chinese]: "Cultural Chinese",
        [DatasetType.German]: "Cultural German",
        [DatasetType.Hebrew]: "Cultural Hebrew",
        [DatasetType.Hindi]: "Cultural Hindi",
        [DatasetType.Hungarian]: "Cultural Hungarian",
        [DatasetType.Japanese]: "Cultural Japanese",
        [DatasetType.Korean]: "Cultural Korean",
        [DatasetType.Polish]: "Cultural Polish",
        [DatasetType.Russian]: "Cultural Russian",
        [DatasetType.Spanish]: "Cultural Spanish",
    }

    return typeToName[type];
}


export async function getDataset(type: DatasetType): Promise<Dataset | undefined> {
    const typeToFilename: { [key in DatasetType]?: string} = {
        [DatasetType.NonCultural]: "dataset-non-cultural.json",
        [DatasetType.English]: "dataset-english.json",
        [DatasetType.Arabic]: "dataset-arabic.json",
        [DatasetType.Chinese]: "dataset-chinese.json",
        [DatasetType.German]: "dataset-german.json",
        [DatasetType.Hebrew]: "dataset-hebrew.json",
        [DatasetType.Hindi]: "dataset-hindi.json",
        [DatasetType.Hungarian]: "dataset-hungarian.json",
        // [DatasetType.Japanese]: "dataset-japanese.json",
        [DatasetType.Korean]: "dataset-korean.json",
        // [DatasetType.Polish]: "dataset-polish.json",
        [DatasetType.Russian]: "dataset-russian.json",
        [DatasetType.Spanish]: "dataset-spanish.json",
    }

    const filename = typeToFilename[type];
    if (filename === undefined) {
        return undefined;
    }
    const file = await fs.readFile(process.cwd() + '/data/' + filename, 'utf8');
    return JSON.parse(file);
}

export async function getAllDatasets(): Promise<{ [key in DatasetType]?: Dataset }> {
    var datasets: { [key in DatasetType]?: Dataset } = {}
    for (let item in DatasetType) {
        if (!isNaN(Number(item))) {
            const datasetType = Number(item) as DatasetType;
            datasets[datasetType] = await getDataset(datasetType);
        }
    }

    return datasets;
}