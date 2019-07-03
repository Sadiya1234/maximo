import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../my-service.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  zoom: number = 8;
  public iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';  
  latitude: number = 43.653908;
  longitude: number = -79.384293;
  
  // longitude = 20.728218;
  // latitude = 52.128973;
  locationChosen = false;
  markers = [];
  currentIW: any;
  previousIW: any;
  private geoCoder;
  constructor(private detailService: MyserviceService,  private mapsAPILoader: MapsAPILoader, ) {
    this.currentIW = null;
    this.previousIW = null;
    
   }

  ngOnInit() {
    let user = "maxadmin";
    let pass = "maxadmin";
    var i;
   
    //this.iconUrl = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    this.getDetailsService(user, pass);
  }
  getDetailsService(user, pass) {
    this.detailService.getDetails(user, pass).subscribe((data: any) => {
      console.log(data);
      this.markers = data;
      console.log(this.markers)
      for(let i= 0; i < this.markers.length; i++){
        if(this.markers[i].overAllImpactScore ==="Low"){
          console.log(this.markers[i]);
          this.iconUrl = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
          }else if(this.markers[i].overAllImpactScore==="High"){
            this.iconUrl = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
          }
          else{
            this.iconUrl = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
          }
        }
    });
  
  }
  markerClick(infoWindow) {
    if (this.previousIW) {
      this.currentIW = infoWindow;
      this.previousIW.close();
    }
    this.previousIW = infoWindow;
}
markerDragEnd($event: MouseEvent) {
  console.log($event);
  this.latitude = $event.coords.lat;
  this.longitude = $event.coords.lng;
  this.getAddress(this.latitude, this.longitude);
}
getAddress(latitude, longitude) {
  this.geoCoder({ 'location': { lat: latitude, lng: longitude } })

}
}


