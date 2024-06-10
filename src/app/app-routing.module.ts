import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { CareerComponent } from './career/career.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OverviewComponent } from './overview/overview.component';
import { PlayerprofileComponent } from './playerprofile/playerprofile.component';
import { WinComponent } from './win/win.component';

const routes: Routes = [ 
  { path:"introduction",component:IntroductionComponent},
  {path:"awards",component:AwardsComponent},
  {path:"career",component:CareerComponent},
  {path:"playerprofile",component:PlayerprofileComponent},
  {path:"overview",component:OverviewComponent},
  {path:"win",component:WinComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
