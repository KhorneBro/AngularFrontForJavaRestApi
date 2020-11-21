import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-board-layout',
  templateUrl: './admin-board-layout.component.html',
  styleUrls: ['./admin-board-layout.component.css']
})
export class AdminBoardLayoutComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(event: Event): void {
    event.preventDefault();
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
