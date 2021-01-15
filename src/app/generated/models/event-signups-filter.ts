/* tslint:disable */
/* eslint-disable */
import { CarCup } from './car-cup';
import { DriverCategory } from './driver-category';
export interface EventSignupsFilter {
  carId?: null | number;
  cup?: null | CarCup;
  driverCategory?: null | DriverCategory;
  name?: null | string;
  racenumber?: null | string;
  showInvalid?: null | boolean;
  splitId?: null | number;
  steamId?: null | string;
  teamname?: null | string;
}
