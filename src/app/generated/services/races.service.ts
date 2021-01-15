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

import { PagedResultOfRaceDefinitionListAppModel } from '../models/paged-result-of-race-definition-list-app-model';
import { RaceListRequest } from '../models/race-list-request';

@Injectable({
  providedIn: 'root',
})
export class RacesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation racesList
   */
  static readonly RacesListPath = '/api/races/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `racesList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  racesList$Response(params: {
    body: RaceListRequest
  }): Observable<StrictHttpResponse<PagedResultOfRaceDefinitionListAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, RacesService.RacesListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PagedResultOfRaceDefinitionListAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `racesList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  racesList(params: {
    body: RaceListRequest
  }): Observable<PagedResultOfRaceDefinitionListAppModel> {

    return this.racesList$Response(params).pipe(
      map((r: StrictHttpResponse<PagedResultOfRaceDefinitionListAppModel>) => r.body as PagedResultOfRaceDefinitionListAppModel)
    );
  }

}
