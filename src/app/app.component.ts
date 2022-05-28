import { Component, VERSION, OnInit, InjectionToken } from '@angular/core';
import { LookuptableserviceService } from '../services/lookuptable.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LookuptableserviceService,
    // Provide a value to be used by Angular's dependency injection
    // machanism to pass
    {
      provide: 'courses',
      useValue: { 0: { math: 0.5 }, DEFAULT: { bottle: 0.1, cup: 0.1 } },
    },
    // {
    //   provide: 'defaultLookup',
    //   useValue: {
    //     DEFAULT: {
    //       bottle: 0.9,
    //       cup: 0.3,
    //     },
    //   },
    // },
    {
      provide: 'paramId',
      useValue: 'param-id',
    },
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private lookuptableserviceService: LookuptableserviceService) {}

  ngOnInit() {
    const m = this.lookuptableserviceService.getLookupTable();
    console.log('m', m);
  }
}
