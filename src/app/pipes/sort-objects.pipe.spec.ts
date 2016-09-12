﻿import { inject } from '@angular/core/testing';
import {SortObjectsPipe} from './sort-objects.pipe';

describe('SortObjectsPipe', () => {
    it('Object array sorted in ascending order based on name property', function () {
        let sortObjectsPipe = new SortObjectsPipe();
        let inputObjectArray = [
            { name: 'Gary', job: 'Data' },
            { name: 'Paul', job: 'Enterprise' },
            { name: 'John', job: 'Infrastructure' },
            { name: 'Rick', job: 'Network' },
            { name: 'Brent', job: 'Solutions' },
            { name: 'Jamie', job: 'Systems' }
        ];
        let outputObjectArray: any = sortObjectsPipe.transform(inputObjectArray, 'name', false);
        expect(outputObjectArray[0].name).toEqual('Brent');
    });
    it('Object array sorted in decending order based on name property', function () {
        let sortObjectsPipe = new SortObjectsPipe();
        let inputObjectArray = [
            { name: 'Gary', job: 'Data' },
            { name: 'Paul', job: 'Enterprise' },
            { name: 'John', job: 'Infrastructure' },
            { name: 'Rick', job: 'Network' },
            { name: 'Brent', job: 'Solutions' },
            { name: 'Jamie', job: 'Systems' }
        ];
        let outputObjectArray: any = sortObjectsPipe.transform(inputObjectArray, 'name', true);
        expect(outputObjectArray[0].name).toEqual('Rick');
    });
    // Add test for number sorting
    // Add test for date sorting
});
