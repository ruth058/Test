import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }

  getUsers():Observable<any>
  {
   return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
  }

  GetTodos(userId:number):Observable<any>
  {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos?userId="+userId)
  }

  GetDetails(userId:number):Observable<any>
  {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users?id="+userId)

  }

  
  GetBlogs():Observable<any>
  {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")

  }

  

  Getcomments(postId:number):Observable<any>
  {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/comments?postId="+postId)

  }
}
