/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CarsService } from './services/cars.service';
import { ConfigService } from './services/config.service';
import { EventsService } from './services/events.service';
import { IdentityService } from './services/identity.service';
import { LivefeedService } from './services/livefeed.service';
import { ProfileService } from './services/profile.service';
import { RacesService } from './services/races.service';
import { SignupsService } from './services/signups.service';
import { UsersService } from './services/users.service';
import { UtilsService } from './services/utils.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CarsService,
    ConfigService,
    EventsService,
    IdentityService,
    LivefeedService,
    ProfileService,
    RacesService,
    SignupsService,
    UsersService,
    UtilsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
