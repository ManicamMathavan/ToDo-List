import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Task } from "../../core/model/task.model";
@Component({
    selector: "app-input-to-do",
    templateUrl: "./InputToDo.component.html",
    styleUrls: ["./InputToDo.component.css"],
    imports: [FormsModule],
})

export class InputToDoComponent {
    input_value : string = "";
    tasks : Task[] = [];
    id : number = 0;
    addTask() {
        if (this.input_value.trim() !== "") {
            this.tasks.push({
                id: this.id++,
                title: this.input_value,
                completed: false
            });
            this.input_value = "";
        }
    }
}