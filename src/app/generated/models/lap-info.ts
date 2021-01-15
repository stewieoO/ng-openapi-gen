/* tslint:disable */
/* eslint-disable */
import { LapType } from './lap-type';
export interface LapInfo {
  carIndex?: number;
  driverIndex?: number;
  isInvalid?: boolean;
  isValidForBest?: boolean;
  laptime?: null | string;
  laptimeMS?: null | number;
  splits?: null | Array<number>;
  type?: LapType;
}
