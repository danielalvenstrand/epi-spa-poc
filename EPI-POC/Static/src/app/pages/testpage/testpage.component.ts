import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

declare const EPI_HOOK_INTERVAL = 100;

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  epi: any;
  epiHook: Subscription;

  constructor() {
    this.epiHook = interval(EPI_HOOK_INTERVAL).subscribe(() => {
      this.epi = window['epi'];
      if (this.epi) {
        this.epiHook.unsubscribe();
        this.epi.subscribe('beta/contentSaved', () => {
          console.log("Updated")
        });
      }
      console.log(this.epi)
    });
  }

  ngOnInit() {
    
  }

}
