import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
selector: 'app-root',
imports: [RouterOutlet],
templateUrl: './app.html',
styleUrl: './app.css'
})

export class App {
name="";
displayName="";
email="";
getName(event:Event){
this.name=(event.target as HTMLInputElement).value

}
showName(){
this.displayName=this.name;
}
setName(){
this.name="priya"
}
getEmail(val:string){
console.log(val);
this.email=val
}

setEmail(){
this.email= "default@TestBed.com"
}
