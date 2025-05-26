import { Component } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
//   styleUrls: ["./button.component.css"],    
})
export class ButtonComponent {
    isLoading = false;
    tab=[1,2,3,4,5,6,7,8,9,10];
}