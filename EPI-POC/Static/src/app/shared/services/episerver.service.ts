import { Injectable } from '@angular/core';
import { Subscription, interval, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BlockArea } from '../../blocks/block-area';

/** URI to the Content Delivery API endpoint. */
const EPI_API_URI = '/api/episerver/v1.0/content/';

/**
 *  EpiserverService enables the use of the Content Delivery API
 *  and the contentSaved event from Episerver.
 */
@Injectable({
  providedIn: 'root'
})
export class EpiserverService {

  epi: any;
  epiHook: Subscription;

  /**
   * Injects the HttpClient in order to send requests to Episerver.
   * @param httpClient the Angular client for Http.
   */
  constructor(private httpClient: HttpClient) {
  }

  /**
   * When initialized, the service will poll for
   * the Episerver object in Window and
   * resolve as soon as the object has been provided.
   */
  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.epi) {
        resolve();
      }
      this.epiHook = interval(100).subscribe(() => {
        this.epi = Window['epi'];
        if (this.epi) {
          this.epiHook.unsubscribe();
          resolve();
        }
      });
    });
  }

  /**
   * Standardizes the request to the Content Delivery API
   * in order to get a page's or a block's model.
   * @param id the id of the page or block.
   * @param workid the current work id in Episerver.
   */
  getContent<T>(id: number | string, workid?: string): Observable<T> {
    const headers: HttpHeaders = new HttpHeaders().append('Accept-Language', 'en');
    const params: HttpParams = new HttpParams().append('expand', 'blockArea');
    return this.httpClient.get<T>(EPI_API_URI + id + (workid ? '_' + workid : ''), { headers, params });
  }

  /**
   * This observable resolves an objects from Episerver
   * every time the CMS saves locally.
   */
  contentSaved<T>(): Observable<T> {
    return new Observable<T>((observer: Observer<T>) => {
      if (this.epi.subscribe) {
        this.epi.subscribe('beta/contentSaved', (result) => {
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

}
