import { Component, ViewChild } from "@angular/core";
import { Task } from "../../core/model/task.model";
import { InputToDoComponent } from "../../features/InputToDo/InputToDo.component";
import { TaskComponent } from "../../features/Task/Task.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-to-do",
    templateUrl: "./to-do-list.component.html",
    styleUrls: ["./to-do-list.component.css"],
    imports: [InputToDoComponent,TaskComponent,RouterLink],
})
export class ToDoComponent {
    @ViewChild(InputToDoComponent) inputToDo!: InputToDoComponent;
    tasks: Task[]=[]
    
    ngAfterViewInit(){
        this.tasks= this.inputToDo.tasks;
    }


    deleteTask(id: number) {
        const index_to_remove= this.tasks.findIndex((task) => task.id == id);
        this.tasks.splice(index_to_remove, 1);
    }
    
}