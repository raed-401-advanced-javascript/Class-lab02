'use strict';
let valid = require('../validator');

describe('checkvalidator',()=>{
    let validClass = new valid
    it('check number',()=>{
        let x = 5
        expect(validClass.isNumber(x)).toBeTruthy()
    })
    it('check array',()=>{
        let x = [1,2,3]
        expect(validClass.isArray(x)).toBeFalsy()
    })
    it('check string',()=>{
        let x = 'hi'
        expect(validClass.isString(x)).toBeTruthy() 
    })
    it('check boolean',()=>{
        let x = true 
        expect(validClass.isBollean(x)).toBeTruthy()
    })
    it('check function',()=>{
        let x = ()=>{}
        expect(validClass.isFunction(x)).toBeTruthy()
    })
    it('check if it object litreal',()=>{
        let x= {a:'w'}
        expect(validClass.isObject(x)).toBeTruthy()
    })
})


