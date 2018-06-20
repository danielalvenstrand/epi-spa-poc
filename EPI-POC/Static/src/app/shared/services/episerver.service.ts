import { Injectable } from '@angular/core';
import { Subscription, interval, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BlockArea } from '../../blocks/block-area';

/*interface EpiProperty {
  name: string;
  value: any;
};*/

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
    const headers: HttpHeaders = new HttpHeaders().append('Accept-Language', 'en');
    const params: HttpParams = new HttpParams().append('expand', 'blockArea');
    return this.httpClient.get<T>(EPI_API_URI + id + (workid ? '_' + workid : ''), { headers, params });
  }

  contentSaved<T>(): Observable<T> {
    return new Observable<T>((observer: Observer<T>) => {
      if (this.epi.subscribe) {
        this.epi.subscribe('beta/contentSaved', (result) => {
          // const props: EpiProperty[] = result.properties;
          // const updatedModel: any = this.transformProperties(props);
          // observer.next(updatedModel);
          this.getContent<T>(result.contentLink).subscribe(result => {
            observer.next(result);
          })
        },
        error => console.error(error));
      } else {
        observer.error("Not in edit mode!");
      };
    });
  }

  /*protected transformProperties(properties: EpiProperty[]): any {
    let model: any = properties.reduce((model, property: EpiProperty) => {
      return {
        ...model, [property.name]: { value: property.value }
      };
    }, {});
    if (model.blockArea) {
      (<BlockArea>model.blockArea).expandedValue = model.blockArea.value
        .map(property => ({
          contentType: ["Block", property.typeIdentifier.split('.').slice(-1).pop()], // Block type is missing on update data.
          ...Object.keys(property)
            .reduce(
              (prop, key) => ({ ...prop, [key]: { value: property[key] } }) // Transforms from e.g. name: "value" to name: { value: "value" }
            , {})
        })
      );
    }
    return model;
  }*/
}
