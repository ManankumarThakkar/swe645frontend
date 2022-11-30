import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers:[AppService]
})
export class SurveyComponent implements OnInit {

  title = 'SWE645Angular';
  public students: Student[];

  constructor(private http: HttpClient, private router: Router, private appService: AppService) {}

  ngOnInit() {
    this.getStudents();
    this.getStudents1();
  }

  public onAddStudent(addForm:NgForm):void{
    if(addForm.invalid){
      alert("Required fields must be entered");
      return;
    }
    
    this.appService.addStudent(addForm.value).subscribe((response:Student)=>{
      console.log(response);
      this.router.navigateByUrl('/acknowledge');
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
