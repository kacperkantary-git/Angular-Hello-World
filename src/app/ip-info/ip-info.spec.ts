import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IpInfoComponent } from './ip-info';
import { provideHttpClient } from '@angular/common/http';

describe('IpInfoComponent', () => {
  let component: IpInfoComponent;
  let fixture: ComponentFixture<IpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpInfoComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(IpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
