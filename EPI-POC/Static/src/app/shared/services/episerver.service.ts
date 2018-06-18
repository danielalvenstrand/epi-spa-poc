import { Injectable } from '@angular/core';
import { Subscription, interval, Observable, Observer } from 'rxjs';

export interface IEpiProperty {
  name: string;
  value: any;
};

@Injectable({
  providedIn: 'root'
})
export class EpiserverService {

  epi: any;
  epiHook: Subscription;

  constructor() { }

  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.epi) {
        resolve();
      }
      this.epiHook = interval(100).subscribe(() => {
        this.epi = window['epi'];
        if (this.epi) {
          this.epiHook.unsubscribe();
          resolve();
        }
      })
    })
  }

  contentSaved<T>(): Observable<T> {
    return new Observable<T>((observer: Observer<T>) => {
      if (this.epi.subscribe) {
        this.epi.subscribe('beta/contentSaved', (result) => {
          const props: IEpiProperty[] = result.properties;
          const updatedModel: any = props.reduce((model, property: IEpiProperty) => {
            return {
              ...model, [property.name]: { value: property.value }
            };
          }, {});
          updatedModel.blockArea = result.blockArea;
          observer.next(updatedModel);
        });
      } else {
        observer.error("Not in edit mode!");
      };
    });
  }
}
