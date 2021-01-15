/* tslint:disable */
/* eslint-disable */
import { ResultImportSplitAppModel } from './result-import-split-app-model';
import { ResultJson } from './result-json';
export interface ResultImportAppModel {
  driversPerSplit: number;
  dummyResult?: null | ResultJson;
  eventId: number;
  resultFiles: Array<string>;
  splits: Array<ResultImportSplitAppModel>;
}
