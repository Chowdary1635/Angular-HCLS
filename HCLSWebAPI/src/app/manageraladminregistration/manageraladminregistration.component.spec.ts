import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageraladminregistrationComponent } from './manageraladminregistration.component';

describe('ManageraladminregistrationComponent', () => {
  let component: ManageraladminregistrationComponent;
  let fixture: ComponentFixture<ManageraladminregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageraladminregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageraladminregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
