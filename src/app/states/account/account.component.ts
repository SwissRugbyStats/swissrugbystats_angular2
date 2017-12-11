import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'account-overview',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {

  public token;

  ngOnInit(): void {
    this.getToken();
  }

  constructor(
    private route: ActivatedRoute,
  ) { }

  getToken(): void {
    this.route.fragment.subscribe((fragment: string) => {
        console.log('My hash fragment is here => ', fragment);
        this.token = fragment;
        return fragment;
    })
  }

}
