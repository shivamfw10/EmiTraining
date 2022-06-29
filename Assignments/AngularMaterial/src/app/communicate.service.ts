import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
subject = new Subject();
  constructor(private http:HttpClient) { }
  public sharedata(data:any){
    return this.subject.next(data);
  }
}
