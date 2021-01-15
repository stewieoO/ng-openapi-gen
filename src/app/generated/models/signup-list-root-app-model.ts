/* tslint:disable */
/* eslint-disable */
import { CarCup } from './car-cup';
import { DriverCategory } from './driver-category';
import { SignupListAppModel } from './signup-list-app-model';
export interface SignupListRootAppModel extends SignupListAppModel {
  carCup?: null | CarCup;
  carId: number;
  driverCategory: DriverCategory;
  invalidDriverCount?: boolean;
  raceNumber: number;
  self?: boolean;
  splitId?: null | number;
  teamMembers?: null | Array<SignupListAppModel>;
  teamname?: null | string;
  waitlistSplitId?: null | number;
}
