import { Component, Inject, OnInit } from '@angular/core';

import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'nx-circleci-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app-a';
  user: string = '';

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  async ngOnInit() {
    const user = await this.oktaAuth.getUser();
    this.user = JSON.stringify(user, null, 4);
  }
}
