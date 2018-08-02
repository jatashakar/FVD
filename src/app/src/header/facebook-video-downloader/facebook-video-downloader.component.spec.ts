import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookVideoDownloaderComponent } from './facebook-video-downloader.component';

describe('FacebookVideoDownloaderComponent', () => {
  let component: FacebookVideoDownloaderComponent;
  let fixture: ComponentFixture<FacebookVideoDownloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookVideoDownloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookVideoDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
