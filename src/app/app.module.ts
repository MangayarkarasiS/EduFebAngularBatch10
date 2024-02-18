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
    MoverHighlightDirective
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

