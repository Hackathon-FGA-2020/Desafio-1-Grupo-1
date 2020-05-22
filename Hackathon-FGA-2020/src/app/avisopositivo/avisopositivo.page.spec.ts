import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvisopositivoPage } from './avisopositivo.page';

describe('AvisopositivoPage', () => {
  let component: AvisopositivoPage;
  let fixture: ComponentFixture<AvisopositivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisopositivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvisopositivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
