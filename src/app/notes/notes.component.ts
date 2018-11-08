import {Component, Renderer2} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'notes',
  styleUrls: ['./notes.component.css'],
  templateUrl: './notes.component.html'
})
export class NotesComponent {
  public doctors_name = "REFERRAL WEB";
  public doctors_pic = "referalweb/assets/referal-logo1.png";

  constructor(private renderer2:Renderer2, private route:ActivatedRoute, private router:Router){
    this.route.queryParams.subscribe(params => {
      this.doctors_name = params["name"];
      this.doctors_pic = params["img"];
     });
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
  
  public nextPage(){
    console.log("navigate");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.doctors_name.toString(),
        "img": this.doctors_pic.toString()
      }
    }
    
    this.router.navigate(["complete"], navigationExtras);
  }

  public previousPage(){
    console.log("navigate");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.doctors_name.toString(),
        "img": this.doctors_pic.toString()
      }
    }
    
    this.router.navigate(["procedure"], navigationExtras);
  }
}
