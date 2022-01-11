import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TodoEditComponent } from "../todo-edit/todo-edit.component";
import { TodoCustom } from "../todo-management/todo-custom";
import { TodoManagementService } from "../todo-management/todo-management.service";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  public todos: TodoCustom[];
  public temp: TodoCustom[];
  public tempCompleted: TodoCustom[];
  public todosComplete: TodoCustom[];
  public dataSource = new MatTableDataSource();
  public todo: TodoCustom;
  displayedColumns: string[] = [
    "name",
    "duedate",
    "types",
    "complete",
    "delete",
    "edit",
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private mgmtService: TodoManagementService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.mgmtService.get().subscribe((todos) => {
      this.temp = todos;
      // this.tempCompleted = todos;

      // TRYING TO FILTER COMPLETE TODOS

      for (let i = 0; i < this.temp.length; i++) {
        if (!this.temp[i].state) {
          this.temp.splice(i, 1);
        }
      }

      this.todos = this.temp;
      this.dataSource = new MatTableDataSource(this.todos);
      this.dataSource.sort = this.sort;
    });
  }

  add() {
    this.modalService.open(TodoEditComponent).result.then(() => {
      this.get();
    });
  }

  complete(todo: TodoCustom) {
    // TRYING TO GET THE STATE TOGGLE WORKING
    todo.state = true;

    // this.mgmtService.Put(todo).subscribe(() => {
    //   this.get();
    // });

    console.log(todo.state);
  }

  delete(todo: TodoCustom) {
    console.log(todo.id);
    this.mgmtService.delete(todo).subscribe(() => {
      this.get();
    });
  }

  edit(todo: TodoCustom) {
    // TRYING TO GET EDITING WORKING
    // this.modalService.open(TodoEditComponent).result.then(() => {
    //   this.get();
    // });
  }

  isLate(todo) {
    var todayDate = new Date();
    if (todo.dueDate < todayDate) {
      return true;
    }
    return false;
  }

  isClose(todo) {
    var todayDate = new Date();
    var twoDaysFromDueDate = new Date(todo.dueDate);
    twoDaysFromDueDate.setDate(todo.dueDate.getDate() - 2);
    if (todayDate > twoDaysFromDueDate) {
      return true;
    }
    return false;
  }

  editTodo(todo) {
    console.log(todo);
    this.edit(todo);
  }

  applyFilter(filterString: string) {
    this.dataSource.filter = filterString.trim().toLowerCase();
  }
}
