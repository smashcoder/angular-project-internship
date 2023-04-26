import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent {
  @Output() login = new EventEmitter<{ email: string, password: string }>();

  email = '';
  password = '';

  onSubmit() {
    this.login.emit({ email: this.email, password: this.password });
  }
}
