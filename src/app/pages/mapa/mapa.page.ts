import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Environment, GoogleMaps , GoogleMap, GoogleMapOptions, GoogleMapsEvent, MyLocation } from '@ionic-native/google-maps';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('map',{static:true}) mapElement: any;
  private loading: any;
  private map: GoogleMap;

  constructor(
    private Platform: Platform,
    private loadingCtrl: LoadingController
  ) { }

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
      'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyAgJzJg8XPkzG3IIcO4FkQTJpq23BsgZUs)',
      'API_KEY_FOR_BROWSER_DEBUG': '(AIzaSyAgJzJg8XPkzG3IIcO4FkQTJpq23BsgZUs)'
    });

    const mapOptions: GoogleMapOptions = {
      controls:{
        zoom: false
      }
    }

    this.map = GoogleMaps.create(this.mapElement, mapOptions);

    try{
      await this.map.one(GoogleMapsEvent.MAP_READY);

      this.addOriginMarker();
    }catch(error){
      console.error(error);
    } 
  }

  async addOriginMarker() {
    try{
      const myLocation: MyLocation = await this.map.getMyLocation();
      console.log(myLocation);
    } catch(error){
      console.error(error);
    }finally{
      this.loading.dismiss();
    }
  }
}
