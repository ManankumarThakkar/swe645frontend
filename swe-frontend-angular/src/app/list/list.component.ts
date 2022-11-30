import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Student } from '../student';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public students = [];

  constructor(private appService: AppService) {
    console.log('List here');
    console.log(appService.getStudents1());
    console.log(appService.getStudents());
  }

  ngOnInit(): void {
    this.appService.getStudents1().subscribe(data => this.students = data);
    console.log(this.students);
  }


  }

