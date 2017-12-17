import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
hometitle = "home component works good!!!";

  employee = {
     name: "kumar",
     lob: "prepaid"
 };

 alertme(val){
  alert(val);
}

classes = {'blue':true,'red':false,'underline':true};

fruits = [
  {name:"Apple", color:"red"},
  {name:"banana", color:"yellow"},
  {name:"blueberry", color:"blue"},
]

  constructor() { }

  ngOnInit() {
  }

}
