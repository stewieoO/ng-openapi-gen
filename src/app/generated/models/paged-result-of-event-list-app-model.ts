/* tslint:disable */
/* eslint-disable */
import { EventListAppModel } from './event-list-app-model';
export interface PagedResultOfEventListAppModel {
  count?: number;
  items?: null | Array<EventListAppModel>;
  page?: number;
  pageSize?: number;
  totalCount?: number;
  totalPages?: number;
}
