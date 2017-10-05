import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {
  types = [
    'Fire',
    'Electric',
    'Water',
    'Rock',
    'Fighting'
  ];
  constructor() { }

  ngOnInit() {
  }

}
