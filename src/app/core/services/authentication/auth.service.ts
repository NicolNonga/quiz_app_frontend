import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { UserModel } from "../../model/user";
import { IUser } from "../../interface/user.interface";

@Injectable({
  providedIn: "root",
})

export class AuthenticationService {
  private userSubject: BehaviorSubject<UserModel | any>;
  private user: Observable<UserModel | null>;
  public userToken = "user_quiz";
  public refreshToken = "_refreshToken";
  public subjAuthenticated$: BehaviorSubject<UserModel | any> = new BehaviorSubject(null);
  public subjLoggedIn$: BehaviorSubject<boolean | any> = new BehaviorSubject(false);
  private ip_address: any = null;
  public userData$= new UserModel 
  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.userToken)!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value || null;
  }

  
  login( username: string, password :string) {

    return this.http
      .post<any>(`${environment.app_url}/user/login`, { username, password })
      .pipe(
        map((user) => {
  
          localStorage.setItem(this.userToken, JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    this.router.navigate(["/login"]);
    localStorage.removeItem(this.userToken);
    this.userSubject.next(null);
  }
  get getItemLocalStorage(){
    return JSON.parse(localStorage.getItem(this.userToken)!)
  }

  public get isLoggedIn(): boolean {
    const token = this.getItemLocalStorage();
    return token  ? true : false
  }
  public isAuthenticated(): Observable<boolean> {
    const token = this.getItemLocalStorage;
           console.log(token)
    if(token){
        this.subjLoggedIn$.next(true)
        return of(true)
    }
    return this.subjLoggedIn$.asObservable()
  }

  public setItemLoclaStorage(d:any) {
           localStorage.setItem(this.userToken, JSON.stringify(d))
  }

/*   public getUserInfoLocalStore(){
    return  localStorage.getItem(this.userToken)
  } */
  public criarUser(userInfo:any):Observable<any>{
    return this.http.post(`${environment.app_url}/users`, userInfo);
  

  }
}
