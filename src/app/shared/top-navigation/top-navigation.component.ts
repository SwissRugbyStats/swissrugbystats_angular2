import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/auth/authentication.service";
import { User } from "../../core/auth/models/user";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  user: User;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.user$().subscribe(a => {
      this.user = a;
    })
  }

}
