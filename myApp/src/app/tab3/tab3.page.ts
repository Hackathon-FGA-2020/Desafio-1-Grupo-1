import { Component, Pipe, PipeTransform } from '@angular/core';
import{DomSanitizer} from '@angular/platform-browser';
import{Ponto_de_testagem} from "../ponto_de_testagem"


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page {
  
  hospitais:Ponto_de_testagem[] =[
    {id:1, nome:'Jailson', end:'Rua da Quebrada'},
    {id:1, nome:'Jailson', end:'Rua da Quebrada'},
    {id:1, nome:'Jailson', end:'Rua da Quebrada'},
    {id:1, nome:'Jailson', end:'Rua da Quebrada'},
    {id:1, nome:'Jailson', end:'Rua da Quebrada'},
    {id:1, nome:'Jailson', end:'Rua da Quebrada'}


  ];
  
  /*nome:string ="Jailson";
  end:string ="Rua da Quebrada";
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
