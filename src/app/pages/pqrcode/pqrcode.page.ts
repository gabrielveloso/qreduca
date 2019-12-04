import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pqrcode',
  templateUrl: './pqrcode.page.html',
  styleUrls: ['./pqrcode.page.scss'],
})
export class PQRCodePage implements OnInit {

  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};
  constructor(private qrScanCtrl: QRScanner,
    private navCtrl: NavController) {
    
   }

  ngOnInit() {
  }

  ligar(){
    if(this.isOn){
      //this.hideCamera();
      this.closeScanner();
      this.isOn = false;
    }else{
      this.goToQrScan();
    }
  }

  goToQrScan() {
    this.isOn = true;
    this.qrScanCtrl.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
 
        //this.showCamera();
        // start scanning
        let scanSub = this.qrScanCtrl.scan().subscribe((text: any) => {
          console.log('Scanned something', text);
          console.log(text)
          //this.scannedData = text;
          this.navCtrl.navigateForward('/detalhamento-item/'+text.result);
 
          this.closeScanner(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning          
          //this.hideCamera();
         
        });
        this.qrScanCtrl.show();
 
      } else if (status.denied) {
        console.log('Scanned denied')
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        console.log('error denied')
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
   })
   .catch((e: any) => console.log('Error is', e));
  }

  showCamera() {
    setTimeout(() => {
        window.document.querySelectorAll('ion-content')
              .forEach(element => {
                  const element1 = element.shadowRoot.querySelector('style');
                  if(element1 != null){
                    element1.innerHTML = element1.innerHTML
                                               .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                  }
              });
    }, 300);
}

hideCamera() {
    window.document.querySelectorAll('ion-content')
          .forEach(element => {
              const element1 = element.shadowRoot.querySelector('style');
              if(element1 != null){
                element1.innerHTML = element1.innerHTML
                                           .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
              }
          });
}

  closeScanner() {
    this.isOn = false;
    this.qrScanCtrl.hide();
    this.qrScanCtrl.destroy();
  }



}
