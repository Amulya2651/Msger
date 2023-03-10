import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Messanger app';
  users: any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:5085/api/Users').subscribe({
      next : response=> this.users=response,
      error: error => console.log("error"),
      complete: () =>console.log('completed')


    });
  }


  
}
