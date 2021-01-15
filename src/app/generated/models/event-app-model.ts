/* tslint:disable */
/* eslint-disable */
import { RaceDefinitionAppModel } from './race-definition-app-model';
import { SplitAppModel } from './split-app-model';
export interface EventAppModel {
  allowLiveries?: boolean;
  description: string;
  dynamicTeamsize?: boolean;
  id?: number;
  imageUrl?: null | string;
  inviteId?: string;
  minimumDriversPerTeam?: null | number;
  name: string;
  public?: boolean;
  raceDefinitions?: null | Array<RaceDefinitionAppModel>;
  role: string;
  signupEnd: string;
  signupStart: string;
  splits?: null | Array<SplitAppModel>;
  teamEvent?: boolean;
  vipDrivers?: null | Array<number>;
}
