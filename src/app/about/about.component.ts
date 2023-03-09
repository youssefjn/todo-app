import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
goals : string[] =[];
  constructor(private route:ActivatedRoute,private router:Router, private data:DataService) { 
    this.goals=this.data.getGoal();
  }
  ngOnInit(): void {
  }
  sendMeHome(){
    this.router.navigate(['']);
  }
}
