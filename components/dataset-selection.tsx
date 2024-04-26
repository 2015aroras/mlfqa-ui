"use client"
import { Selection, Select, SelectItem } from '@nextui-org/react';
import { DatasetType, getDatasetName } from '@/components/datasets';

interface Params {
  datasets: { [key in DatasetType]?: Dataset }
  datasetType: DatasetType,
  onSelectionChange: (keys: Selection) => void
};

export default function DatasetSelection({ datasets, datasetType, onSelectionChange }: Params) {
  const datasetTypes = [...new Set(Object.keys(datasets))]
    .filter(keyStr => !isNaN(Number(keyStr)))
    .map(keyStr => Number(keyStr) as DatasetType);

  return (
    <>
      <Select
        label="Data Type"
        selectedKeys={[datasetType]}
        onSelectionChange={onSelectionChange}
        className="min-w-40"
        >
          {datasetTypes.map((datasetType) => (
            <SelectItem key={datasetType}>
              {getDatasetName(datasetType)}
            </SelectItem>
          ))}
      </Select>
    </>
  );
}
