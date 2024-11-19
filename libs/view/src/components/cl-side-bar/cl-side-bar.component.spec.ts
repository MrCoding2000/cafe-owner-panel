import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClSideBarComponent } from './cl-side-bar.component';

describe('ClSideBarComponent', () => {
  let component: ClSideBarComponent;
  let fixture: ComponentFixture<ClSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
