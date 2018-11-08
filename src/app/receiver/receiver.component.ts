import {Component, Renderer2} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'receiver',
  styleUrls: ['./receiver.component.css'],
  templateUrl: './receiver.component.html'
})
export class ReceiverComponent {

  public doctors_name = "REFERRAL WEB";
  public doctors_pic = "referalweb/assets/referal-logo1.png";

  constructor(private router: Router, private renderer2: Renderer2){}

  // pass the .net api call to doctors

  doctors: any[] = [
    {
      "ID" : "1",
      "specialty" : "ORTHO",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "search",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "2",
      "specialty" : "ENDO",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "3",
      "specialty" : "PEDO",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "4",
      "specialty" : "PATH",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "5",
      "specialty" : "OTHERS",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "6",
      "specialty" : "ORAS S",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "7",
      "specialty" : "PERIO",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "8",
      "specialty" : "PROS",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "9",
      "specialty" : "GENERAL",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "10",
      "specialty" : "OTHERS",
      "name" : "Cody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    }
  ];

  dentals: any[] = [
    {
      "ID" : "1",
      "specialty" : "ORTHO",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "2",
      "specialty" : "ENDO",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "3",
      "specialty" : "PEDO",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "4",
      "specialty" : "PATH",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "5",
      "specialty" : "OTHERS",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "6",
      "specialty" : "ORAS S",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "7",
      "specialty" : "PERIO",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "8",
      "specialty" : "PROS",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "9",
      "specialty" : "GENERAL",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "10",
      "specialty" : "OTHERS",
      "name" : "DCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    }
  ];

  others: any[] = [
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
      "specialty" : "PATH",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "5",
      "specialty" : "OTHERS",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "6",
      "specialty" : "ORAS S",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "7",
      "specialty" : "PERIO",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "8",
      "specialty" : "PROS",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "9",
      "specialty" : "GENERAL",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    },
    {
      "ID" : "10",
      "specialty" : "OTHERS",
      "name" : "OCody Wilson",
      "address" : "Wilson & Whetten Cedar City, Ut",
      "url" : "#",
      "image" : "referalweb/assets/placeholder.png"
    }
  ];

  results: any[] = this.dentals;

  selectDoctor(docname:String, docpic:String){
    this.doctors_name = docname.toString();
    this.doctors_pic = docpic.toString();
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

  clickDentals(event:any){
    this.results = this.dentals;
    for(let i = 0; i < event.path[1].children.length; i++){
      this.renderer2.removeClass(event.path[1].children[i],"active");
    }
    this.renderer2.addClass(event.target, "active");
  }

  clickOthers(event:any){
    this.results = this.others;
    for(let i = 0; i < event.path[1].children.length; i++){
      this.renderer2.removeClass(event.path[1].children[i],"active");
    }
    this.renderer2.addClass(event.target, "active");
  }

  clickDoctors(event:any){
    this.results = this.doctors;
    for(let i = 0; i < event.path[1].children.length; i++){
      this.renderer2.removeClass(event.path[1].children[i],"active");
    }
    this.renderer2.addClass(event.target, "active");
  }
}
