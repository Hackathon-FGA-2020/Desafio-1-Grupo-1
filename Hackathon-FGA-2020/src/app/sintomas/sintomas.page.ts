import { Sintoma } from './sintoma';
import { Component } from '@angular/core';


@Component({
  selector: 'sintomas',
  templateUrl: 'sintomas.page.html',
  styleUrls: ['sintomas.page.scss']
})
export class SintomasPage {

  result:number=0;
  dcro:'s'|'n'='n';
  f1:Sintoma={v_f:'0',peso:0};
  f2:Sintoma={v_f:'0',peso:0};
  f3:Sintoma={v_f:'0',peso:0};
  f4:Sintoma={v_f:'0',peso:0};
  f5:Sintoma={v_f:'0',peso:0};
  f6:Sintoma={v_f:'0',peso:0};
  f7:Sintoma={v_f:'0',peso:0};
  f8:Sintoma={v_f:'0',peso:0};
  f9:Sintoma={v_f:'0',peso:0};
  f10:Sintoma={v_f:'0',peso:0};
  f11:Sintoma={v_f:'0',peso:0};
  f12:Sintoma={v_f:'0',peso:0};
  f:Sintoma={v_f:'0',peso:0};
  sintomas:Sintoma[]=[
    this.f,this.f1,this.f2,this.f3,this.f4,this.f5,this.f6,this.f7,this.f8,this.f9,this.f10,this.f11,this.f12
  ]
  
  

  OnChange(event, par:number) {
    
    this.sintomas[par-1].v_f=String(event.target.value);
    
    switch(par){
      case 1: 
      this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 2: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 3: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 4: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 5: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 6: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 7: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 8: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 9: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 10: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 11: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 12: this.sintomas[par-1].peso=Number(this.sintomas[par-1].v_f);
      break;
      case 13: this.dcro=event; break;
      
    }
    
    console.log(this.sintomas[par]);
  }

  redirect(){
    
    for(var i=0; i <12;i++){
      this.result+=this.sintomas[i].peso;
      console.log(this.sintomas[i].peso+','+this.result);
    }

    alert("Seu resultado é: "+this.result);
    this.result=0;
  }

  constructor() {}

}
