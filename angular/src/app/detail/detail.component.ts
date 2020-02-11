import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import httpClient from 'axios';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id = '';
  route = undefined;
  book = {
    authors: [],
    imageLinks: {}
  }
  constructor(route: ActivatedRoute, private location: Location) { 
    this.route = route;
  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const { data } = await httpClient.get(
      `https://www.googleapis.com/books/v1/volumes/${this.id}`
    );
    this.book = { ...data.volumeInfo };
  }

  goBack() {
    this.location.back();
  }
}
