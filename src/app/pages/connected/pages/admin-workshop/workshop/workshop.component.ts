import { UserService } from '../../../../../shared/services/user.service';
import { User } from '../../../../../shared/models/user';
import { WorkshopService } from '../../../../../shared/services/workshop.service';
import { WorkshopFormsComponent } from '../workshop-forms/workshop-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { Workshop } from '../../../../../shared/models/workshop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  @Input() workshop: Workshop;
  @Output() getModifyWorkshop = new EventEmitter<Workshop>();
  @Output() getDeleteWorkshop = new EventEmitter<Workshop>();

  @Input() user: User;

  constructor(
    private workshopService: WorkshopService,
    public dialog: MatDialog,
    public userService: UserService,
    ) { }


  ngOnInit() {
    this.user = this.userService.user;
   }

   // Ouverture de la modal et on emet l'evenement avec un Output
  modifyWorkshop() {
    const dialogRef = this.dialog.open(WorkshopFormsComponent, {
      data: this.workshop,
      width: '2000px',
      height: '800px',
    });
    dialogRef.afterClosed().subscribe((workshop) => {
      this.getModifyWorkshop.next(workshop);
    });
  }

  // Supprime l'atelier et on emet l'evenement avec un Outpout
  deleteWorkshop() {
    this.workshopService
    .delete(this.workshop.id)
    .subscribe(
      (data: Workshop) => {
        this.getDeleteWorkshop.emit(data);
      });
   }

}
