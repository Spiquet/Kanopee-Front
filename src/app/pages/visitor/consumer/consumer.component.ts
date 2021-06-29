import { Router } from '@angular/router';
import { CardService } from './../../../shared/services/card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../../shared/models/card';

@Component({
    selector: 'app-consumer',
    templateUrl: './consumer.component.html',
    styleUrls: ['./consumer.component.scss'],
})
export class ConsumerComponent implements OnInit {
    cards: Card[];
    card1: Card;
    card2: Card;
    card3: Card;

    constructor(private cardService: CardService, private router: Router) {}

    ngOnInit() {
        this.cards = this.cardService.getCards();
        this.card1 = this.cards.find((card) => {
            return card.page === 'services' && card.position === 1;
        });
        this.card2 = this.cards.find((card) => {
            return card.page === 'services' && card.position === 2;
        });
        this.card3 = this.cards.find((card) => {
            return card.page === 'services' && card.position === 3;
        });
    }

    redirectToContact() {
        this.router.navigateByUrl('contact');
    }
}
