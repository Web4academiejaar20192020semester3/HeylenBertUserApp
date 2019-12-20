import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) { }
  users: User[];
  user: User;
  getAllUsers(): void {
    timer(0, 2000)
      .subscribe(() => {
        this.userService.getUsers()
          .subscribe(users => this.users = users);
      });
  }
  ngOnInit() {
    this.getAllUsers();
  }
  select(user: User): void {
    this.user = user;
  }
}
