import { Injectable } from '@angular/core';
import { environment } from '../../../../../../Subjects/src/environments/environment';

const bookUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor() { }
}
