/* tslint:disable */
/* eslint-disable */
import { DriverInfo } from './driver-info';
import { Nationality } from './nationality';
import { PitStops } from './pit-stops';
export interface CarInfo {
  carIndex?: number;
  carModelType?: number;
  cupCategory?: number;
  currentDriverIndex?: number;
  currentDriverInfo?: DriverInfo;
  currentLap?: number;
  drivers?: null | Array<DriverInfo>;
  lastUpdate?: null | string;
  nationality?: Nationality;
  pitStops?: null | PitStops;
  raceNumber?: number;
  teamName?: null | string;
}
