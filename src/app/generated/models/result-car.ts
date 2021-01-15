/* tslint:disable */
/* eslint-disable */
import { ResultDriver } from './result-driver';
export interface ResultCar {
  carId?: number;
  carModel?: number;
  cupCategory?: number;
  drivers?: null | Array<ResultDriver>;
  raceNumber?: number;
  teamName?: null | string;
}
