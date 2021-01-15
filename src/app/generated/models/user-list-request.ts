/* tslint:disable */
/* eslint-disable */
import { BaseListRequestOfDriver } from './base-list-request-of-driver';
export interface UserListRequest extends BaseListRequestOfDriver {
  roles?: null | Array<number>;
  steamId?: null | string;
  userName?: null | string;
}
