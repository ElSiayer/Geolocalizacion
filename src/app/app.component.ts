import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  google: any;
  title = 'Geolocalización';
  defaultCenter = { lat: 55.5815245, lng: 36.8251383 };
  currentCenter = Object.assign({}, this.defaultCenter);
  zoom = 3;
  loc() {    
    this.zoom = 16;
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.currentCenter = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      })
    }
  }
  limpiar(){
    this.zoom = 2;
    this.currentCenter = { lat: 0, lng: 0};
  }
  async locCapacitor() {
    const position = await Geolocation.getCurrentPosition();    
    this.zoom = 16;
    if (position !=null) {
      this.currentCenter = { lat: position.coords.latitude, lng: position.coords.longitude};      
    }
  }
}

