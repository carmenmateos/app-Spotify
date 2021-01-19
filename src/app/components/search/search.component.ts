import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';




//operador map: transforming information that receive

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {

  loading:boolean;

  artists:any[]=[];


  constructor(private spotify:SpotifyService) { 
   this.loading= false;
  }

  ngOnInit(): void {
  }

 
  search(wordSearch:string) {
   
    this.loading= true;
    this.spotify.getArtistas(wordSearch)
    .subscribe((resp:any) =>{
    console.log(resp);
    this.artists=resp;
    this.loading=false;
    });
    
  }

}
