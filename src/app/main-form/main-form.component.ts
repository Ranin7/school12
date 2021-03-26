import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

 arrStu =[]
  constructor() { }

  ngOnInit(): void {
  }
submit(){

  let name = (<HTMLInputElement>document.getElementById("name")).value;
    let id = (<HTMLInputElement>document.getElementById("id")).value;
    let gdpa = (<HTMLInputElement>document.getElementById("gdpa")).value
    let stuDate = (<HTMLInputElement>document.getElementById("birth")).value;

    let stu ={
      name:name,
      id:id,
      gdpa:gdpa,
      stuDate:stuDate,
      data:new Date()
    };
    this.arrStu.push(stu);
    console.log("array :", this.arrStu);
}
print() {
  let print = "";
  for (let i in this.arrStu) {
    let student = [];

    for (let j in this.arrStu[i]) {
      student.push(j + ": " + this.arrStu[i][j]);
    }

    print += "<li>" + student.join("<br>") + "</li> <br>";
  }

  document.getElementById("print").innerHTML = "<ol>" + print + "</ol>";
}
}
