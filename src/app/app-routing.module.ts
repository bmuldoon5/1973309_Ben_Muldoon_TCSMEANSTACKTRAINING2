import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';
import { RegisterComponent } from './register/register.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


// API hold all routing path details. 
const routes: Routes = [
  {path: 'tdf-login-page', component: TdfLoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path:'', redirectTo: 'tdf-login-page', pathMatch:'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
