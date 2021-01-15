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

import { CustomUserInfoResult } from '../models/custom-user-info-result';
import { LoginModel } from '../models/login-model';
import { LoginResult } from '../models/login-result';

@Injectable({
  providedIn: 'root',
})
export class IdentityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation identityLogin
   */
  static readonly IdentityLoginPath = '/api/id/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `identityLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  identityLogin$Response(params: {
    body: LoginModel
  }): Observable<StrictHttpResponse<LoginResult>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.IdentityLoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `identityLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  identityLogin(params: {
    body: LoginModel
  }): Observable<LoginResult> {

    return this.identityLogin$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResult>) => r.body as LoginResult)
    );
  }

  /**
   * Path part for operation identityLogout
   */
  static readonly IdentityLogoutPath = '/api/id/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `identityLogout()` instead.
   *
   * This method doesn't expect any request body.
   */
  identityLogout$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.IdentityLogoutPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `identityLogout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  identityLogout(params?: {
  }): Observable<void> {

    return this.identityLogout$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation identityUserInfo
   */
  static readonly IdentityUserInfoPath = '/api/id/userinfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `identityUserInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  identityUserInfo$Response(params?: {
  }): Observable<StrictHttpResponse<CustomUserInfoResult>> {

    const rb = new RequestBuilder(this.rootUrl, IdentityService.IdentityUserInfoPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomUserInfoResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `identityUserInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  identityUserInfo(params?: {
  }): Observable<CustomUserInfoResult> {

    return this.identityUserInfo$Response(params).pipe(
      map((r: StrictHttpResponse<CustomUserInfoResult>) => r.body as CustomUserInfoResult)
    );
  }

}
