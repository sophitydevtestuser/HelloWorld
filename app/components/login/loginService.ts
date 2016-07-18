export class LoginService{
     private users = [{
         login:'ananntjsr@gmail.com',
         password: 'abcd1234'
     },
     {
         login:'rr@gustr.com',
         password: '123456'
     }];
     authenticateUser(login:string, passwd:string){
         let IsUserAuthenticated = false;
         for(let i =0; i< this.users.length; i++){
             if(this.users[i].login == login && this.users[i].password == passwd){
                IsUserAuthenticated = true;
                break; 
             }
         }
         return IsUserAuthenticated? true: false;
     }
 }


