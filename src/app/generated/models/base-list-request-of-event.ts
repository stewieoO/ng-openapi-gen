/* tslint:disable */
/* eslint-disable */
import { SortOrder } from './sort-order';
export interface BaseListRequestOfEvent {
  page?: number;
  pageSize?: number;
  sortColumn?: null | string;
  sortDirection?: SortOrder;
}
