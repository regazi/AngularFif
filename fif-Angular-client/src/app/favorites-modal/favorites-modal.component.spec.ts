import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesModalComponent } from './favorites-modal.component';

describe('FavoritesModalComponent', () => {
  let component: FavoritesModalComponent;
  let fixture: ComponentFixture<FavoritesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesModalComponent]
    });
    fixture = TestBed.createComponent(FavoritesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
