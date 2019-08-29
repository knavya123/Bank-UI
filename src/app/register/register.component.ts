import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  check = function(p,p1) {
    if (p.value ==p1.value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Matching';
      document.getElementById('icon').classList.add("fa-times-circle");
      
    } else {
      this.dis="not matching";
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Not Matching';
      document.getElementById('icon').classList.add("fa-times-circle");
    }
    
  }
 


}
