import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styles: [`h1{
    color:red
  }`]
})
export class ServersComponent implements OnInit {
  serverCreation = 'no server was created';
allowNewServe:boolean=false;
servername:string = '';
serverCreated:boolean = false;
servers:any = ['testServer','testServer2'];
  constructor() {
    setTimeout(()=>{this.allowNewServe=true},2000);
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.serverCreation = 'server was created, name it as ' + this.servername;
    this.serverCreated = true;
    this.servers.push(this.servername);
  }

  onUpdateServerName(event:Event){
    // console.log(event);
    this.servername = (<HTMLInputElement>event.target).value;
  }

}
