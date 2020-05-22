
import { Component, Pipe, PipeTransform } from '@angular/core';
import{DomSanitizer} from '@angular/platform-browser';
import{Hospital} from "../hospital"
//import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController} from '@ionic/angular';
import { ModalEx } from '../modal/modal.page';


//15°50'39.8"S 47°58'46.0"W
//-15.844391,-47.979434
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

 
export class Tab2Page {
  
  
  constructor(private modalController: ModalController,) {
  } 
  
  hospitais:Hospital[] =[
    {id:1, nome:'Jailson', end:{latitude:'-15.844391', longitude:'-47.979434'}},
    {id:1, nome:'Jailson', end:{latitude:'-15.838151', longitude:'-47.979434'}},
    {id:1, nome:'Jailson', end:{latitude:'-15.844391', longitude:'-47.975860'}}
  ];

  

  async openModal(lat:string, lng:string, nome:string) {
      
      const modal: HTMLIonModalElement =
        await this.modalController.create({
            component: ModalEx,
            componentProps:{
              latitude: lat,
              longitude: lng,
              nome: nome
            }
            
      });
      
      
      await modal.present();
  }


  
  /*
  html_string=this.generateList();

  private generateNumItems(number) {
    let itemString = '';
    for (let i = 0; i < number; i++) {
      itemString += `
        
          <ion-item lines="none">
            <ion-label>Nome: ${this.nome}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label id="tag1">Endereço: ${this.end}</ion-label>
          </ion-item>
        
      `;
    }

    return itemString;
  }

  public generateList(number = 15) {
    return `
      <ion-list>
        <ion-item-divider></ion-item-divider>
        ${this.generateNumItems(number)}
      </ion-list>
      
    `;
  }
  
  /*ngOnInit() {
    this.html_string = this.sanitizer.bypassSecurityTrustHtml(this.generateList());
    this.cdref.detectChanges();

  }*/
}




@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}