import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  fotos:String[] = []

  constructor() {}

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    })

    if( image.base64String != null || image.base64String != undefined) {
      this.fotos.push("data:image/jpeg;base64,"+image.base64String)
      console.dir(this.fotos)
    }    
  }

}
