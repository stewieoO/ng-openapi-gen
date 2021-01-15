/* tslint:disable */
/* eslint-disable */
import { DriverCategory } from './driver-category';
export interface ProfileAppModel {
  defaultCarId?: null | number;
  defaultDriverCategory?: null | DriverCategory;
  defaultRacenumber?: null | number;
  firstname: string;
  lastname: string;
  nationality: string;
  shortname: string;
  steamId?: null | string;
}
