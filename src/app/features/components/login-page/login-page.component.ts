import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/core/services/user-login.service';

@Component({
  selector: 'app-loginPage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private titleService: Title,
    private authService: UserLoginService,
    private router: Router) { 
    titleService.setTitle('ZomatoClone | Login')
  }

  signupUser: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  }

  onSignUp(){
    if(this.signupObj.userName === '' || this.signupObj.email=== '' || this.signupObj.password === ''){
      alert('Put some valid input')
    }
    else{
      const isUserExist = this.signupUser
                          .find(user => user.email == this.signupObj.email 
                                        // && user.password == this.loginObj.password
                                        );
      if(isUserExist == undefined){
        this.signupUser.push(this.signupObj);
        console.log(this.signupUser);
        localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
        this.signupObj = {
          userName: '',
          email: '',
          password: ''
        };
        alert('Signed up successfully!!!');
      }
      else alert('User already exist!!')
    }
  }

  onLogin(){
    if(this.loginObj.email=== '' || this.loginObj.password === ''){
      alert('Put some valid input')
    }
    else{
      const isUserExist = this.signupUser
                          .find(user => user.email == this.loginObj.email 
                                        && user.password == this.loginObj.password);
      // console.log(isUserExist);
      if(isUserExist != undefined){
        this.authService.loginUser(isUserExist.userName);
        alert("Welcome back");
        this.loginObj = {
          email: '',
          password: ''
        }
        this.router.navigate(['']);
      }
      else alert('Wrong credentials');
    }
  }

  //if refreshed need to load again in signupUser
  ngOnInit(): void {
    const localData = localStorage.getItem('signupUser');
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }
  }

}
