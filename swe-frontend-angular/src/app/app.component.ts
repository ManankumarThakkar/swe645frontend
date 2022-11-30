// Shrushitha Bodanam
import { Component } from '@angular/core';
import { Student } from './student';
import { AppService } from './app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWEAngular';
  public students: Student[];

  constructor(private appService: AppService){}

  ngOnInit() {
    this.getStudents();
    this.getStudents1();
  }
public onAddStudent(addForm:NgForm):void{
  this.appService.addStudent(addForm.value).subscribe((response:Student)=>{
    console.log(response);
  },(error:HttpErrorResponse)=>{
    alert(error.message);
    this.getStudents();
  });
}
  public getStudents(): void {
    this.appService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
        console.log(this.students);
        console.log('...............');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );}
    public getStudents1(): any {
      this.appService.getStudents().subscribe(
        (response: Student[]) => {
          this.students = response;
          console.log(this.students);
          console.log('...............');
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        
      );return this.students;
  }
}
