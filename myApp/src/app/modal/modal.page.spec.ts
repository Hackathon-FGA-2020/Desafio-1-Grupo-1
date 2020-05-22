import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEx } from './modal.page';

describe('ModalEx', () => {
  let component: ModalEx;
  let fixture: ComponentFixture<ModalEx>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEx ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
