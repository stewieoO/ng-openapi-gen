/* tslint:disable */
/* eslint-disable */
import { CarInfo } from './car-info';
import { CarLocation } from './car-location';
import { LapInfo } from './lap-info';
export interface RealtimeCarUpdate {
  bestSessionLap?: null | LapInfo;
  carIndex?: number;
  carInfo?: null | CarInfo;
  carLocation?: CarLocation;
  cupPosition?: number;
  currentLap?: null | LapInfo;
  delta?: number;
  deltaNegative?: boolean;
  deltaStr?: null | string;
  driverCount?: number;
  driverIndex?: number;
  gapFirst?: null | string;
  gapFirstSeconds?: number;
  gapFront?: null | string;
  gapFrontSeconds?: number;
  gear?: number;
  kmh?: number;
  laps?: number;
  lapsBehind?: number;
  lapsBehindFirst?: number;
  lastLap?: null | LapInfo;
  position?: number;
  splinePosition?: number;
  trackPosition?: number;
  worldPosX?: number;
  worldPosY?: number;
  yaw?: number;
}
