import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() users:any
  order:string = "asc"

  sortTableByAge(){
    this.users.sort((a:any,b:any)=>{
      if(this.order==="asc"){
        return a.dob.age - b.dob.age
      } else{
        return b.dob.age - a.dob.age
      }
    })
    this.order= this.order==="asc"?"desc":"asc"
  }

}
