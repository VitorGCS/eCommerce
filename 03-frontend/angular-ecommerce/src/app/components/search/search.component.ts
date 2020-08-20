import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  //first: Inject the router
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(value: string){
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
    //Route the data to our "search" route it will be handled by the ProductListComponent 0> to reuse the logic and view for listing products
  }

}
