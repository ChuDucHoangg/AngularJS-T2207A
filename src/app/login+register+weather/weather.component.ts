import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'app-weather',
  templateUrl:'./weather.component.html'
})
export class WeatherComponent{
  city: string ='thanh pho'
  temp:number=30;
  hump:number=70;
  press:number=1004;

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    //ham nay tu dong chay sau khi in ra html
    this.hanoi();
  }
  hanoi(){
    //lay thong tin thoi tiet ha noi
    const url ='https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  bangkok(){
    const url ='https://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  tphcm(){
    const url ='https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  london(){
    const url ='https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  newyork(){
    const url ='https://api.openweathermap.org/data/2.5/weather?q=New York&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  tokyo(){
    const url ='https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
  paris(){
    const url ='https://api.openweathermap.org/data/2.5/weather?q=paris&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name +","+ data.sys.country;
      })
  }
}

