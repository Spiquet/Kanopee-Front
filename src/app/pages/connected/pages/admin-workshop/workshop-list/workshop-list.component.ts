import { UserService } from './../../../../../shared/services/user.service';
import { User } from './../../../../../shared/models/user';
import { WorkshopFormsComponent } from '../workshop-forms/workshop-forms.component';
import { Workshop } from '../../../../../shared/models/workshop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkshopService } from 'src/app/shared/services/workshop.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss']
})
export class WorkshopListComponent implements OnInit {

  @Input() user: User;
  @Input() workShops: Workshop[];
  @Output() getModifyWorkshop = new EventEmitter<Workshop>();


  paginatorArray: Workshop[];
  startPageEvent: PageEvent = {
  length: 0,
  pageIndex: 0,
  pageSize: 10,
  };

  constructor(
    private workshopService: WorkshopService,
    private userService: UserService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<WorkshopFormsComponent>,
  ) { }


  ngOnInit() {
    this.user = this.userService.user;
    this.workshopService.getAll()
    .subscribe((data) => {

      this.workShops = data,
      this.startPageEvent.length = this.workShops.length,
      this.generatePaginatorArray(this.startPageEvent);
    });


  }

  // Ouverture de la modal sur le bouton création de l'atelier
  showModal() {
    const dialogRef = this.dialog.open(WorkshopFormsComponent, {
        width: '2000px',
        height: '800px',
    });
    dialogRef.afterClosed()
      .subscribe(() =>
        this.workshopService
          .getAll()
          .subscribe(
            result =>
              this.generatePaginatorArray(this.startPageEvent)
          ));
  }

  // On passe l'index pour pouvoir supprimer l'atelier de la liste
  onDeleteWorkshop(index: number) {
    this.paginatorArray.splice(index , 1);
  }

  // Si l'index est superieur à 0 , alors on supprime l'ancien et on passe le nouvelle atelier modifier

  onModifyWorkshop(workshopModify) {
    const index = this.paginatorArray.findIndex((w) => w.id === workshopModify.id);
    if (index >= 0) {
      this.paginatorArray.splice(index, 1, workshopModify);
    }
  }

  // Pagination
  generatePaginatorArray(event: PageEvent) {
    this.paginatorArray = [];
    const start = event.pageSize * event.pageIndex;
    const end = start + event.pageSize;
    for (let i = start; i < end; i++ ) {
      if (this.workShops[i]) {
        this.paginatorArray.push(this.workShops[i]);
      } else {
        break;
      }
    }
  }



}
