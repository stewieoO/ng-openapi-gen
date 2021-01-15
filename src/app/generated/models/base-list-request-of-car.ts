/* tslint:disable */
/* eslint-disable */
import { SortOrder } from './sort-order';
export interface BaseListRequestOfCar {
  page?: number;
  pageSize?: number;
  sortColumn?: null | string;
  sortDirection?: SortOrder;
}
