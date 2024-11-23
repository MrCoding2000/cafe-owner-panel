import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClSidebarComponent } from './cl-sidebar.component';

describe('ClSidebarComponent', () => {
  let component: ClSidebarComponent;
  let fixture: ComponentFixture<ClSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
