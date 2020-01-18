import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { DataService } from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount : number;
  btnText : string = 'Add New Item';
  goalText : string= "My first goal";
  goals = [];
  constructor(private _data : DataService) {
  
   }
   ngOnInit() {
    this._data.goal.subscribe(resp => this.goals = resp);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
addItem(){
  this.goals.push(this.goalText);
  this.itemCount = this.goals.length;
  this._data.changeGoal(this.goals);
}
removeItem(i){
  this.goals.splice(i,1);
  this.itemCount = this.goals.length;
  this._data.changeGoal(this.goals);
}

}
