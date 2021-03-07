import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleEditPageComponent } from './example-edit-page.component';

describe('ExampleEditPageComponent', () => {
  let component: ExampleEditPageComponent;
  let fixture: ComponentFixture<ExampleEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleEditPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
