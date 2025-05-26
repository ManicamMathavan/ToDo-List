import { Component, effect, inject } from "@angular/core";
import { InjectService } from "../../data/inject.service";

@Component({
  selector: "app-home",
  template: `
    @for(user of users(); track $index) {
      <p>{{ user }}</p>
    }
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
  `,
  imports: []
})
export default class HomeComponent {
  private service = inject(InjectService)
  users=this.service.users

  constructor() {
    this.service.getHttpData().subscribe()

  effect(() => {
    console.log('Users updated:', this.users());
  })
  }
  
}
