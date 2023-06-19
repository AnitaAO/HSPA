import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.html',
  styleUrls: ['property-card.scss'],
})


export class PropertyCardComponent{
@Input()property: any
};
