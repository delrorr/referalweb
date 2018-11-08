import {Component} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'patient',
  styleUrls: ['./patient.component.css'],
  templateUrl: './patient.component.html'
})
export class PatientComponent {
  public doctors_name = "REFERRAL WEB";
  public doctors_pic = "referalweb/assets/referal-logo1.png";

  constructor(private route:ActivatedRoute, private router:Router){
    this.route.queryParams.subscribe(params => {
     this.doctors_name = params["name"];
     this.doctors_pic = params["img"];
    });
  }

  public nextPage(){
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
