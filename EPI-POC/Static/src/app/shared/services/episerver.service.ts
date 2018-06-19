import { Injectable } from '@angular/core';
import { Subscription, interval, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IEpiProperty {
  name: string;
  value: any;
};

const EPI_API_URI = '/api/episerver/v1.0/content/';

@Injectable({
  providedIn: 'root'
})
export class EpiserverService {

  epi: any;
  epiHook: Subscription;

  constructor(private httpClient: HttpClient) {
  }

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

  getContent<T>(id: number | string, workid?: string): Observable<T> {
    const headers: HttpHeaders = new HttpHeaders({
      'Accept-Language': 'en'
    });
    return this.httpClient.get<T>(EPI_API_URI + id + (workid ? '_' + workid : ''), { headers });
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
          observer.next(updatedModel);
        });
      } else {
        observer.error("Not in edit mode!");
      };
    });
  }
}
