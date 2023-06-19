import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from 'src/app/mockdata';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [
    {
      "Id": 1,
      "Name": "Tobbey House",
      "Type": "House",
      "Price": 12000,
      "Img": "assets/img/house_default.jpg"

    },
    {
      "Id": 2,
      "Name": "Brila House",
      "Type": "House",
      "Price": 18000,
      "Img": "assets/img/house_default1.jpg"
    },
    {
      "Id": 3,
      "Name": "Johnson House",
      "Type": "House",
      "Price": 20000,
      "Img": "assets/img/house_default2.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }




}
