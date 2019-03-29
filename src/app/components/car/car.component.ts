import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  public carName: string;
  private mileage: number;
  public fuelTankCapacity: number;
  private currentAmountOfGas: number;
  public specifications: string[];

  public car = {
    carName: 'BMW',
    mileage: 0,
    fuelTankCapacity: 20,
    currentAmountOfGas: 10,
    specifications: [
      'Engine: 2 liters',
      'Maximum speed: 200 km/h',
      'Production year: 2005',
      'from 0 to 100: 10 sec.'
    ]
  }
  constructor() { }

  public go() {
    this.car.mileage++
    this.car.currentAmountOfGas--
  }

  public fillUp() {
    this.car.currentAmountOfGas++
  }
}
