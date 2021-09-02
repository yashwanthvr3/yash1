import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { __param } from 'tslib';


@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  EmpName:any;
  EmpAddress:any;
  isShownSaveBtn: boolean = false;
  isShownUpdateBtn: boolean = true;
  employees:any;
  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.bindEmpDetails();
  }
bindEmpDetails(){
  var value = this.http.get(environment.apiurl + 'demo/getAllEmployee').toPromise().then(
    (data: any) => {
      debugger;
      if (data.length != 0) {
        this.employees=data;
      }
      else {
      };
    });
}

  InsertEmpDetails() {
    if (this.EmpName == undefined || this.EmpName  == "" ) {
      alert("Please enter the Name");
      return;
    }
    if (this.EmpAddress == undefined || this.EmpAddress == "" ) {
      alert("Please enter the Address");
      return;
    }
var vempId:any=2;
    let formdata=new FormData();
    formdata.append("employeename",this.EmpName);
    formdata.append("address",this.EmpAddress);
    var vdat:any;
    debugger;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
  let options = { headers: headers };
    vdat="{\"name\":\""+this.EmpName+"\",\"address\":\""+this.EmpAddress+"\"}";
    var vvv=JSON.stringify(vdat);
    this.http.post(environment.apiurl+'demo/insertEmployee',vdat,options).subscribe(
      (Response)=>{
        debugger;
        var vData:any;
        this.bindEmpDetails();
        this.EmpName="";
        this.EmpAddress="";
      },
      (error)=>{
        debugger;
        this.bindEmpDetails();
      });
    
  }
}
