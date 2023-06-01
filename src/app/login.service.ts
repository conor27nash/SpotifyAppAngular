import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  scopes = "user-read-private user-read-email user-top-read user-read-recently-played playlist-modify-public playlist-modify-private";
  redirect_uri = "http://localhost:3000/test";
  url =
        "https://accounts.spotify.com/authorize?response_type=code&client_id=4c4f2ecd3bf648d49adc7846d0091831" +
        "&scope=" +
        encodeURIComponent(this.scopes) +
        "&redirect_uri=" +
        encodeURIComponent(this.redirect_uri);

        Login(){
          return this.http.get
        }

}
