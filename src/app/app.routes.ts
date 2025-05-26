import { Routes } from "@angular/router";
import { ToDoComponent } from "./pages/to-do-list/to-do-list.component";
import { DisplayDataBaseComponent } from "./pages/display-data-base/display-data-base.component";

const route : Routes = [
    {
        path: "",
        title: "to do list",
        pathMatch: "full",
        component: ToDoComponent,
    },

    {
        path : "display-data-base",
        title: "display data base",
        pathMatch: "full",
        component: DisplayDataBaseComponent,
    }

]

export default route;