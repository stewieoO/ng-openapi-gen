/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LivefeedInfo } from '../models/livefeed-info';
import { RealtimeCarUpdate } from '../models/realtime-car-update';

@Injectable({
  providedIn: 'root',
})
export class LivefeedService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation livefeedInfo
   */
  static readonly LivefeedInfoPath = '/api/livefeed/info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `livefeedInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  livefeedInfo$Response(params?: {
    raceId?: number;
  }): Observable<StrictHttpResponse<LivefeedInfo>> {

    const rb = new RequestBuilder(this.rootUrl, LivefeedService.LivefeedInfoPath, 'get');
    if (params) {
      rb.query('raceId', params.raceId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LivefeedInfo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `livefeedInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  livefeedInfo(params?: {
    raceId?: number;
  }): Observable<LivefeedInfo> {

    return this.livefeedInfo$Response(params).pipe(
      map((r: StrictHttpResponse<LivefeedInfo>) => r.body as LivefeedInfo)
    );
  }

  /**
   * Path part for operation livefeedTeamNames
   */
  static readonly LivefeedTeamNamesPath = '/api/livefeed/teamnames';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `livefeedTeamNames()` instead.
   *
   * This method doesn't expect any request body.
   */
  livefeedTeamNames$Response(params?: {
    livefeedId?: string;
  }): Observable<StrictHttpResponse<{ [key: string]: string }>> {

    const rb = new RequestBuilder(this.rootUrl, LivefeedService.LivefeedTeamNamesPath, 'get');
    if (params) {
      rb.query('livefeedId', params.livefeedId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{ [key: string]: string }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `livefeedTeamNames$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  livefeedTeamNames(params?: {
    livefeedId?: string;
  }): Observable<{ [key: string]: string }> {

    return this.livefeedTeamNames$Response(params).pipe(
      map((r: StrictHttpResponse<{ [key: string]: string }>) => r.body as { [key: string]: string })
    );
  }

  /**
   * Path part for operation livefeedSendUpdate
   */
  static readonly LivefeedSendUpdatePath = '/api/livefeed/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `livefeedSendUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  livefeedSendUpdate$Response(params: {
    livefeedId?: string;
    body: Array<RealtimeCarUpdate>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LivefeedService.LivefeedSendUpdatePath, 'post');
    if (params) {
      rb.query('livefeedId', params.livefeedId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `livefeedSendUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  livefeedSendUpdate(params: {
    livefeedId?: string;
    body: Array<RealtimeCarUpdate>
  }): Observable<void> {

    return this.livefeedSendUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
