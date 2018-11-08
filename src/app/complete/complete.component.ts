import {Component} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'complete',
  styleUrls: ['./complete.component.css'],
  templateUrl: './complete.component.html'
})
export class CompleteComponent {
  public doctors_name = "REFERRAL WEB";
  public doctors_pic = "referalweb/assets/referal-logo1.png";

  constructor(private route:ActivatedRoute, private router:Router){
    this.route.queryParams.subscribe(params => {
      this.doctors_name = params["name"];
      this.doctors_pic = params["img"];
     });
  }

  public previousPage(){
    console.log("navigate");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.doctors_name.toString(),
        "img": this.doctors_pic.toString()
      }
    }
    
    this.router.navigate(["notes"], navigationExtras);
  }
}
