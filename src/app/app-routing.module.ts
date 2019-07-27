import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitComponent } from './init/init.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteSettingsComponent } from './settings/site-settings/site-settings.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { ContentManagementComponent } from './settings/content-management/content-management.component';
import { PostTypeSettingsComponent } from './settings/post-type-settings/post-type-settings.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostsTagsComponent } from './posts/posts-tags/posts-tags.component';
import { PostsCategoriesComponent } from './posts/posts-categories/posts-categories.component';
import { ThemeListComponent } from './themes/theme-list/theme-list.component';
import { ThemeSettingsComponent } from './themes/theme-settings/theme-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizedGuard } from './guards/authorized.guard';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizedGuard] },
  {
    path: 'posts/:id',
    canActivate: [AuthorizedGuard],
    children: [
      { path: '', redirectTo: 'list', canActivate: [AuthorizedGuard], pathMatch: 'full' },
      { path: 'list', canActivate: [AuthorizedGuard], component: PostsListComponent },
      { path: 'new', canActivate: [AuthorizedGuard], component: PostEditComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
