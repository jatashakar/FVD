import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDownloaderForIOSComponent } from './youtube-downloader-for-ios.component';

describe('YoutubeDownloaderForIOSComponent', () => {
  let component: YoutubeDownloaderForIOSComponent;
  let fixture: ComponentFixture<YoutubeDownloaderForIOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeDownloaderForIOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeDownloaderForIOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
