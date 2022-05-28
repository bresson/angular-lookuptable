import { Inject, Injectable, Optional, InjectionToken } from '@angular/core';

const DEFAULT = {
  can: 0.9,
  bottle: 0.9,
};
/**
 * Service to create lookup table
 * of PEAKS and a comparator for
 * external dependencies to compare
 */
@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class LookuptableserviceService {
  lookupTable = {};

  constructor(
    @Inject('defaultLookup') @Optional() private defaultLookup,
    @Inject('courses') @Optional() private courses,
    @Inject('paramId') private paramId: string
  ) {
    console.log('courses', courses);
    // console.log('defaultLookup', defaultLookup);
    this.lookupTable = {
      ...(courses && courses),
      // DEFAULT,
      // ...(defaultLookup && defaultLookup),
    };
  }

  getLookupTable() {
    return this.lookupTable;
  }
}
