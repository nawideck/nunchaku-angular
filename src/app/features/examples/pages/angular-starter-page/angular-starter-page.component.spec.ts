import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

import { AngularStarterPageComponent } from './angular-starter-page.component';

describe('AngularStarterPageComponent', () => {
  let component: AngularStarterPageComponent;
  let fixture: ComponentFixture<AngularStarterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularStarterPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStarterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'nunchaku-angular'`, () => {
    const fixture = TestBed.createComponent(AngularStarterPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nunchaku-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularStarterPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('nunchaku-angular app is running!');
  });
});
