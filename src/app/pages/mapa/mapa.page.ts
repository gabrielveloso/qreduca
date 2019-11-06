import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Environment, GoogleMaps , GoogleMap, GoogleMapOptions, GoogleMapsEvent, MyLocation, GoogleMapsAnimation, LatLng, MarkerIcon } from '@ionic-native/google-maps';
import { map } from 'rxjs/operators';
import { Icon } from 'ionicons/dist/types/icon/icon';
import { ItemService } from 'src/app/services/item.service';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('map',{static:true}) mapElement: any;
  private loading: any;
  private map: GoogleMap;
  private itemSubscription: Subscription;
  public itens = new Array<Item>();

  constructor(
    private Platform: Platform,
    private loadingCtrl: LoadingController,
    private itemService: ItemService
  ) { 
    this.itemSubscription = this.itemService.getItens().subscribe(data =>{
      this.itens = data
    })
  }

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement;

    this.mapElement.style.width = this.Platform.width() + 'px';
    this.mapElement.style.height = this.Platform.height() + 'px';

    this.loadMap();
  }
  async loadMap(){
    this.loading = await this.loadingCtrl.create({message:'Por favor, aguarde...'});
    await this.loading.present();
    
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCSvWuMMyntTz1oSpw4WbzaRznOUSuo5C8',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCSvWuMMyntTz1oSpw4WbzaRznOUSuo5C8'
    });

    const mapOptions: GoogleMapOptions = {
      controls:{
        zoom: false
      }
    }

    this.map = GoogleMaps.create(this.mapElement, mapOptions);

    try {
      await this.map.one(GoogleMapsEvent.MAP_READY);

      this.addOriginMarker();
    }catch(error){
      console.error(error);
    } 
  }

  async addOriginMarker() {
    try{
      const myLocation: MyLocation = await this.map.getMyLocation();

     
      35.594472
      let myposition: LatLng = new LatLng( -8.6827393, -35.594472);
      await this.map.moveCamera({
        target: myposition,
        zoom: 16
      });

      console.log(myLocation.latLng);
      for(let item of this.itens){
        
          if (item.latitude != undefined){            
            let position: LatLng = new LatLng(Number(item.latitude), Number(item.longitude));
            console.log(position)
            
            const icone: MarkerIcon = {
              url: 'assets/img/pin1.png',
              size: {
                width: 24,
                height: 24
              }
              
            };
            
            this.map.addMarkerSync({
              title: 'Origem',              
              icon:'#0F0',
              animation: GoogleMapsAnimation.DROP,
              position: position
            });
          }          
      }

      this.map.addMarkerSync({
        title: 'Origem',
        Icon: '#000',
        animation: GoogleMapsAnimation.DROP,
        position: myLocation.latLng
      });

      
      console.log(myLocation);
    } catch(error){
      console.error(error);
    }finally{
      this.loading.dismiss();
    }
  }

  ngOnDestroy(){
    this.itemSubscription.unsubscribe();
  }
}
