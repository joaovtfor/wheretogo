import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NewMarkerComponent } from '../new-marker/new-marker.component';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: L.Map | undefined;

  defaultMarkers = [
    {id: 1, city: 'Passo Fundo', address: 'Rua Teste, 1023', name: 'Doações LTDA PF', phone: '(54) 9 9911-1123', email: 'email@email.com', coordLat: "-28.2578", coordLong: "-52.4073"},
    {id: 2, city: 'Porto Alegre', address: 'Rua Teste, 1023', name: 'Doações LTDA POA', phone: '(54) 9 9911-1123', email: 'email@email.com', coordLat: "-30.0629", coordLong: "-51.2026"},
    {id: 3, city: 'Carazinho', address: 'Rua Teste, 1023', name: 'Doações LTDA CZO', phone: '(54) 9 9911-1123', email: 'email@email.com', coordLat: "-28.2914", coordLong: "-52.7951"},
    {id: 4, city: 'Santa Maria', address: 'Rua Teste, 1023', name: 'Doações LTDA SM', phone: '(54) 9 9911-1123', email: 'email@email.com', coordLat: "-29.6864", coordLong: "-53.8140"},
    {id: 5, city: 'Cruz Alta', address: 'Rua Teste, 1023', name: 'Doações LTDA CA', phone: '(54) 9 9911-1123', email: 'email@email.com', coordLat: "-28.6451", coordLong: "-53.6047"},
  ]

  actualMarkers = JSON.parse(localStorage.getItem("markers") || '[]');
  
  constructor(
    private modalController: ModalController,
    // private nav: NavController
  ) {
    if (localStorage['markers'] === '[]') {
      localStorage.setItem("markers", JSON.stringify(this.defaultMarkers));
      location.reload();
    }
    else localStorage.setItem("markers", JSON.stringify(this.actualMarkers));
  };

  setMap() {
    this.map = L.map('mapId').setView([-28.2590, -52.3986], 6);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.map);

    const customMarker = L.icon({
      iconUrl: '../assets/pin.svg',
      iconSize: [30,30]
    });

    for (let i of this.actualMarkers) {
      L.marker([parseFloat(i.coordLat), parseFloat(i.coordLong)], {
        title: i.name,
        icon: customMarker
      })
      .bindPopup(`
        <div class="modalTest">
          <h1>${i.name}</h1>
          <h2>Cidade:</h2>
          <span>${i.city}</span>
          <h2>Endereço:</h2>
          <span>${i.address}</span>
          <h2>E-Mail:</h2>
          <span>${i.email}</span>
          <h2>Telefone:</h2>
          <span>${i.phone}</span>
        </div>
        `)
      .addTo(this.map);
    }
  };
  
  async addNew() {
    const modal = await this.modalController.create({
      component: NewMarkerComponent,
      cssClass: 'my-custom-class',
    });

    await modal.present();
    const newTask = await modal.onDidDismiss();

    if (newTask.data.coordLat != '' ) {
      this.defaultMarkers = this.actualMarkers;
      this.defaultMarkers.push(newTask.data);
      localStorage.setItem("markers", JSON.stringify(this.defaultMarkers));
    };
    
    location.reload();
  };
  
  ionViewDidEnter() {
    console.log(this.defaultMarkers)
    console.log(this.actualMarkers)
    console.log(localStorage['markers'] === '[]')
    
    this.setMap();
  };
}
