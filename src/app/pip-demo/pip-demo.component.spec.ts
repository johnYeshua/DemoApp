import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipDemoComponent } from './pip-demo.component';

describe('PipDemoComponent', () => {
  let component: PipDemoComponent;
  let fixture: ComponentFixture<PipDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
