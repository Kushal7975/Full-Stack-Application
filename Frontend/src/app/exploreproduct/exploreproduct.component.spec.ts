import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreproductComponent } from './exploreproduct.component';

describe('ExploreproductComponent', () => {
  let component: ExploreproductComponent;
  let fixture: ComponentFixture<ExploreproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreproductComponent]
    });
    fixture = TestBed.createComponent(ExploreproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
