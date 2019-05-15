import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Modules
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './pages/user/user.module';
import { TestModule } from './pages/test/test.module';


const appRoutes: Routes = [
  {
    path      : '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path      : 'test',
    redirectTo: 'test',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    LayoutModule,
    UserModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
