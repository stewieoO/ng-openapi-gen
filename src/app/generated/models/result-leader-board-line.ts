/* tslint:disable */
/* eslint-disable */
import { ResultCar } from './result-car';
import { ResultCurrentDriver } from './result-current-driver';
import { ResultTiming } from './result-timing';
export interface ResultLeaderBoardLine {
  car?: null | ResultCar;
  currentDriver?: null | ResultCurrentDriver;
  currentDriverIndex?: number;
  driverTotalTimes?: null | Array<number>;
  missingMandatoryPitstop?: number;
  timing?: null | ResultTiming;
}
