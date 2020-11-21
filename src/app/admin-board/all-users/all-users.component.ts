import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users$;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.allUser();
    // this.users$.forEach(item => console.log(item));
  }

  deleteUser(id): void {
    this.userService.deleteUser(id);
    window.location.reload();
  }

}
