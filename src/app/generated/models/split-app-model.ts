/* tslint:disable */
/* eslint-disable */
import { CarCup } from './car-cup';
import { DriverCategory } from './driver-category';
import { SignupLimitAppModel } from './signup-limit-app-model';
export interface SplitAppModel {
  allowedCarCups?: null | Array<CarCup>;
  allowedCars?: null | Array<number>;
  hidden?: boolean;
  id?: number;
  livefeedId?: null | string;
  markAsDelete?: null | boolean;
  name?: null | string;
  role?: null | string;
  selectableDriverCategories?: null | Array<DriverCategory>;
  signupLimits?: null | Array<SignupLimitAppModel>;
}
