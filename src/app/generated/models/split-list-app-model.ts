/* tslint:disable */
/* eslint-disable */
import { CarCup } from './car-cup';
import { DriverCategory } from './driver-category';
export interface SplitListAppModel {
  allowedCarCups?: null | Array<CarCup>;
  allowedCars?: null | Array<number>;
  defaultCarId?: null | number;
  defaultDriverCategory?: null | DriverCategory;
  defaultRacenumber?: null | number;
  defaultSelected?: boolean;
  hidden?: boolean;
  id?: number;
  name?: null | string;
  selectableDriverCategories?: null | Array<DriverCategory>;
  signupCount?: number;
}
