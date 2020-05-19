import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TramitePage } from './tramite.page';

describe('TramitePage', () => {
  let component: TramitePage;
  let fixture: ComponentFixture<TramitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TramitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
