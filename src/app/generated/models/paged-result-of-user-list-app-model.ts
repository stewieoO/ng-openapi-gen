/* tslint:disable */
/* eslint-disable */
import { UserListAppModel } from './user-list-app-model';
export interface PagedResultOfUserListAppModel {
  count?: number;
  items?: null | Array<UserListAppModel>;
  page?: number;
  pageSize?: number;
  totalCount?: number;
  totalPages?: number;
}
