import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
    {
      description: 'abs',
      imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'salteñas'
    },
    {
      description: 'abs',
      imageURL: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg',
      ownerId: 1,
      price: 23,
      title: 'hamburguesas'
    },
    {
      description: 'abs',
      imageURL: 'https://dam.ngenespanol.com/wp-content/uploads/2019/06/mirada-perros.png',
      ownerId: 1,
      price: 50,
      title: 'pizzas'
    },
    {
      description: 'abs',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuweiI_fkgz98fyPzu_TEuavvAC7Kr5rfDyA&usqp=CAU',
      ownerId: 1,
      price: 15,
      title: 'refrescos'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
