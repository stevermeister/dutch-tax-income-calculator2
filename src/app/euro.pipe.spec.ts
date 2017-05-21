/* tslint:disable:no-unused-variable */

import { EuroPipe } from './euro.pipe';

describe('EuroPipe', () => {
    it('should convert the number passed to it to Euro format', () => {
        let euroPipe = new EuroPipe('en-us');
        expect(euroPipe.transform(1234.56, 'taxableYear')).toEqual('€ 1,235');
        expect(euroPipe.transform(0, 'taxableYear')).toEqual('€ 0');
        expect(euroPipe.transform(-2345.67, 'taxableYear')).toEqual('- € 2,346');
        expect(euroPipe.transform(0, 'generalCredit')).toEqual('€ 0');
        expect(euroPipe.transform(1234.56, 'generalCredit')).toEqual('+ € 1,235');
    });
});