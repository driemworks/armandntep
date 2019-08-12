import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAlbumComponent } from './latest-album.component';

describe('LatestAlbumComponent', () => {
  let component: LatestAlbumComponent;
  let fixture: ComponentFixture<LatestAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
