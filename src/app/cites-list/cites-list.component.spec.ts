import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitesListComponent } from './cites-list.component';

describe('CitesListComponent', () => {
  let component: CitesListComponent;
  let fixture: ComponentFixture<CitesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
