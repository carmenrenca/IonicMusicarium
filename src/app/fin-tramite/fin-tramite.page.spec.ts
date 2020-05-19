import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinTramitePage } from './fin-tramite.page';

describe('FinTramitePage', () => {
  let component: FinTramitePage;
  let fixture: ComponentFixture<FinTramitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinTramitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinTramitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
