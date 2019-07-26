import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import HttpMockRequestInterceptor from './interceptors/httpMockRequestInterceptor'

import { environment } from '../environments/environment';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: conditionalProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
