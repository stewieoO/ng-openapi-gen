/* tslint:disable */
/* eslint-disable */
import { RaceListAppModel } from './race-list-app-model';
export interface RaceDefinitionListAppModel {
  end?: string;
  event?: null | string;
  id?: number;
  name?: null | string;
  races?: null | Array<RaceListAppModel>;
  start?: string;
  track?: null | string;
}
