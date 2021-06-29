import { CardService } from '../../../shared/services/card.service';
import { Card } from '../../../shared/models/card';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-conception',
    templateUrl: './conception.component.html',
    styleUrls: ['./conception.component.scss'],
})
export class ConceptionComponent implements OnInit {
    cards: Card[];
    card1: Card;
    card2: Card;
    card3: Card;

    constructor(private cardService: CardService, private router: Router) {}

    ngOnInit(): void {
        this.cards = this.cardService.getCards();
        this.card1 = this.cards.find((card) => {
            return card.page === 'conception' && card.position === 1;
        });
        this.card2 = this.cards.find((card) => {
            return card.page === 'conception' && card.position === 2;
        });
        this.card3 = this.cards.find((card) => {
            return card.page === 'conception' && card.position === 3;
        });
    }

    redirectToContact() {
        this.router.navigateByUrl('contact');
    }
}
