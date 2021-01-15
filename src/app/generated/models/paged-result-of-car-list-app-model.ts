/* tslint:disable */
/* eslint-disable */
import { CarListAppModel } from './car-list-app-model';
export interface PagedResultOfCarListAppModel {
  count?: number;
  items?: null | Array<CarListAppModel>;
  page?: number;
  pageSize?: number;
  totalCount?: number;
  totalPages?: number;
}
