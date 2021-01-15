/* tslint:disable */
/* eslint-disable */
import { TeamSignupsAppModel } from './team-signups-app-model';
export interface TeamSignupsEventAppModel {
  dynamicTeamsize?: boolean;
  id?: number;
  maxmimumDriversPerTeam?: null | number;
  minimumDriversPerTeam?: null | number;
  name?: null | string;
  signups?: null | Array<TeamSignupsAppModel>;
  teamName?: null | string;
}
