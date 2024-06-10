import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { ContentComponent } from './content/content.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CareerComponent } from './career/career.component';
import { AcchivementComponent } from './acchivement/acchivement.component';
import { PlayerprofileComponent } from './playerprofile/playerprofile.component';
import { OverviewComponent } from './overview/overview.component';
import { AwardsComponent } from './awards/awards.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubtitleComponent,
    ContentComponent,
    IntroductionComponent,
    CareerComponent,
    AcchivementComponent,
    PlayerprofileComponent,
    OverviewComponent,
    AwardsComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
