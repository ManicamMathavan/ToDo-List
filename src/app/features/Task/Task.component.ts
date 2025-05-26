import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "../../core/model/task.model";
@Component({
    selector: "app-task",
    templateUrl: "./Task.component.html",
    styleUrls: ["./Task.component.css"],
})
export class TaskComponent {
    @Input() task: Task | null=null
    @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();
    delete() {
            this.deleteTask.emit(this.task?.id);
    }
    toggleCompletion() {
           this.task!.completed = !this.task!.completed;
    }
}