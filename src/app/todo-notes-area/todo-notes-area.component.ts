import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-notes-area',
  templateUrl: './todo-notes-area.component.html',
  styleUrls: ['./todo-notes-area.component.css']
})
export class TodoNotesAreaComponent{
  constructor() {
   }
   size = 2;
   completed = new Array(this.size);
   entered = new Array(this.size);
   tasks = ['hello', 'world'];//new Array(this.size);


   // get img(){ 
 onClick(ind : number){
 	console.log("Clicked", ind);
 	this.completed[ind] = !this.completed[ind];
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

left(){
	console.log(this.tasks);
}

customTrackBy(index:number, obj:any): any{
	return index;
}

}
