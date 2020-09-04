import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { marker } from 'leaflet';



// Déclaration globale de la variable ol
declare const ol: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent implements OnInit {


  registerForm: FormGroup;

  latitude = 18.5204;
  longitude = 73.8567;

  map: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([ -0.57918, 44.837789 ]),
        zoom: 10
      })
    });

    const markers = [ { lat: 44.837789, lng: -0.57918 }, { lat: 44.8667, lng: -0.5333 } ];

    const features = [];

    for (let i = 0; i < markers.length; i++) {
      const m = markers[i];
      const longitude = m.lng;
      const latitude = m.lat;

      const iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([ longitude, latitude ], 'EPSG:4326', 'EPSG:3857'))
      });

      const iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [ 0.5, 1 ],
          src: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
        })
      });

      iconFeature.setStyle(iconStyle);
      features.push(iconFeature);
    }

    const vectorSource = new ol.source.Vector({
      features
    });

    const markerVectorLayer = new ol.layer.Vector({
      source: vectorSource
    });

    this.map.addLayer(markerVectorLayer);
  }
}
