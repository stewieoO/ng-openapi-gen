/* tslint:disable */
/* eslint-disable */
import { EventListAppModel } from './event-list-app-model';
import { RaceDefinitionHomeListAppModel } from './race-definition-home-list-app-model';
export interface EventListHomeAppModel extends EventListAppModel {
  canManageTeam?: boolean;
  canSignup?: null | boolean;
  currentRace?: null | RaceDefinitionHomeListAppModel;
  description?: null | string;
  dynamicTeamsize?: boolean;
  imageUrl?: null | string;
  inviteId?: null | string;
  maxmimumDriversPerTeam?: null | number;
  minimumDriversPerTeam?: null | number;
  nextRace?: null | RaceDefinitionHomeListAppModel;
  raceDefinitions?: null | Array<RaceDefinitionHomeListAppModel>;
  signedUp?: null | boolean;
  signupId?: null | number;
  teamCreator?: null | boolean;
}
