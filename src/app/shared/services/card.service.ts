import { CardsMock } from '../cards-mock';
import { Card } from '../models/card';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CardService {
    public getCards(): Card[] {
        return CardsMock;
    }
}
