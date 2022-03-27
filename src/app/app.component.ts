
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EmployeeService } from './employee--skip-tests=true.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public employees: Employee[] = [];


  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployee;
  }

  public getEmployee():void{

    this.employeeService.getEmployee().subscribe(

      (response: Employee[])  =>{

        this.employees=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
      
      
    );
  }

}
