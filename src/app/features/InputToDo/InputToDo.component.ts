import { Component, ElementRef, ViewChild, viewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TaskComponent } from "../Task/Task.component";
@Component({
    selector: "app-input-to-do",
    templateUrl: "./InputToDo.component.html",
    styleUrls: ["./InputToDo.component.css"],
    imports: [FormsModule],
})

export class InputToDoComponent {
    input_value : String = "";
    @ViewChild ("input_to_do") monRef! : ElementRef

    constructor() {
        
    }

    ngAfterViewInit() {
        console.log(this.monRef.nativeElement.getBoundingClientRect());
        console.log(5)
    }
}