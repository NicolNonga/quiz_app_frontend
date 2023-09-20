import { HttpContextToken } from "@angular/common/http";

export  const  HttpConstants= {
    RETRY_COUNT:  new HttpContextToken(()=> 3),
   retryWaitSeconds:1000,
   ERROR_COUNT:new HttpContextToken(()=> 0)
}