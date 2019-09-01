import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LatestAlbumComponent } from './components/latest-album/latest-album.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaComponent } from './components/media/media.component';
import { ShowsComponent } from './components/shows/shows.component';
import { SafePipe } from './pipes/safepipe.pipe';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParallaxDirective,
    CarouselComponent,
    LatestAlbumComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MediaComponent,
    ShowsComponent,
    SafePipe,
    UnderConstructionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
