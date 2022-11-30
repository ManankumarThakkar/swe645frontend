//Yaksh Shah
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.css']
})
export class AcknowledgeComponent implements OnInit {


  list = null;


  constructor(private http: HttpClient, private router: Router, private appService: AppService){

  }

  onClick(param) {

    console.log('param is:' + param);
  }
  ngOnInit(): void {
    this.appService.getStudents().subscribe(data => {
      this.list = data
      });


  }

}
