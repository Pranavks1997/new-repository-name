import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    data1: JSON;
    data2: string;
    data6: JSON;
    p: string[];
    r: string[];
    username :String;
    password : String;
    constructor(public router: Router,private dataService : LoginService) {
        console.log('constructor of check.ts...');  
    }

    ngOnInit() {
        console.log('check ngoninit');
    this.dataService.getPosts().subscribe(data => {
      this.data1= data as JSON;
      console.log(this.data1);
      this.data2=JSON.stringify(this.data1);
      this.p=JSON.parse(this.data2)._body;
      //this.r.push(this.p[0]);
      //this.r=JSON.parse(this.p);
      //this.p=this.data2;
    });
    }

    onLoggedin(username :String, password: String) {
        this.username = username;
        this.password = password;
        this.dataService.getPostslogin(username,password).subscribe(data5 => {
            this.data6= data5 as JSON);
        console.log(this.data6)
        localStorage.setItem('isLoggedin', 'true');
    }
}
