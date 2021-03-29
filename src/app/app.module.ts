import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';
import { RegisterComponent } from './register/register.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
//import { MyAuthGaurd } from './myauthgaurd';

//import { MdfLoginPageComponent } from './mdf-login-page/mdf-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TdfLoginPageComponent,
    RegisterComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [], // can add Mauthguard for other login
  bootstrap: [AppComponent]
})
export class AppModule { }
