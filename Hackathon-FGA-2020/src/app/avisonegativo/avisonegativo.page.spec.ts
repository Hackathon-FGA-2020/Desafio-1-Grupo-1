import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvisonegativoPage } from './avisonegativo.page';

describe('AvisonegativoPage', () => {
  let component: AvisonegativoPage;
  let fixture: ComponentFixture<AvisonegativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisonegativoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvisonegativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
