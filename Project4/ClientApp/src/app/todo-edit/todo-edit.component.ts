import { Component, OnInit } from "@angular/core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  NgbActiveModal,
  NgbDateStruct,
  NgbTimeStruct,
} from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";
import { TodoCustom } from "../todo-management/todo-custom";
import { TodoManagementService } from "../todo-management/todo-management.service";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"],
})
export class TodoEditComponent implements OnInit {
  faCalendar = faCalendar;
  dueDate: NgbDateStruct;
  dueTime: NgbTimeStruct;
  todo: TodoCustom;

  constructor(
    public activeModal: NgbActiveModal,
    private mgmtService: TodoManagementService
  ) {}

  ngOnInit() {
    this.todo = new TodoCustom();
    this.dueTime = { hour: 12, minute: 30, second: 0 };
  }

  save() {
    const dueDate = new Date(
      this.dueDate.year,
      this.dueDate.month - 1,
      this.dueDate.day,
      this.dueTime.hour,
      this.dueTime.minute,
      0,
      0
    );
    const utcDate = moment(dueDate).utc();
    this.todo.dueDate = utcDate.toDate();
    this.mgmtService.save(this.todo).subscribe(() => {
      this.activeModal.close();
    });
  }
}
