import { Component, Input } from "@angular/core";
import { InputToDoComponent } from "../InputToDo/InputToDo.component";
import { TaskComponent } from "../Task/Task.component";

@Component({
    selector: "app-main-to-do",
    templateUrl: "./MainToDo.component.html",
    styleUrls: ["./MainToDo.component.css"],
    imports: [InputToDoComponent,TaskComponent],
})
export class MaintoDoComponent {
}