import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosListComponent } from './radios-list.component';

describe('RadiosListComponent', () => {
  let component: RadiosListComponent;
  let fixture: ComponentFixture<RadiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
