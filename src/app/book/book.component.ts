import { Component } from '@angular/core';
import { BookService } from './../service/book.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
    constructor(public api: BookService) { }

    data: any = [
      
    ];
    ngOnInit() {
        this.api.getBooks()
          .subscribe((res: any) => {
            // this.data = res;
            console.log('-->>',this.data['items']);
            let info = res['items'];
            for(let i in info){
              console.log('>>>',info[i].id)
              this.data.push(info[i])
            }
            // this.isLoadingResults = false;
          }, err => {
            console.log(err);
            // this.isLoadingResults = false;
        });
      }

      

}
