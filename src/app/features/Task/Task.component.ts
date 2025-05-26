import { Component, Input } from "@angular/core";

@Component({
    selector: "app-task",
    templateUrl: "./Task.component.html",
    styleUrls: ["./Task.component.css"],
})
export class TaskComponent {
    @Input() task: String = ""
}