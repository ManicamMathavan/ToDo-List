import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-header",
    template: `
<label for="framework">
  <form [formGroup]="profileForm">
    Favorite Framework:
    <p>{{ profileForm.value.username }}'s favorite framework: {{ favoriteFramework }}</p>
    <input id="framework" type="text" formControlName="username"/>
      Favorite Framework:
    <p>age : {{ profileForm.value.age }}</p>
    <input id="framework" type="email" formControlName="age"/>
  </form>
  <button (click)="boom()" [disabled]="!profileForm.valid">coucou</button>
</label>
    `,
    imports : [ReactiveFormsModule]
})
export default class HeaderComponent {
 profileForm : FormGroup = new FormGroup({
  username : new FormControl("", Validators.required),
  age : new FormControl("25", [Validators.required, Validators.email]),
 });

 boom(){
  console.log("zebi")
  alert("boom");
 }

  favoriteFramework = "Angular";

}
