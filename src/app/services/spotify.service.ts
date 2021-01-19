import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

//Operador Map for filter information received
import {map} from 'rxjs/operators';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spoti ready')
   }

   getQuery(query:string) {
     const url=`https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
      'Authorization':'Bearer BQBzodESnEGrXZWsLPIFTDGXSeZvZHr8cJrHDWvd9kFIx1ufKTa9b1Vq03S7pZGXxD0xblnL_c38VgBbi5g'
    });
    return this.http.get(url, {headers});
   }
   

   getNewReleases () {
 //optimization code
    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map((resp:any)=> resp['albums'].items));
      // const headers = new HttpHeaders({
      //   'Authorization':'Bearer BQBT8L5gboqfAspt7bu25uuLPmOgJm26cyv5hRD44Zo29SmC0rHzu6gMZrDsDB3TnHrG8o-aSF2M_mU1hW8'
      // });
    //   return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})
    //  .pipe(map((resp:any)=> resp['albums'].items));
    }

   getArtistas (wordSearch:string) {
     //optimization code
    return this.getQuery(`search?q=${wordSearch}=&type=artist&limit=15`)
    .pipe(map((resp:any)=>  resp['artists'].items));
  //   const headers = new HttpHeaders({
  //     'Authorization':'Bearer BQBT8L5gboqfAspt7bu25uuLPmOgJm26cyv5hRD44Zo29SmC0rHzu6gMZrDsDB3TnHrG8o-aSF2M_mU1hW8'
  //   });
  // return this.http.get(`https://api.spotify.com/v1/search?q=${wordSearch}=&type=artist&limit=15`,{headers})
  // .pipe(map((resp:any)=>  resp['artists'].items));

   }

   getArtist (id:string) {
   
   return this.getQuery(`artists/${id}`);
  // .pipe(map((resp:any)=>  resp['artists'].items));
   }
   getTopTracks (id:string) {
   
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((resp:any)=>resp['tracks']));

   
    }
}
