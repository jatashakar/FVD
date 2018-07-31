import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { Routes } from '@angular/router';
import {Router} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/header/home/home.component';
import { DeskTopComponent } from './src/header/desk-top/desk-top.component';
import { AndroidAppComponent } from './src/header/android-app/android-app.component';
import { YoutubeMp3ConverterComponent } from './src/header/youtube-mp3-converter/youtube-mp3-converter.component';
import { YoutubeDownloaderForIOSComponent } from './src/header/youtube-downloader-for-ios/youtube-downloader-for-ios.component';
import { FacebookVideoDownloaderComponent } from './src/header/facebook-video-downloader/facebook-video-downloader.component';
import { AboutUsComponent } from './src/footer/about-us/about-us.component';
import { PrivacyPolicyComponent } from './src/footer/privacy-policy/privacy-policy.component';
import { ContactComponent } from './src/footer/contact/contact.component';
import { DMCAComponent } from './src/footer/dmca/dmca.component';
import { FAQComponent } from './src/footer/faq/faq.component';
import { MainComponent } from './src/main/main.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'desktop', component: DeskTopComponent },
  { path: 'androidapp', component: AndroidAppComponent },
  { path: 'youtubemp3converter', component: YoutubeMp3ConverterComponent },
  { path: 'youtubedownloaderforios', component: YoutubeDownloaderForIOSComponent },
  { path: 'facebookvideodownloader', component: FacebookVideoDownloaderComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
   // AppComponent,
    HomeComponent,
    DeskTopComponent,
    AndroidAppComponent,
    YoutubeMp3ConverterComponent,
    YoutubeDownloaderForIOSComponent,
    FacebookVideoDownloaderComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    DMCAComponent,
    FAQComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [MainComponent]

})


export class AppModule { }
