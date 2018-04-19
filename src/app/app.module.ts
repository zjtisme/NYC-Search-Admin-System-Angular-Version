import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NewsService } from './service/news.service';
import { LoginStateService } from './service/login-state.service';
import { UserLoginService } from './service/user-login.service';
import { UserConfigureService } from './service/user-configure.service';
import { UserSignupService } from './service/user-signup.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PrivatePageComponent } from './private-page/private-page.component';
import { ConfigurePageComponent } from './configure-page/configure-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    PrivatePageComponent,
    ConfigurePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NewsService, UserLoginService, LoginStateService, UserConfigureService, UserSignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
