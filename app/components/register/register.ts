import {Component, OnInit, DoCheck} from '@angular/core';
import {FormGroup, FormControl, FORM_PROVIDERS, FORM_DIRECTIVES} from '@angular/forms';
import {RegisterService} from './register.service';

class User{
	name: string;
	email: string;
	passwd: string;
}

@Component({
	selector: 'register',
	templateUrl: './register.html',
	providers: [RegisterService]
	
	})
export class RegisterComponent implements OnInit, DoCheck{
registerForm: FormGroup;
user: User;
constructor(){
	this.user = new User();
	this.registerForm = new FormGroup({
	userName: new FormControl(),
	emailId: new FormControl(),
	passwd: new FormControl(),
	retypePasswd: new FormControl()
	});
}
ngOnInit(){
}
ngDoCheck(){
}
registerUser(){
	if(this.registerForm.valid){
		console.log('User Details : '+ JSON.stringify(this.user));
	}
}
}
