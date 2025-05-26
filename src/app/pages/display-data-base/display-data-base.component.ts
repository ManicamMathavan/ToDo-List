import { Component, inject } from "@angular/core";
import { UsersService } from "../../core/services/users.service";
import { User } from "../../core/model/user.model";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-display-data-base",
    templateUrl: "./display-data-base.component.html",
    styleUrls: ["./display-data-base.component.css"],
    imports: [RouterLink],
})
export class DisplayDataBaseComponent {
    users_data = inject(UsersService);
    users  = this.users_data.users;
    constructor() {
        this.users_data.fetchUsersData().subscribe()
    }
}