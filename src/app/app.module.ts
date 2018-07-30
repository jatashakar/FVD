import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppComponent } from './app.component';
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
