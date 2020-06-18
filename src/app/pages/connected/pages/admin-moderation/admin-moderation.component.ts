import { SnackbarService } from './../../../../shared/services/snackbar.service';
import { UserService } from './../../../../shared/services/user.service';
import { User } from './../../../../shared/models/user';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserRole } from './../../../../shared/enum/user-role.enum';

@Component({
  selector: 'app-admin-moderation',
  templateUrl: './admin-moderation.component.html',
  styleUrls: ['./admin-moderation.component.scss']
})
export class AdminModerationComponent implements OnInit {
  @Input() user: User;
  roles = UserRole;
  users: User[] = [];
  id: number;
  activate: boolean;

  paginatorArray: User[];
  startPageEvent: PageEvent = {
  length: 0,
  pageIndex: 0,
  pageSize: 10,
  };

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource(this.users);

  displayedColumns: string[] = [
                                'lastName',
                                'firstName',
                                'create',
                                'lastConnection',
                                'email',
                                'role',
                                'site',
                                'isActivate',
                                'modify',
                                'delete',
  ];


  constructor(
    private userService: UserService,
    private snackBarService: SnackbarService,

  ) { }


  ngOnInit() {
    this.user = this.userService.user;
    this.getUsers();

  }

  // Requête qui permet d'obtenir tout les utilisateurs
  getUsers() {
    this.userService
    .getAll()
    .subscribe((data: User[]) => {
      this.users = data,
      this.startPageEvent.length = this.users.length,
      this.generatePaginatorArray(this.startPageEvent);
    });
  }

  // Compare les rôles entre l'enum et les rôles reçu via le serveur
  comparedRole(role1, role2) {
    return role1 === role2;
  }

  // Requête qui permet de modifier un utilisateurs
  updateUser(user: User) {
    this.userService.update(user).subscribe(() => console.log('ok'));
    this.snackBarService.openSnackBar(`L'utilisateur ${user.lastName} ${user.firstName} a bien été modifié`);
    }

  // Requete qui permet de supprimer un utilisateur
  deleteUser(id) {
    console.log(id);
    this.userService.delete(id).subscribe(() => console.log('delete ok'));
    // this.snackBarService.openSnackBar(`L'utilisateur ${this.user.firstName}  a été supprimé.`);
  }

  // Fonction qui permet d'avoir une pagination en fonction du nombre de donnée reçu
  generatePaginatorArray(event: PageEvent) {
    this.paginatorArray = [];
    const start = event.pageSize * event.pageIndex;
    const end = start + event.pageSize;
    for (let i = start; i < end; i++ ) {
      if (this.users[i]) {
        this.paginatorArray.push(this.users[i]);
      } else {
        break;
      }
    }
  }


  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  //   console.log(filterValue);
  // }

}
