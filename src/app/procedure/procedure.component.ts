import {Component, Renderer2} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'procedure',
  styleUrls: ['./procedure.component.css'],
  templateUrl: './procedure.component.html'
})
export class ProcedureComponent {
  public permClass = "perm active";
  public primClass = "prim";
  public activeClass = "active";

  public toothchart_prim = "toothchart-hide";
  public toothchart = "toothchart-show";

  public doctors_name = "REFERRAL WEB";
  public doctors_pic = "referalweb/assets/referal-logo1.png";

  constructor(private renderer2:Renderer2, private route:ActivatedRoute, private router:Router){
    this.route.queryParams.subscribe(params => {
      this.doctors_name = params["name"];
      this.doctors_pic = params["img"];
     });
  }

  clickTooth(event: any){
    if(event.target.className.includes("selected-teeth")){
      this.renderer2.removeClass(event.target, "selected-teeth");
    }else{
      this.renderer2.addClass(event.target, "selected-teeth");
    }
  }

  clickOperation(event: any){
    if(event.target.className.includes("checked")){
      this.renderer2.removeAttribute(event.target, "class");
      this.renderer2.removeAttribute(event.target, "checked");
    }else{
      this.renderer2.addClass(event.target, "checked");
      this.renderer2.setAttribute(event.target, "checked", "checked");
    }
    
  }

  togglePermClass(){
    if(this.permClass.includes("active")){
      this.permClass = "perm";
      this.primClass = "prim active";
      this.toothchart_prim = "toothchart-show";
      this.toothchart = "toothchart-hide";
    }
  }
  togglePrimClass(){
    if(this.primClass.includes("active")){
      this.permClass = "perm active";
      this.primClass = "prim";
      this.toothchart_prim = "toothchart-hide";
      this.toothchart = "toothchart-show";
    }
  }

  public nextPage(){
    console.log("navigate");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.doctors_name.toString(),
        "img": this.doctors_pic.toString()
      }
    }
    
    this.router.navigate(["notes"], navigationExtras);
  }

  public previousPage(){
    console.log("navigate");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.doctors_name.toString(),
        "img": this.doctors_pic.toString()
      }
    }
    
    this.router.navigate(["patient"], navigationExtras);
  }
}
