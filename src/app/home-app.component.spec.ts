import { TestBed, async } from '@angular/core/testing';
import { HomeAppComponent } from './home-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'furniture-supplier-ui'`, () => {
    const fixture = TestBed.createComponent(HomeAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('furniture-supplier-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('furniture-supplier-ui app is running!');
  });
});
