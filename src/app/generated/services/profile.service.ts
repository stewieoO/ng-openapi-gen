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

import { ProfileAppModel } from '../models/profile-app-model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation profileGet
   */
  static readonly ProfileGetPath = '/api/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `profileGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileGet$Response(params?: {
  }): Observable<StrictHttpResponse<ProfileAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProfileAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `profileGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  profileGet(params?: {
  }): Observable<ProfileAppModel> {

    return this.profileGet$Response(params).pipe(
      map((r: StrictHttpResponse<ProfileAppModel>) => r.body as ProfileAppModel)
    );
  }

  /**
   * Path part for operation profileSave
   */
  static readonly ProfileSavePath = '/api/profile/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `profileSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  profileSave$Response(params: {
    body: ProfileAppModel
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ProfileSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/octet-stream'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `profileSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  profileSave(params: {
    body: ProfileAppModel
  }): Observable<Blob> {

    return this.profileSave$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
