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

import { DriverCategory } from '../models/driver-category';
import { LimitCheckResult } from '../models/limit-check-result';
import { SelectItem } from '../models/select-item';
import { SignupAppModel } from '../models/signup-app-model';
import { SignupsEventInfo } from '../models/signups-event-info';
import { TeamSignupsEventAppModel } from '../models/team-signups-event-app-model';

@Injectable({
  providedIn: 'root',
})
export class SignupsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation signupsInvite
   */
  static readonly SignupsInvitePath = '/api/signups/invite';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsInvite()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsInvite$Response(params?: {
    inviteId?: string;
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsInvitePath, 'get');
    if (params) {
      rb.query('inviteId', params.inviteId, {});
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
   * To access the full response (for headers, for example), `signupsInvite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsInvite(params?: {
    inviteId?: string;
  }): Observable<number> {

    return this.signupsInvite$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation signupsProfileComplete
   */
  static readonly SignupsProfileCompletePath = '/api/signups/profilecomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsProfileComplete()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsProfileComplete$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsProfileCompletePath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `signupsProfileComplete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsProfileComplete(params?: {
  }): Observable<boolean> {

    return this.signupsProfileComplete$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation signupsJoinedDiscord
   */
  static readonly SignupsJoinedDiscordPath = '/api/signups/joineddiscord';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsJoinedDiscord()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsJoinedDiscord$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsJoinedDiscordPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `signupsJoinedDiscord$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsJoinedDiscord(params?: {
  }): Observable<boolean> {

    return this.signupsJoinedDiscord$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation signupsFlaggedAccount
   */
  static readonly SignupsFlaggedAccountPath = '/api/signups/flaggedAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsFlaggedAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsFlaggedAccount$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsFlaggedAccountPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `signupsFlaggedAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsFlaggedAccount(params?: {
  }): Observable<boolean> {

    return this.signupsFlaggedAccount$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation signupsGet
   */
  static readonly SignupsGetPath = '/api/signups/signup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsGet$Response(params?: {
    eventId?: number;
    driverId?: number;
    inviteId?: string;
  }): Observable<StrictHttpResponse<SignupAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsGetPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
      rb.query('driverId', params.driverId, {});
      rb.query('inviteId', params.inviteId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SignupAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsGet(params?: {
    eventId?: number;
    driverId?: number;
    inviteId?: string;
  }): Observable<SignupAppModel> {

    return this.signupsGet$Response(params).pipe(
      map((r: StrictHttpResponse<SignupAppModel>) => r.body as SignupAppModel)
    );
  }

  /**
   * Path part for operation signupsSignOut
   */
  static readonly SignupsSignOutPath = '/api/signups/signout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsSignOut()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsSignOut$Response(params?: {
    eventId?: number;
    driverId?: number;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsSignOutPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
      rb.query('driverId', params.driverId, {});
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
   * To access the full response (for headers, for example), `signupsSignOut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsSignOut(params?: {
    eventId?: number;
    driverId?: number;
  }): Observable<Blob> {

    return this.signupsSignOut$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation signupsSave
   */
  static readonly SignupsSavePath = '/api/signups/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signupsSave$Response(params: {
    inviteId?: string;
    body: SignupAppModel
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsSavePath, 'post');
    if (params) {
      rb.query('inviteId', params.inviteId, {});
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
   * To access the full response (for headers, for example), `signupsSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signupsSave(params: {
    inviteId?: string;
    body: SignupAppModel
  }): Observable<Blob> {

    return this.signupsSave$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation signupsEvent
   */
  static readonly SignupsEventPath = '/api/signups/event';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsEvent$Response(params?: {
    eventId?: number;
    withDefaults?: boolean;
    inviteId?: string;
  }): Observable<StrictHttpResponse<SignupsEventInfo>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsEventPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
      rb.query('withDefaults', params.withDefaults, {});
      rb.query('inviteId', params.inviteId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SignupsEventInfo>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsEvent(params?: {
    eventId?: number;
    withDefaults?: boolean;
    inviteId?: string;
  }): Observable<SignupsEventInfo> {

    return this.signupsEvent$Response(params).pipe(
      map((r: StrictHttpResponse<SignupsEventInfo>) => r.body as SignupsEventInfo)
    );
  }

  /**
   * Path part for operation signupsCheckSplitOpen
   */
  static readonly SignupsCheckSplitOpenPath = '/api/signups/checksplit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckSplitOpen()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckSplitOpen$Response(params?: {
    splitId?: number;
    signupId?: number;
  }): Observable<StrictHttpResponse<Array<LimitCheckResult>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckSplitOpenPath, 'get');
    if (params) {
      rb.query('splitId', params.splitId, {});
      rb.query('signupId', params.signupId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitCheckResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsCheckSplitOpen$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckSplitOpen(params?: {
    splitId?: number;
    signupId?: number;
  }): Observable<Array<LimitCheckResult>> {

    return this.signupsCheckSplitOpen$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LimitCheckResult>>) => r.body as Array<LimitCheckResult>)
    );
  }

  /**
   * Path part for operation signupsCheckRacenumber
   */
  static readonly SignupsCheckRacenumberPath = '/api/signups/checkracenumber';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckRacenumber()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckRacenumber$Response(params?: {
    signupId?: number;
    splitId?: number;
    racenumber?: number;
    waitlistSplitId?: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckRacenumberPath, 'get');
    if (params) {
      rb.query('signupId', params.signupId, {});
      rb.query('splitId', params.splitId, {});
      rb.query('racenumber', params.racenumber, {});
      rb.query('waitlistSplitId', params.waitlistSplitId, {});
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
   * To access the full response (for headers, for example), `signupsCheckRacenumber$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckRacenumber(params?: {
    signupId?: number;
    splitId?: number;
    racenumber?: number;
    waitlistSplitId?: number;
  }): Observable<boolean> {

    return this.signupsCheckRacenumber$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation signupsCheckCarCup
   */
  static readonly SignupsCheckCarCupPath = '/api/signups/checkcarcup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckCarCup()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckCarCup$Response(params?: {
    splitId?: number;
    carId?: number;
    signupId?: number;
  }): Observable<StrictHttpResponse<Array<LimitCheckResult>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckCarCupPath, 'get');
    if (params) {
      rb.query('splitId', params.splitId, {});
      rb.query('carId', params.carId, {});
      rb.query('signupId', params.signupId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitCheckResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsCheckCarCup$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckCarCup(params?: {
    splitId?: number;
    carId?: number;
    signupId?: number;
  }): Observable<Array<LimitCheckResult>> {

    return this.signupsCheckCarCup$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LimitCheckResult>>) => r.body as Array<LimitCheckResult>)
    );
  }

  /**
   * Path part for operation signupsCheckDriverCategory
   */
  static readonly SignupsCheckDriverCategoryPath = '/api/signups/checkdrivercategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckDriverCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckDriverCategory$Response(params?: {
    splitId?: number;
    driverCategory?: DriverCategory;
    signupId?: number;
  }): Observable<StrictHttpResponse<Array<LimitCheckResult>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckDriverCategoryPath, 'get');
    if (params) {
      rb.query('splitId', params.splitId, {});
      rb.query('driverCategory', params.driverCategory, {});
      rb.query('signupId', params.signupId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitCheckResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsCheckDriverCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckDriverCategory(params?: {
    splitId?: number;
    driverCategory?: DriverCategory;
    signupId?: number;
  }): Observable<Array<LimitCheckResult>> {

    return this.signupsCheckDriverCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LimitCheckResult>>) => r.body as Array<LimitCheckResult>)
    );
  }

  /**
   * Path part for operation signupsCheckTeamCreator
   */
  static readonly SignupsCheckTeamCreatorPath = '/api/signups/checkteamcreator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckTeamCreator()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamCreator$Response(params?: {
    splitId?: number;
    signupId?: number;
  }): Observable<StrictHttpResponse<Array<LimitCheckResult>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckTeamCreatorPath, 'get');
    if (params) {
      rb.query('splitId', params.splitId, {});
      rb.query('signupId', params.signupId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitCheckResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsCheckTeamCreator$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamCreator(params?: {
    splitId?: number;
    signupId?: number;
  }): Observable<Array<LimitCheckResult>> {

    return this.signupsCheckTeamCreator$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LimitCheckResult>>) => r.body as Array<LimitCheckResult>)
    );
  }

  /**
   * Path part for operation signupsCheckTeamName
   */
  static readonly SignupsCheckTeamNamePath = '/api/signups/checkteamname';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckTeamName()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamName$Response(params?: {
    eventId?: number;
    teamname?: string;
    signupId?: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckTeamNamePath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
      rb.query('teamname', params.teamname, {});
      rb.query('signupId', params.signupId, {});
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
   * To access the full response (for headers, for example), `signupsCheckTeamName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamName(params?: {
    eventId?: number;
    teamname?: string;
    signupId?: number;
  }): Observable<boolean> {

    return this.signupsCheckTeamName$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation signupsCheckTeamPin
   */
  static readonly SignupsCheckTeamPinPath = '/api/signups/checkteampin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckTeamPin()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamPin$Response(params?: {
    teamId?: number;
    pin?: string;
    signupId?: number;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckTeamPinPath, 'get');
    if (params) {
      rb.query('teamId', params.teamId, {});
      rb.query('pin', params.pin, {});
      rb.query('signupId', params.signupId, {});
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
   * To access the full response (for headers, for example), `signupsCheckTeamPin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamPin(params?: {
    teamId?: number;
    pin?: string;
    signupId?: number;
  }): Observable<boolean> {

    return this.signupsCheckTeamPin$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation signupsCheckTeamOwner
   */
  static readonly SignupsCheckTeamOwnerPath = '/api/signups/checkteamowner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsCheckTeamOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamOwner$Response(params?: {
    splitId?: number;
    teamId?: number;
    signupId?: number;
  }): Observable<StrictHttpResponse<Array<LimitCheckResult>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsCheckTeamOwnerPath, 'get');
    if (params) {
      rb.query('splitId', params.splitId, {});
      rb.query('teamId', params.teamId, {});
      rb.query('signupId', params.signupId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LimitCheckResult>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsCheckTeamOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsCheckTeamOwner(params?: {
    splitId?: number;
    teamId?: number;
    signupId?: number;
  }): Observable<Array<LimitCheckResult>> {

    return this.signupsCheckTeamOwner$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LimitCheckResult>>) => r.body as Array<LimitCheckResult>)
    );
  }

  /**
   * Path part for operation signupsTeamsForSplit
   */
  static readonly SignupsTeamsForSplitPath = '/api/signups/teams';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsTeamsForSplit()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsTeamsForSplit$Response(params?: {
    eventId?: number;
    splitId?: number;
    signupId?: number;
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsTeamsForSplitPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
      rb.query('splitId', params.splitId, {});
      rb.query('signupId', params.signupId, {});
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
   * To access the full response (for headers, for example), `signupsTeamsForSplit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsTeamsForSplit(params?: {
    eventId?: number;
    splitId?: number;
    signupId?: number;
  }): Observable<Array<SelectItem>> {

    return this.signupsTeamsForSplit$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

  /**
   * Path part for operation signupsRemoveLivery
   */
  static readonly SignupsRemoveLiveryPath = '/api/signups/removeLivery';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsRemoveLivery()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsRemoveLivery$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsRemoveLiveryPath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `signupsRemoveLivery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsRemoveLivery(params?: {
    id?: number;
  }): Observable<Blob> {

    return this.signupsRemoveLivery$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation signupsLiveryName
   */
  static readonly SignupsLiveryNamePath = '/api/signups/liveryName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsLiveryName()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsLiveryName$Response(params?: {
    id?: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsLiveryNamePath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsLiveryName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsLiveryName(params?: {
    id?: number;
  }): Observable<string> {

    return this.signupsLiveryName$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation signupsTeamDriverNames
   */
  static readonly SignupsTeamDriverNamesPath = '/api/signups/teammembers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsTeamDriverNames()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsTeamDriverNames$Response(params?: {
    signupId?: number;
  }): Observable<StrictHttpResponse<Array<SelectItem>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsTeamDriverNamesPath, 'get');
    if (params) {
      rb.query('signupId', params.signupId, {});
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
   * To access the full response (for headers, for example), `signupsTeamDriverNames$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsTeamDriverNames(params?: {
    signupId?: number;
  }): Observable<Array<SelectItem>> {

    return this.signupsTeamDriverNames$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SelectItem>>) => r.body as Array<SelectItem>)
    );
  }

  /**
   * Path part for operation signupsTransferOwnership
   */
  static readonly SignupsTransferOwnershipPath = '/api/signups/transferOwner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsTransferOwnership()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsTransferOwnership$Response(params?: {
    signupId?: number;
    newSignupId?: number;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsTransferOwnershipPath, 'post');
    if (params) {
      rb.query('signupId', params.signupId, {});
      rb.query('newSignupId', params.newSignupId, {});
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
   * To access the full response (for headers, for example), `signupsTransferOwnership$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsTransferOwnership(params?: {
    signupId?: number;
    newSignupId?: number;
  }): Observable<Blob> {

    return this.signupsTransferOwnership$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation signupsInvalidSignups
   */
  static readonly SignupsInvalidSignupsPath = '/api/signups/invalidSignups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsInvalidSignups()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsInvalidSignups$Response(params?: {
  }): Observable<StrictHttpResponse<Array<number>>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsInvalidSignupsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<number>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsInvalidSignups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsInvalidSignups(params?: {
  }): Observable<Array<number>> {

    return this.signupsInvalidSignups$Response(params).pipe(
      map((r: StrictHttpResponse<Array<number>>) => r.body as Array<number>)
    );
  }

  /**
   * Path part for operation signupsGetTeamSignups
   */
  static readonly SignupsGetTeamSignupsPath = '/api/signups/teamSignups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsGetTeamSignups()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsGetTeamSignups$Response(params?: {
    eventId?: number;
  }): Observable<StrictHttpResponse<TeamSignupsEventAppModel>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsGetTeamSignupsPath, 'get');
    if (params) {
      rb.query('eventId', params.eventId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TeamSignupsEventAppModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signupsGetTeamSignups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signupsGetTeamSignups(params?: {
    eventId?: number;
  }): Observable<TeamSignupsEventAppModel> {

    return this.signupsGetTeamSignups$Response(params).pipe(
      map((r: StrictHttpResponse<TeamSignupsEventAppModel>) => r.body as TeamSignupsEventAppModel)
    );
  }

  /**
   * Path part for operation signupsSaveTeamSignups
   */
  static readonly SignupsSaveTeamSignupsPath = '/api/signups/teamSignups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signupsSaveTeamSignups()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signupsSaveTeamSignups$Response(params: {
    body: TeamSignupsEventAppModel
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, SignupsService.SignupsSaveTeamSignupsPath, 'post');
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
   * To access the full response (for headers, for example), `signupsSaveTeamSignups$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signupsSaveTeamSignups(params: {
    body: TeamSignupsEventAppModel
  }): Observable<Blob> {

    return this.signupsSaveTeamSignups$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
