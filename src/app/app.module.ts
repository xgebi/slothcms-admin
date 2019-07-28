import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import HttpMockRequestInterceptor from "./interceptors/httpMockRequestInterceptor";

import { environment } from "../environments/environment";
import { InitComponent } from "./init/init.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SiteSettingsComponent } from "./settings/site-settings/site-settings.component";
import { UserSettingsComponent } from "./settings/user-settings/user-settings.component";
import { ContentManagementComponent } from "./settings/content-management/content-management.component";
import { PostTypeSettingsComponent } from "./settings/post-type-settings/post-type-settings.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";
import { PostEditComponent } from "./posts/post-edit/post-edit.component";
import { PostsTagsComponent } from "./posts/posts-tags/posts-tags.component";
import { PostsCategoriesComponent } from "./posts/posts-categories/posts-categories.component";
import { ThemeListComponent } from "./themes/theme-list/theme-list.component";
import { ThemeSettingsComponent } from "./themes/theme-settings/theme-settings.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NavigationComponent } from "./navigation/navigation.component";

const conditionalProviders = [];

if (environment.mockBackend) {
  conditionalProviders.push({
    provide: HTTP_INTERCEPTORS,
    useClass: HttpMockRequestInterceptor,
    multi: true
  });
}

@NgModule({
  declarations: [
    InitComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    SiteSettingsComponent,
    UserSettingsComponent,
    ContentManagementComponent,
    PostTypeSettingsComponent,
    PostsListComponent,
    PostEditComponent,
    PostsTagsComponent,
    PostsCategoriesComponent,
    ThemeListComponent,
    ThemeSettingsComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: conditionalProviders,
  bootstrap: [InitComponent]
})
export class AppModule { }
