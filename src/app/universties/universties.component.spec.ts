import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverstiesComponent } from './universties.component';

describe('UniverstiesComponent', () => {
  let component: UniverstiesComponent;
  let fixture: ComponentFixture<UniverstiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniverstiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverstiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
