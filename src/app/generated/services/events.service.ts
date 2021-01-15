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

import { EventAppModel } from '../models/event-app-model';
import { EventListRequest } from '../models/event-list-request';
import { EventSignupsAppModel } from '../models/event-signups-app-model';
import { EventSignupsFilter } from '../models/event-signups-filter';
import { ExportEntryListRequest } from '../models/export-entry-list-request';
import { ExportSpotterRequest } from '../models/export-spotter-request';
import { EventInput } from '@fullcalendar/core';
import { HomeEventAppModel } from '../models/home-event-app-model';
import { PagedResultOfEventListAppModel } from '../models/paged-result-of-event-list-app-model';
import { ResultImportAppModel } from '../models/result-import-app-model';
import { ResultPreviewResponse } from '../models/result-preview-response';

@Injectable({
  providedIn: 'root',
})
export class EventsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation eventsList
   */
  static readonly EventsListPath = '/api/events/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsList$Response(params: {
    body: EventListRequest
  }): Observable<StrictHttpResponse<PagedResultOfEventListAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PagedResultOfEventListAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsList(params: {
    body: EventListRequest
  }): Observable<PagedResultOfEventListAppModel> {

    return this.eventsList$Response(params).pipe(
      map((r: StrictHttpResponse<PagedResultOfEventListAppModel>) => r.body as PagedResultOfEventListAppModel)
    );
  }

  /**
   * Path part for operation eventsDetail
   */
  static readonly EventsDetailPath = '/api/events/detail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsDetail()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsDetail$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<EventAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsDetailPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EventAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsDetail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsDetail(params?: {
    id?: number;
  }): Observable<EventAppModel> {

    return this.eventsDetail$Response(params).pipe(
      map((r: StrictHttpResponse<EventAppModel>) => r.body as EventAppModel)
    );
  }

  /**
   * Path part for operation eventsSave
   */
  static readonly EventsSavePath = '/api/events/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsSave$Response(params: {
    body: EventAppModel
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsSavePath, 'post');
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
   * To access the full response (for headers, for example), `eventsSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsSave(params: {
    body: EventAppModel
  }): Observable<number> {

    return this.eventsSave$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation eventsDelete
   */
  static readonly EventsDeletePath = '/api/events/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsDelete$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `eventsDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsDelete(params?: {
    id?: number;
  }): Observable<void> {

    return this.eventsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation eventsHome
   */
  static readonly EventsHomePath = '/api/events/home';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsHome()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsHome$Response(params?: {
  }): Observable<StrictHttpResponse<HomeEventAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsHomePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HomeEventAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsHome$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsHome(params?: {
  }): Observable<HomeEventAppModel> {

    return this.eventsHome$Response(params).pipe(
      map((r: StrictHttpResponse<HomeEventAppModel>) => r.body as HomeEventAppModel)
    );
  }

  /**
   * Path part for operation eventsMyEvents
   */
  static readonly EventsMyEventsPath = '/api/events/MyEvents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsMyEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsMyEvents$Response(params?: {
  }): Observable<StrictHttpResponse<HomeEventAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsMyEventsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HomeEventAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsMyEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsMyEvents(params?: {
  }): Observable<HomeEventAppModel> {

    return this.eventsMyEvents$Response(params).pipe(
      map((r: StrictHttpResponse<HomeEventAppModel>) => r.body as HomeEventAppModel)
    );
  }

  /**
   * Path part for operation eventsRaceEvents
   */
  static readonly EventsRaceEventsPath = '/api/events/raceEvents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsRaceEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsRaceEvents$Response(params?: {
  }): Observable<StrictHttpResponse<Array<EventInput>>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsRaceEventsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EventInput>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsRaceEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsRaceEvents(params?: {
  }): Observable<Array<EventInput>> {

    return this.eventsRaceEvents$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EventInput>>) => r.body as Array<EventInput>)
    );
  }

  /**
   * Path part for operation eventsEventSignups
   */
  static readonly EventsEventSignupsPath = '/api/events/Signups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsEventSignups()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsEventSignups$Response(params?: {
    eventId?: number;
  }): Observable<StrictHttpResponse<EventSignupsAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsEventSignupsPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EventSignupsAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsEventSignups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsEventSignups(params?: {
    eventId?: number;
  }): Observable<EventSignupsAppModel> {

    return this.eventsEventSignups$Response(params).pipe(
      map((r: StrictHttpResponse<EventSignupsAppModel>) => r.body as EventSignupsAppModel)
    );
  }

  /**
   * Path part for operation eventsDummyFilter
   */
  static readonly EventsDummyFilterPath = '/api/events/DummyFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsDummyFilter()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsDummyFilter$Response(params?: {
  }): Observable<StrictHttpResponse<EventSignupsFilter>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsDummyFilterPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EventSignupsFilter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsDummyFilter$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventsDummyFilter(params?: {
  }): Observable<EventSignupsFilter> {

    return this.eventsDummyFilter$Response(params).pipe(
      map((r: StrictHttpResponse<EventSignupsFilter>) => r.body as EventSignupsFilter)
    );
  }

  /**
   * Path part for operation eventsSaveSignups
   */
  static readonly EventsSaveSignupsPath = '/api/events/SaveSignups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsSaveSignups()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsSaveSignups$Response(params: {
    body: EventSignupsAppModel
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsSaveSignupsPath, 'post');
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
   * To access the full response (for headers, for example), `eventsSaveSignups$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsSaveSignups(params: {
    body: EventSignupsAppModel
  }): Observable<Blob> {

    return this.eventsSaveSignups$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation eventsImportPreview
   */
  static readonly EventsImportPreviewPath = '/api/events/importPreview';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsImportPreview()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsImportPreview$Response(params: {
    body: ResultImportAppModel
  }): Observable<StrictHttpResponse<ResultPreviewResponse>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsImportPreviewPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResultPreviewResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventsImportPreview$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsImportPreview(params: {
    body: ResultImportAppModel
  }): Observable<ResultPreviewResponse> {

    return this.eventsImportPreview$Response(params).pipe(
      map((r: StrictHttpResponse<ResultPreviewResponse>) => r.body as ResultPreviewResponse)
    );
  }

  /**
   * Path part for operation eventsImportResults
   */
  static readonly EventsImportResultsPath = '/api/events/importResults';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsImportResults()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsImportResults$Response(params: {
    body: ResultImportAppModel
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsImportResultsPath, 'post');
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
   * To access the full response (for headers, for example), `eventsImportResults$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsImportResults(params: {
    body: ResultImportAppModel
  }): Observable<Blob> {

    return this.eventsImportResults$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation eventsExportEntryList
   */
  static readonly EventsExportEntryListPath = '/api/events/exportentrylist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsExportEntryList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsExportEntryList$Response(params: {
    body: ExportEntryListRequest
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsExportEntryListPath, 'post');
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
   * To access the full response (for headers, for example), `eventsExportEntryList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsExportEntryList(params: {
    body: ExportEntryListRequest
  }): Observable<Blob> {

    return this.eventsExportEntryList$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation eventsExportSpotter
   */
  static readonly EventsExportSpotterPath = '/api/events/exportspotter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventsExportSpotter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsExportSpotter$Response(params: {
    body: ExportSpotterRequest
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, EventsService.EventsExportSpotterPath, 'post');
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
   * To access the full response (for headers, for example), `eventsExportSpotter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  eventsExportSpotter(params: {
    body: ExportSpotterRequest
  }): Observable<Blob> {

    return this.eventsExportSpotter$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
