'use strict';

const VehicleConstructor = require('../vehicle-constructor.js');

let types = ['Constructor'];

describe('Vehicles', () => {

  describe('Car', () => {
    
    function getCar(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Car('foo');
      default:
        return {};
      }
    }
    
    types.forEach( type => {
      
      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      }); 
    });

  });

  describe(`Motorcycle`, () => {

    function getMotorcycle(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Motorcycle('foo');
      default:
        return {};
      }
    }

    types.forEach( type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });
      
    });

  });

});


let vehicleClass = require('../vehicle-class');

describe('check Vechile class',()=>{
  describe('check Car class',()=>{
    let ford = new vehicleClass.Car('ford');
    it('check if the object have same name',()=>{
      expect(ford.name).toEqual('ford')
    })
    it('check if the car can drive',()=>{
      expect(ford.drive()).toEqual('Moving Forward')
    })
    it('check if the car can stop',()=>{
      expect(ford.stop()).toEqual('Stopping')
    })
    it('number of wheel',()=>{
      expect(ford.wheels).toEqual(4)
    })
  })
  describe('check Motorcycle class',()=>{
    let honda = new vehicleClass.Motorcycle('honda')
    it('check if it has same name',()=>{
      expect(honda.name).toEqual('honda')
    })
    it('check if motor can drive',()=>{
      expect(honda.drive()).toEqual('Moving Forward')
    })
    it('check if motor can stop',()=>{
      expect(honda.stop()).toEqual('Stopping')
    })
    it('check if motor can whieelie',()=>{
      expect(honda.wheelie()).toEqual('Wheee!')
    })
    it('number of wheel',()=>{
      expect(honda.wheels).toEqual(2)
    })
  })
})

