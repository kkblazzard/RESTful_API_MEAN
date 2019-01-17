import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getATask();
    this.deleteATask();
    console.log("working");
  }

getTasks(){
  let tempObservable = this._http.get('/tasks');
  tempObservable.subscribe(data => console.log("Got our task!", data));
}
getATask(){
  let tempObservable = this._http.get('tasks/5c3f96d476cb24915387f58e');
  tempObservable.subscribe(data=>console.log("Got a task", data));
}
deleteATask(){
  let tempObservable = this._http.delete('tasks/5c3f82765021689079c64c2d');
  tempObservable.subscribe(data=>console.log("Deleted a task", data));
}
}