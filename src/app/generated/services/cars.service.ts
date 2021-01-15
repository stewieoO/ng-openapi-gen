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

import { CarAppModel } from '../models/car-app-model';
import { CarListRequest } from '../models/car-list-request';
import { PagedResultOfCarListAppModel } from '../models/paged-result-of-car-list-app-model';

@Injectable({
  providedIn: 'root',
})
export class CarsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation carsList
   */
  static readonly CarsListPath = '/api/cars/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carsList$Response(params: {
    body: CarListRequest
  }): Observable<StrictHttpResponse<PagedResultOfCarListAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.CarsListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PagedResultOfCarListAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `carsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carsList(params: {
    body: CarListRequest
  }): Observable<PagedResultOfCarListAppModel> {

    return this.carsList$Response(params).pipe(
      map((r: StrictHttpResponse<PagedResultOfCarListAppModel>) => r.body as PagedResultOfCarListAppModel)
    );
  }

  /**
   * Path part for operation carsDetail
   */
  static readonly CarsDetailPath = '/api/cars/detail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carsDetail()` instead.
   *
   * This method doesn't expect any request body.
   */
  carsDetail$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<CarAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.CarsDetailPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `carsDetail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carsDetail(params?: {
    id?: number;
  }): Observable<CarAppModel> {

    return this.carsDetail$Response(params).pipe(
      map((r: StrictHttpResponse<CarAppModel>) => r.body as CarAppModel)
    );
  }

  /**
   * Path part for operation carsSave
   */
  static readonly CarsSavePath = '/api/cars/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carsSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carsSave$Response(params: {
    body: CarAppModel
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.CarsSavePath, 'post');
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
   * To access the full response (for headers, for example), `carsSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  carsSave(params: {
    body: CarAppModel
  }): Observable<number> {

    return this.carsSave$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation carsDelete
   */
  static readonly CarsDeletePath = '/api/cars/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  carsDelete$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.CarsDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `carsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carsDelete(params?: {
    id?: number;
  }): Observable<void> {

    return this.carsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation carsCheckId
   */
  static readonly CarsCheckIdPath = '/api/cars/checkId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `carsCheckId()` instead.
   *
   * This method doesn't expect any request body.
   */
  carsCheckId$Response(params?: {
    id?: number;
    currentId?: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.CarsCheckIdPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('currentId', params.currentId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `carsCheckId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  carsCheckId(params?: {
    id?: number;
    currentId?: number;
  }): Observable<boolean> {

    return this.carsCheckId$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
