import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any[]=[];
  loading:boolean;
  error:boolean=false;
  mensajeError:string;
  
  constructor( private spotify:SpotifyService) {

    this.loading=true;
    this.error=false;
    this.spotify.getNewReleases().subscribe((resp:any)=>{
      
      this.newSongs=resp;
      this.loading=false;
    }, (errorServicio) => {
      this.loading=false;
      this.error =true;
      this.mensajeError = errorServicio.error.error.message;
      console.log();

    });


    }

  //HttpClient exercise
 //countries:any[]=[];
  // constructor( private http: HttpClient) {

  //   this.http.get('https://restcountries.eu/rest/v2/lang/en').subscribe((resp:any)=>{
  //     this.countries = resp;
  //     console.log(resp);

  //   })
    
    
  //  }

  ngOnInit(): void {
  }

}
