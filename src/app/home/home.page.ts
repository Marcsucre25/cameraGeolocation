import { Component } from '@angular/core';

//importando el servicio de la camara
import { CameraService} from "../services/camera.service";
import { Geolocation } from '@capacitor/geolocation';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public cameraService: CameraService,
    
    ) {}

  coordinate:any;

  addPhotoToGallery() {
    
    this.cameraService.addNewToGallery(event);

    Geolocation.getCurrentPosition().then(data => {
      this.coordinate = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        accuracy: data.coords.accuracy
      };
    }).catch(err => {
      console.error(err);
    });

    
    
  }

}
