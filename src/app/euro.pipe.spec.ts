/* tslint:disable:no-unused-variable */

import { EuroPipe } from './euro.pipe';

describe('EuroPipe', () => {
  let stubPipe = [ {
      amount: 1234.56,
      field: 'taxableYear',
      result: '€ 1,235',
    }, {
      amount: 0,
      field: 'taxableYear',
      result: '€ 0',
    }, {
      amount: -2345.67,
      field: 'taxableYear',
      result: '- € 2,346',
    }, {
      amount: 0,
      field: 'generalCredit',
      result: '€ 0',
    }, {
      amount: 1234.56,
      field: 'generalCredit',
      result: '+ € 1,235',
    }
  ];
  let euroPipe = new EuroPipe('en-us');

  it('should convert the number passed to it to Euro format', () => {
    stubPipe.forEach((stub, index) => {
      expect(euroPipe.transform(stub.amount, stub.field)).toEqual(stub.result);
    });
  });
});
