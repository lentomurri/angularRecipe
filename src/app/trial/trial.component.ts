import { Component, OnInit } from '@angular/core';
// import { RegExp } from "RegularExpressions/Regex";

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['trial.component.css', '../app.component.css']
})
export class TrialComponent implements OnInit {
  mailxp = new RegExp(/[\w\d]+@[\w\d]+\.[\w\d]+/);
  mail = '';
  password = '';
  newMail = '';
  newPassword = '';
  authorizedUsers = [{
    'silvia@gmail.com': 'ciaone'
  }];

  checkUser() {
    if (this.mailxp.test(this.mail) === false) {
      alert('Please enter a valid mail format');
    }
    else if (this.authorizedUsers[0][this.mail] === this.password){
        alert('Logged In!');
    }
    else {
      alert('Wrong email or password.');
    }
  }

  addUser() {
    if (this.mailxp.test(this.newMail) === false) {
      alert('Please enter a valid mail format');
    }
    else if (this.newMail in this.authorizedUsers[0]) {
      alert('this email is already registered.');
    }
    else {
      this.authorizedUsers[0][this.newMail] = this.newPassword;
      alert('New user active');
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
