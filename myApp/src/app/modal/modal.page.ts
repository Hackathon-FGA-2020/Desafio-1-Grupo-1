
import{Component, Input} from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController, Platform} from '@ionic/angular';


declare var google:any;

//-15.844391,-47.979434

@Component({
    selector: 'modal',
    templateUrl: 'modal.page.html',
    styleUrls: ['./modal.page.scss']
  })
  export class ModalEx {
  
  map:any;
  marker:any;

        
  @Input() latitude;
  @Input() longitude;
  @Input() nome;

    constructor( protected modalController: ModalController, public geolocation:Geolocation, private platform:Platform) {}
  
    ionViewWillEnter(){
     
    this.platform.ready().then(()=>{
        this.initPage();

      })
    }

    initPage(){
      this.geolocation.getCurrentPosition().then(result=>{
        this.loadMap(result.coords.latitude, result.coords.longitude);
      })
    }
    loadMap(lat, lng){
      let latLng = new google.maps.latLng(lat,lng);

      let mapOption ={
        center: latLng,
        zoom:7,
        mapTypeId: google.maps.mapTypeId.ROADMAP,
        disableDefaultUI: true
      }

      let element = document.getElementById('map');
      this.map = new google.maps.Map(element, mapOption);
      let marker = new google.maps.Marker({
        position:latLng,
        title:'Sua Localização',
        icon:'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      })   

      let content = `
      <div id="myId" class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `;

      this.addInfoWindow(marker,content);
      marker.setMap(this.map);

      this.loadPoint();

    }

    loadPoint(){
      let latLng = new google.maps.latLng(this.latitude, this.longitude);
      let marker = new google.maps.Marker({
        position:latLng,
        title:this.nome
      })
      
      let content = `
      <div id="myId" class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+this.nome+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `;

      this.addInfoWindow(marker,content);
      marker.setMap(this.map);
    }

    addInfoWindow(marker, content){
      let infoWindow = new google.maps.InfoWindow({
        content: content
      })
      google.maps.event.addListener(marker, 'click', ()=>{
        infoWindow.open(this.map, marker);
      })
      
    }

      /*GetLocation(){
        var ref=this;
        let watch = this.geolocation.watchPosition();
        watch.subscribe((position)=>{
          var gps = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          if(ref.marker==null){
            ref.marker=new google.maps.Marker({
              position:gps, map:ref.map, title:'Sua posição'
            })
          }else{
            ref.marker.setPosition(gps);
          }
          ref.map.panTo(gps);
          ref.latitude = position.coords.latitude.toString();
          ref.longitude = position.coords.longitude.toString();
        })
      }*/
    
  async myDismiss() {
    
    await this.modalController.dismiss();
  }

  
}
  
  /*import{Component} from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';


@Component({
    selector: 'modal-page',
    template: `
      <ion-header [translucent]="true">
        <ion-toolbar>
          <div style="margin: 0 auto; width:50px;">
            <img src="assets/img/Imagem_logo.jpeg" >
          </div>
          <ion-title id="tag1">
            Unidades de saúde
          </ion-title>
        </ion-toolbar>
      </ion-header>
  
    `
  })
  export class ModalPage {
  
    constructor() {}
  
    dismiss(){
      this.modalController.dissmis();
  
    }
  }
  */
