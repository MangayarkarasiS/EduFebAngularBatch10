import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { CFormArrayComponent } from './cform-array/cform-array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { ColorComponent } from './color/color.component';
import { ColorChildComponent } from './color/color-child/color-child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HoverHighlightComponent } from './custom-directive/hover-highlight/hover-highlight.component';
import { MoverHighlightDirective } from './customDirective/mover-highlight.directive';
import { ExpoPipe } from './custom-pipe/expo.pipe';
import { NumberListComponent } from './number-list/number-list.component';
import { CubePipe } from './custom-pipe/cube.pipe';
import { FilterListPipe } from './custom-pipe/filter-list.pipe';
import { StudentService } from './service/student.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { StudentViewHttpComponent } from './student/student-view-http/student-view-http.component';
import { StudentDeleteHttpComponent } from './student/student-delete-http/student-delete-http.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HeaderComponent,
    TitleComponent,
    CFormArrayComponent,
    CounterComponent,
    ColorComponent,
    ColorChildComponent,
    LifeCycleComponent,
    TodoAnimationComponent,
    StudentListComponent,
    HoverHighlightComponent,
    MoverHighlightDirective,
    ExpoPipe,
    NumberListComponent,
    CubePipe,
    FilterListPipe,
    ObservableDemoComponent,
    StudentListHttpComponent,
    StudentViewHttpComponent,
    StudentDeleteHttpComponent,
    ErrorComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

