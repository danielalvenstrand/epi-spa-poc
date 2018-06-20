import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageblockComponent } from './imageblock.component';

describe('ImageblockComponent', () => {
  let component: ImageblockComponent;
  let fixture: ComponentFixture<ImageblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
