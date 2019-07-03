import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true; //password hiding
  credentials = '';
  userName:string;
  password:string;
  basic = '';
  constructor(private fb: FormBuilder,
    private router: Router, private http: HttpClient,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'userName': [null, [Validators.required]],
      'password': [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  Login(event) {
    
    this.credentials = this.userName + ":" + this.password;
    console.log(this.credentials);
    this.basic = btoa(this.credentials);
    console.log(this.basic);
    let httpHeaders = new HttpHeaders()
         .set('Content-Type', 'application/json')
         .set('maxauth', this.basic);  
      console.log(httpHeaders);
      
    let options ={ headers: httpHeaders };
   console.log(options);
    return this.http.post('http://13.233.56.57:9080/maximo/oslc/login?lean=1', null , options)
      .subscribe(
      res => {
        localStorage.setItem('username',this.userName);
        localStorage.setItem('password',this.password);
        //this.getDetailsService(this.firstName,this.Password)
        console.log(this.userName)
       this.router.navigateByUrl('/dashboard');
      },
      err => {
        console.log(err.message);
        this.snackBar.open("Unauthorized " , "OK", {
          verticalPosition: 'top',
          horizontalPosition: 'center',
          duration: 2000,
        });
      }
      )
     
  }
}

