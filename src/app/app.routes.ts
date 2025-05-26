import { Routes } from "@angular/router";
import { MaintoDoComponent } from "./features/MainToDo/MainToDo.component";
import { InputToDoComponent } from "./features/InputToDo/InputToDo.component";

const route : Routes = [
    {
        path: "",
        title: "to do list",
        pathMatch: "full",
        component: MaintoDoComponent,
    },

]

export default route;