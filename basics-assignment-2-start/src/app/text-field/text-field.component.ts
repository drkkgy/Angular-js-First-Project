import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
  username = ""
  

  constructor() { }

  ngOnInit() {
  }
  onClickFunction(){
  }
  allowtext() {
   if (this.username == "")

   {return false}
   else 

   {return true}
  }

  clear_text() {
    this.username = ""
  }

}
