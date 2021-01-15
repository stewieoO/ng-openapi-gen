/* tslint:disable */
/* eslint-disable */
import { ResultPreviewDriver } from './result-preview-driver';
import { ResultPreviewSplit } from './result-preview-split';
export interface ResultPreviewResponse {
  noShows?: null | Array<ResultPreviewDriver>;
  splits?: null | Array<ResultPreviewSplit>;
}
