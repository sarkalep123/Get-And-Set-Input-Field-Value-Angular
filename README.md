# Get-And-Set-Input-Field-Value-Angular.js #

# App.html
<h1>Get and set Input field Value</h1>

<h1>User Name is :{{ displayName}}</h1>
<input type="text" value="{{name}}"(input)="getName($event)" placeholder="Enter User name">

<br>
<br>
<button (click)="showName()">Get Value</button>
<button (click)="setName()">Set Value</button>

<hr>
<h1>Email:{{email}}</h1>
<input type="text"value="{{email}}" placeholder="enter email" #emailField>
<button (click)="getEmail(emailField.value)">Get Email</button>
<button (click)="setEmail()">Set Email</button>

<button>Set Email</button>

# App.ts

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



# Counter App Code #

# app.ts

# different fun use

 count=0

  handleIncrement(){
    this.count=this.count+1;
  }

  handleDecrement(){
  this.count=this.count-1;;
  }

  handleReset(){
    this.count=0;
    }

 # One function use


    handleCounter(val:string){
      if(val=='minus'){
        this.count=this.count-1
      }else if(val=='plus'){
        this.count=this.count+1
      }else{
        this.count=0
      }

  
  # App.html

   <h1>Counter App</h1>
   <div style="text-align: center;">
    <h2 class="count">{{count}}</h2>
    <div>
        <button (click)="handleCounter('minus')"class="btn bg-red">Decrement</button>
        <button (click)="handleCounter('reset')"class="btn bg-green">Reset</button>
        <button (click)="handleCounter('plus')"class="btn bg-black">Increment</button>
    </div>
</div>


# Event Binding Code #
# app.ts
handleEvent(event:Event){
console.log("function called",event.type);
 console.log("value",(event.target as HTMLInputElement).value);
  }
  
# app.html

<h1>Event in Angular</h1>
    <br> 
   <button class="btn" name="login" (click)="handleEvent($event)">Event Click!</button>

<br>
<br>
<br>
<div
(mouseenter)="handleEvent($event)"
 style="background-color: green; height:100px;width:100px;">
</div>

<div
(mouseleave)="handleEvent($event)"
 style="background-color: red; height:100px;width:100px;">
</div>

<br>
<br>
<input type="text"
(focus)="handleEvent($event)"
(blur)="handleEvent($event)"
(input)="handleEvent($event)"
name="user"> 



