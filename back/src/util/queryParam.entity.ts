export class QueryParamEntity {
  first: number;
  rows: number;
  sortField: string;
  sortOrder: number;
  filters: { global: { value: string; matchMode: string; fields: [] } };
}
