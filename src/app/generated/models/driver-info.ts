/* tslint:disable */
/* eslint-disable */
import { DriverCategory } from './driver-category';
import { Nationality } from './nationality';
export interface DriverInfo {
  category?: DriverCategory;
  firstName?: null | string;
  lastName?: null | string;
  nationality?: Nationality;
  shortName?: null | string;
}
