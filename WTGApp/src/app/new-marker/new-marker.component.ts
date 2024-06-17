import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-marker',
  templateUrl: './new-marker.component.html',
  styleUrls: ['./new-marker.component.scss'],
})
export class NewMarkerComponent implements OnInit {

  marker = {
    id: Math.floor((Math.random()*6) + 5),
    name: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    coordLat: 0,
    coordLong: 0,
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  save() {
    this.modalController.dismiss(this.marker);
  }
  
  close() {
    this.modalController.dismiss();
  }
}
