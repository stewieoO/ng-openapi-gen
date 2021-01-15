/* tslint:disable */
/* eslint-disable */
import { DriverCategory } from './driver-category';
export interface SignupAppModel {
  carId?: null | number;
  customLiveryId?: null | number;
  driverCategory?: null | DriverCategory;
  driverId?: null | number;
  eventId: number;
  id?: number;
  livery?: null | string;
  raceNumber?: null | number;
  splitId: number;
  teamCreator?: null | boolean;
  teamOwnerId?: null | number;
  teamPin?: null | string;
  teamname?: null | string;
  waitlistSplitId?: null | number;
}
