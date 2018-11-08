import {Component} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'search',
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public specialization = "ORTHODONTIST";

  searchList: any[] = [
    {
      "ID" : "1",
      "specialty" : "ORTHO",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "2",
      "specialty" : "ENDO",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "3",
      "specialty" : "PEDO",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "4",
      "specialty" : "PEDO",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    }
  ];

  map = new Map()
    .set("ORTHO","ORTHODONTISTS")
    .set("ENDO","ENDODONTIST")
    .set("PEDO","PEDODONTIST")
    .set("PATH","PATHOLOGIST")
    .set("OTHERS","OTHERS")
    .set("ORAS S","ORAL")
    .set("PERIO","PERIODONTIST")
    .set("PROS","PROSTHODONTIST")
    .set("GENERAL","GENERAL");

  public doctors_name = "REFERRAL WEB";
  public doctors_pic = "referalweb/assets/referal-logo1.png";

  constructor(private route:ActivatedRoute, private router:Router){
    this.specialization = this.map.get(this.route.snapshot.params["specialty"]);
  }

  public nextPage(){
    console.log("navigate");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "name": this.doctors_name.toString(),
        "img": this.doctors_pic.toString()
      }
    }
    
    this.router.navigate(["patient"], navigationExtras);
  }

  public selectItem(name:String,img:String){
    this.doctors_name = name.toString();
    this.doctors_pic = img.toString();
  }
}