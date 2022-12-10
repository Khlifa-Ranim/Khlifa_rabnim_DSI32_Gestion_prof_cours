import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParCoursComponent } from './recherche-par-cours.component';

describe('RechercheParCoursComponent', () => {
  let component: RechercheParCoursComponent;
  let fixture: ComponentFixture<RechercheParCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
