/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Component, View} from 'angular2/angular2';
import {LoginService} from './loginService';
import {Router} from 'angular2/router'

@Component({
    selector: 'login',
    viewBindings: [LoginService]
})
@View({
    templateUrl: './components/login/login.html'
})

export class Login{
    constructor(private loginService:LoginService, private router:Router){
    }
    authenticateUser(login, passwd){
        if(this.loginService.authenticateUser(login.value, passwd.value)){
            console.log('authenticated');
            this.router.navigate('/');
        } else{
            console.log('not authenticated');
        }
    }
    
}

