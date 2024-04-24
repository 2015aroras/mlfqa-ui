import { promises as fs } from 'fs';

export async function getData() {
    const file = await fs.readFile(process.cwd() + '/app/dataset.json', 'utf8');
    return JSON.parse(file);
}