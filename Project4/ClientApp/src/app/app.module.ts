import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TodoManagementComponent } from "./todo-management/todo-management.component";
import { TodoEditComponent } from "./todo-edit/todo-edit.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TodoManagementComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: "", component: TodoManagementComponent, pathMatch: "full" },
      { path: "counter", component: CounterComponent },
      { path: "fetch-data", component: FetchDataComponent },
      { path: "home", component: HomeComponent },
    ]),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TodoEditComponent],
})
export class AppModule {}
