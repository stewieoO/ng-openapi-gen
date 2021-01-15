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

import { PagedResultOfUserListAppModel } from '../models/paged-result-of-user-list-app-model';
import { UserAppModel } from '../models/user-app-model';
import { UserListRequest } from '../models/user-list-request';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation usersList
   */
  static readonly UsersListPath = '/api/users/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersList$Response(params: {
    body: UserListRequest
  }): Observable<StrictHttpResponse<PagedResultOfUserListAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PagedResultOfUserListAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersList(params: {
    body: UserListRequest
  }): Observable<PagedResultOfUserListAppModel> {

    return this.usersList$Response(params).pipe(
      map((r: StrictHttpResponse<PagedResultOfUserListAppModel>) => r.body as PagedResultOfUserListAppModel)
    );
  }

  /**
   * Path part for operation usersDetail
   */
  static readonly UsersDetailPath = '/api/users/detail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersDetail()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersDetail$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<UserAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersDetailPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersDetail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersDetail(params?: {
    id?: number;
  }): Observable<UserAppModel> {

    return this.usersDetail$Response(params).pipe(
      map((r: StrictHttpResponse<UserAppModel>) => r.body as UserAppModel)
    );
  }

  /**
   * Path part for operation usersSave
   */
  static readonly UsersSavePath = '/api/users/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersSave$Response(params: {
    body: UserAppModel
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersSavePath, 'post');
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
   * To access the full response (for headers, for example), `usersSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersSave(params: {
    body: UserAppModel
  }): Observable<number> {

    return this.usersSave$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
