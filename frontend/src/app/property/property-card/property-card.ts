import { Component } from "@angular/core";
import { IProperty } from "src/app/mockdata";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.html',
  styleUrls: ['property-card.scss'],
})


export class PropertyCardComponent{
  Property: IProperty = {
    "Id": 1,
    "name": "Brila House",
    "Type": "House",
    "Price": 12000,

  };
};
