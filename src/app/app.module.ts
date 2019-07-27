import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import HttpMockRequestInterceptor from './interceptors/httpMockRequestInterceptor'

import { environment } from '../environments/environment';
import { InitComponent } from './init/init.component';

let conditionalProviders = [];

if (environment.mockBackend) {
  conditionalProviders.push({
    provide: HTTP_INTERCEPTORS,
    useClass: HttpMockRequestInterceptor,
    multi: true
  });
}

@NgModule({
  declarations: [
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: conditionalProviders,
  bootstrap: [InitComponent]
})
export class AppModule { }
