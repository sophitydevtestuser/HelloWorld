import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Login} from './components/login/loginController';


@Component({
    selector: 'app'
})
@RouteConfig([
    {path: '/home', component: Home, as: 'home'},
    {path: '/about', component: About, as: 'about'},
    {path: '/login', component: Login, as: 'login' },
    {path: '/', redirectTo:'/login'}
])
@View({
    templateUrl: './app.html',
    directives: [RouterOutlet, RouterLink]
})
class App {
   
}


bootstrap(App, [routerInjectables]);
