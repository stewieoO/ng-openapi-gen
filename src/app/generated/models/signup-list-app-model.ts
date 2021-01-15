/* tslint:disable */
/* eslint-disable */
import { SignupListDriverAppModel } from './signup-list-driver-app-model';
export interface SignupListAppModel {
  active?: null | boolean;
  driver?: null | SignupListDriverAppModel;
  driverId?: number;
  id?: number;
  markAsDelete?: boolean;
  order?: null | number;
  teamOwnerId?: null | number;
}
