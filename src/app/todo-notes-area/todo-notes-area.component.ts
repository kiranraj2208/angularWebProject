import { Component, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-todo-notes-area',
  templateUrl: './todo-notes-area.component.html',
  styleUrls: ['./todo-notes-area.component.css']
})

export class TodoNotesAreaComponent{
  constructor(private http: HttpClient) {
   }
   size = 2;
   //for checking the tick mark
   completed = new Array(this.size);
   //to hover the cancel mark
   entered = new Array(this.size);
   //tasks string
   tasks = new Array(this.size);
   private url = "http://localhost:3000";
   taskInput = '';

   // get img(){ 
   	

 onClick(ind : number){
 	console.log("Clicked", ind);
 	this.completed[ind] = !this.completed[ind];
 	this.http.post('http://localhost:3000/insertTask', 
     {index:0, task:"new task", completed:0}).subscribe((res) =>{

   })
 	return this.completed[ind];
 	
 }

 mouseEntered(ind:number){
 	console.log("Mouse entered");
 	this.entered[ind] = 1;
 	return this.entered[ind];

 }


 mouseLeft(ind:number){
 	console.log("Mouse Left");
 	this.entered[ind] = 0;
 	console.log(ind);
 	return this.entered[ind];
 }


 deleteTask(ind: number){
 	console.log("Delete task");
 	this.tasks.splice(ind, 1);
 	this.completed.splice(ind, 1);
 }



left(){
	console.log(this.tasks);
}

customTrackBy(index:number, obj:any): any{
	return index;
}

  onSubmit(form){
  this.tasks.push(form.value.taskInput);
  this.completed.push(0);
  console.log(this.taskInput);
}

}


