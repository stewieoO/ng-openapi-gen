/* tslint:disable */
/* eslint-disable */
import { ResultLap } from './result-lap';
import { ResultPenalty } from './result-penalty';
import { ResultSessionResult } from './result-session-result';
export interface ResultJson {
  laps?: null | Array<ResultLap>;
  penalties?: null | Array<ResultPenalty>;
  sessionIndex?: number;
  sessionResult?: null | ResultSessionResult;
  sessionType?: null | string;
  trackName?: null | string;
}
