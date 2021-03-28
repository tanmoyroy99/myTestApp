import { Component, OnInit } from '@angular/core';
import { BookService } from './../app/service/book.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: BookService) { }

  ngOnInit() {
        this.api.getBooks()
          .subscribe((res: any) => {
            console.log(res);
            // this.isLoadingResults = false;
          }, err => {
            console.log(err);
            // this.isLoadingResults = false;
          });
  }

}
