import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeMp3ConverterComponent } from './youtube-mp3-converter.component';

describe('YoutubeMp3ConverterComponent', () => {
  let component: YoutubeMp3ConverterComponent;
  let fixture: ComponentFixture<YoutubeMp3ConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeMp3ConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeMp3ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
