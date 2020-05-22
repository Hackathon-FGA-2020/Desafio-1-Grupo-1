import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvisosegurancaPage } from './avisoseguranca.page';

describe('AvisosegurancaPage', () => {
  let component: AvisosegurancaPage;
  let fixture: ComponentFixture<AvisosegurancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisosegurancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvisosegurancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
