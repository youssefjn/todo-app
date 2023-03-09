import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount : number =4;
  btnText : string = 'Add an Item';
  goalText : string = 'My First life goal';
  goals :any = [];

  constructor(private route:ActivatedRoute,private router:Router, private data:DataService) { 
    this.goals=this.data.getGoal();
  }
  ngOnInit(): void {
    this.itemCount=this.goals.length;
  }
  addItem(){
    //this.goals.push(this.goalText);
    this.data.goals.push(this.goalText);
    this.goalText = '';
    //this.itemCount = this.goals.length;
    this.itemCount=this.data.goals.length;
  }
}
