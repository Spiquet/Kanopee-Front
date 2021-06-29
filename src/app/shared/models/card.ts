export class Card {
    page: string;
    position: number;
    title: string;
    p1: string;
    p2: string;
    p3: string;

    constructor(input?: Card) {
        if (input) {
            Object.assign(this, input);
        }
    }
}
