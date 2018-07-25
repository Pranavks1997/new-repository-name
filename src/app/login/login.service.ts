import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { 
    console.log('Data service connected');
  }
  getPosts(){
    //return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    return this.http.get('http://127.0.0.1:5002/');
    //return this.http.get('https://portfolio061pranav.000webhostapp.com');
  }
  getPostslogin(username: String, password:String){
    return this.http.get('http://127.0.0.1:5002/logincheck?user='+username+'&pass='+password);

  }
}
