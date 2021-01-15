/* tslint:disable */
/* eslint-disable */
import { ResultLeaderBoardLine } from './result-leader-board-line';
export interface ResultSessionResult {
  bestSplits?: null | Array<number>;
  bestlap?: number;
  isWetSession?: number;
  leaderBoardLines?: null | Array<ResultLeaderBoardLine>;
  type?: number;
}
