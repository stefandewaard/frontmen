import { HttpHeaders } from '@angular/common/http';

const firebase: string = 'https://fir-3133c.firebaseio.com';
const localhost: string = 'http://localhost:3000';
const demo: string = 'http://api.icndb.com'

export const api = {
  languages: `${firebase}/language`,
  company: `${firebase}/company.json`,
  login: `${localhost}/login`,
  verify: `${localhost}/login/verify`,
  profile: `${localhost}/api/v1/users/myprofile`,
  jokes: `${demo}/jokes`
}

export const httpOptions = (token?:string) => {
  return token ? {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } : {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      })
    }
};
