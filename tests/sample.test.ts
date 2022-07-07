import { expect } from 'chai';
import Test from '../src/functions/test'

describe('calculate', function() {
    it('add', function() {
      expect(true).equal(true);
    }); 

    it('test', () => {
      let test = new Test()
      expect(test.test()).equal(2)
    })
});