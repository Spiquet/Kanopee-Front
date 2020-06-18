import { User } from '../../../../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../../shared/services/authentification.service';

@Component({
  selector: 'app-navbar-connect',
  templateUrl: './navbar-connect.component.html',
  styleUrls: ['./navbar-connect.component.scss']
})
export class NavbarConnectComponent implements OnInit {
  @Input() user: User;

  private userList = [
    ['/log/dashboard', 'MON TABLEAU DE BORD'],
    ['/log/produits', 'PRODUITS'],
    ['/log/user-workshop', 'ATELIERS/FORMATIONS'],
    ['/log/communaute', 'COMMUNAUTE']
  ];

  private adminList = [
    ['/log/planning', 'PLANNING'],
    ['/log/workshops', 'ATELIERS'],
    ['/log/communaute', 'COMMUNAUTE'],
    ['/log/produits', 'PRODUITS'],
    ['/#', 'COMMANDES'],
    ['/log/moderation', 'MODERATION']
  ];

  private kulteurList = [
    ['/log/planning', 'PLANNING'],
    ['/#', 'SITES'],
    ['/#', 'FOURNISSEURS'],
    ['/log/communaute', 'COMMUNAUTE']
  ];

  selectedList: string[][];
  menuBurger: boolean;

  constructor(private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit() {
    if (this.user.role === 'user') {
      this.selectedList = this.userList;
    } else if (this.user.role === 'admin') {
      this.selectedList = this.adminList;
    } else {
      this.selectedList = this.kulteurList;
    }

    if ( window.screen.width < 769 ) {
      this.menuBurger = true;
    } else {
      this.menuBurger = false;
    }
  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/']);
  }
}
