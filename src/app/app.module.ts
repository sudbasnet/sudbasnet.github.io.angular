import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { MessageComponent } from './dialog/message/message.component';
import { QuestionsComponent } from './dialog/questions/questions.component';
import { QuestionComponent } from './dialog/questions/question/question.component';
import { SelectTabComponent } from './select-tab/select-tab.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MessageComponent,
    QuestionsComponent,
    QuestionComponent,
    SelectTabComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
