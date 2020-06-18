import { UserService } from './../../../../shared/services/user.service';
import { User } from './../../../../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }
}
