/*
Class - blueprint to create an object with some fields
(values) and methods (functions) to represent a 'thing'
*/

class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color
  // }

  // shortcut
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Bus extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const bus = new Bus(4, 'red');
bus.startDrivingProcess();
