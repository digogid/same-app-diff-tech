import { Component, OnInit } from '@angular/core';
import httpClient from 'axios';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books = [];
  empty = true;
  term = '';

  constructor() { }

  ngOnInit() {
  }

  async search() {
    const { data } = await httpClient.get( `https://www.googleapis.com/books/v1/volumes?q=${this.term}`);
    this.books = data.items.map(book => ({ id: book.id, ...book.volumeInfo }));
    this.empty = false;
  }

}
