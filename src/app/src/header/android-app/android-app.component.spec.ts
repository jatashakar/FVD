import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidAppComponent } from './android-app.component';

describe('AndroidAppComponent', () => {
  let component: AndroidAppComponent;
  let fixture: ComponentFixture<AndroidAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
