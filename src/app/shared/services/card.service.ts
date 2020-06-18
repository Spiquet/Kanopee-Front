import { CardsMock } from '../cards-mock';
import { Card } from '../models/card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  public getCards(): Card[] {
    return CardsMock;
  }
}
