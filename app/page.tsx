import { promises as fs } from 'fs';
import Link from 'next/link';
import { getData } from './get-data';

export default async function Home() {
  const data = await getData();

  const languages_with_dupes: string[] = data.entries.map((entry: any) => entry.question.language);
  const languages = Array.from(new Set(languages_with_dupes));

  return (
    <div>
      <h1>{data.entries[0].question.name}</h1>
      {languages.map((language) => <Link key={language} href={`/cultural/${language}`}>{language}</Link>)}
    </div>
  );
}
