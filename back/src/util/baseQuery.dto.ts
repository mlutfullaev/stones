export class BaseQueryDto {
  first: string | number;
  rows: string | number;
  sortField: string;
  sortOrder: string | number;
  filters: string | {};

  static fromRequest(request: BaseQueryDto) {
    let where = {};
    request.first = +request.first;
    request.rows = +request.rows;
    request.sortOrder = +request.sortOrder;
    if (typeof request.filters === 'string') {
      request.filters = JSON.parse(request.filters);
      Object.keys(request.filters).forEach((key) => {
        if (request.filters[key].value) {
          if (key === 'OR' || key === 'AND') {
            where[key] = [];
            Object.keys(request.filters[key]).forEach((columnKey) => {
              if (request.filters[key][columnKey].value) {
                let item = new Object({});
                item[columnKey] = this.getOperator(
                  columnKey,
                  request.filters[key][columnKey],
                );
                where[key].push(item);
              }
            });
          } else if (key !== 'global') {
            where[key] = this.getOperator(key, request.filters[key]);
          } else if (key === 'global') {
            if (!where['OR']) {
              where['OR'] = [];
            }
            request.filters[key]['fields'].forEach((columnKey) => {
              let item = new Object({});
              item[columnKey] = this.getOperator(columnKey, {
                matchMode: 'contains',
                value: request.filters[key].value,
              });
              where['OR'].push(item);
            });
          }
        } else if (
          Object.keys(request.filters[key]).length > 0 &&
          !Object.keys(request.filters[key]).includes('value')
        ) {
          where[key] = [];
          const fields = request.filters[key];
          Object.keys(fields).forEach((fieldKey) => {
            let item = new Object({});
            item[fieldKey] = this.getOperator(fieldKey, {
              matchMode: fields[fieldKey].matchMode,
              value: fields[fieldKey].value,
            });
            where[key].push(item);
          });
        }
      });
    }

    let query = {};
    query['where'] = where;
    if (request.sortField && request.sortOrder) {
      query['orderBy'] = {};
      query['orderBy'][request.sortField] =
        request.sortOrder === 1 ? 'asc' : 'desc';
    }

    if (request.rows) {
      query['skip'] = request.first;
      query['take'] = request.rows;
    }
    return query;
  }

  static getOperator(key: string, item: any) {
    let res = {};
    switch (item.matchMode) {
      case 'gt': {
        res[item.matchMode] = +item.value;
        break;
      }
      case 'notIn': {
        res = {};
        res['not'] = {};
        res['not']['in'] = item.value;
        break;
      }
      default: {
        res[item.matchMode] = item.value;
        break;
      }
    }

    return res;
  }
}
