import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-envelop',
    templateUrl: './envelop.component.html',
    styleUrls: ['./envelop.component.scss'],
})
export class EnvelopComponent {
    @Input() title: string;
    @Input() details: string;
    @Input() subtitle?: string;
    @Input() description: string;
    @Input() location?: string;
}
