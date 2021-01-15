/* tslint:disable */
/* eslint-disable */
import { SignupLimitType } from './signup-limit-type';
export interface SignupLimitAppModel {
  id?: number;
  limitValue?: null | number;
  markAsDelete?: null | boolean;
  splitId?: number;
  type?: null | SignupLimitType;
  typeValue?: null | number;
}
