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

import { ConfigAppModel } from '../models/config-app-model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation configGet
   */
  static readonly ConfigGetPath = '/api/config/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  configGet$Response(params?: {
  }): Observable<StrictHttpResponse<ConfigAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ConfigAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configGet(params?: {
  }): Observable<ConfigAppModel> {

    return this.configGet$Response(params).pipe(
      map((r: StrictHttpResponse<ConfigAppModel>) => r.body as ConfigAppModel)
    );
  }

  /**
   * Path part for operation configSave
   */
  static readonly ConfigSavePath = '/api/config/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  configSave$Response(params: {
    body: ConfigAppModel
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  configSave(params: {
    body: ConfigAppModel
  }): Observable<number> {

    return this.configSave$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
