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

import { CarSelectItem } from '../models/car-select-item';
import { DiscordRoleSelectItem } from '../models/discord-role-select-item';
import { SelectItem } from '../models/select-item';
import { StringSelectItem } from '../models/string-select-item';

@Injectable({
  providedIn: 'root',
})
export class UtilsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation utilsDriverCategories
   */
  static readonly UtilsDriverCategoriesPath = '/api/utils/drivercategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsDriverCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsDriverCategories$Response(params?: {
    eventId?: number;
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsDriverCategoriesPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsDriverCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsDriverCategories(params?: {
    eventId?: number;
  }): Observable<Array<SelectItem>> {

    return this.utilsDriverCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

  /**
   * Path part for operation utilsCupCategories
   */
  static readonly UtilsCupCategoriesPath = '/api/utils/cupcategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsCupCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCupCategories$Response(params?: {
    eventId?: number;
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsCupCategoriesPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsCupCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCupCategories(params?: {
    eventId?: number;
  }): Observable<Array<SelectItem>> {

    return this.utilsCupCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

  /**
   * Path part for operation utilsCarCups
   */
  static readonly UtilsCarCupsPath = '/api/utils/carcups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsCarCups()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCarCups$Response(params?: {
    eventId?: number;
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsCarCupsPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsCarCups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCarCups(params?: {
    eventId?: number;
  }): Observable<Array<SelectItem>> {

    return this.utilsCarCups$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

  /**
   * Path part for operation utilsCars
   */
  static readonly UtilsCarsPath = '/api/utils/cars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCars$Response(params?: {
    eventId?: number;
  }): Observable<StrictHttpResponse<Array<CarSelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsCarsPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CarSelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCars(params?: {
    eventId?: number;
  }): Observable<Array<CarSelectItem>> {

    return this.utilsCars$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarSelectItem>>) => r.body as Array<CarSelectItem>)
    );
  }

  /**
   * Path part for operation utilsRoles
   */
  static readonly UtilsRolesPath = '/api/utils/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsRoles$Response(params?: {
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsRoles(params?: {
  }): Observable<Array<SelectItem>> {

    return this.utilsRoles$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

  /**
   * Path part for operation utilsUsers
   */
  static readonly UtilsUsersPath = '/api/utils/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsUsers$Response(params?: {
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsUsersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsUsers(params?: {
  }): Observable<Array<SelectItem>> {

    return this.utilsUsers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

  /**
   * Path part for operation utilsCountriesList
   */
  static readonly UtilsCountriesListPath = '/api/utils/countries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsCountriesList()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCountriesList$Response(params?: {
  }): Observable<StrictHttpResponse<Array<StringSelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsCountriesListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StringSelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsCountriesList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsCountriesList(params?: {
  }): Observable<Array<StringSelectItem>> {

    return this.utilsCountriesList$Response(params).pipe(
      map((r: StrictHttpResponse<Array<StringSelectItem>>) => r.body as Array<StringSelectItem>)
    );
  }

  /**
   * Path part for operation utilsDiscordRoles
   */
  static readonly UtilsDiscordRolesPath = '/api/utils/discordroles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsDiscordRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsDiscordRoles$Response(params?: {
  }): Observable<StrictHttpResponse<Array<DiscordRoleSelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsDiscordRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DiscordRoleSelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsDiscordRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsDiscordRoles(params?: {
  }): Observable<Array<DiscordRoleSelectItem>> {

    return this.utilsDiscordRoles$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DiscordRoleSelectItem>>) => r.body as Array<DiscordRoleSelectItem>)
    );
  }

  /**
   * Path part for operation utilsDriverNames
   */
  static readonly UtilsDriverNamesPath = '/api/utils/drivernames';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `utilsDriverNames()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsDriverNames$Response(params?: {
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilsService.UtilsDriverNamesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SelectItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `utilsDriverNames$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  utilsDriverNames(params?: {
  }): Observable<Array<SelectItem>> {

    return this.utilsDriverNames$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

}
