/* tslint:disable */
/* eslint-disable */
import { EventSignupsSplitAppModel } from './event-signups-split-app-model';
import { SignupListRootAppModel } from './signup-list-root-app-model';
export interface EventSignupsAppModel {
  dynamicTeamsize?: boolean;
  id?: number;
  maxDriversPerTeam?: null | number;
  minimumDriversPerTeam?: null | number;
  name?: null | string;
  signups?: null | Array<SignupListRootAppModel>;
  splits?: null | Array<EventSignupsSplitAppModel>;
  syncCount?: number;
  syncTimestamp?: string;
  teamEvent?: boolean;
}
