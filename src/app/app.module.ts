import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { DialogComponent } from './main-home/dialog/dialog.component';
import { MessageComponent } from './main-home/dialog/message/message.component';
import { QuestionsComponent } from './main-home/dialog/questions/questions.component';
import { QuestionComponent } from './main-home/dialog/questions/question/question.component';
import { SelectTabComponent } from './main-home/select-tab/select-tab.component';
import { AboutComponent } from './main-home/about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PixiComponent } from './main-home/pixi/pixi.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainResumeComponent } from './main-resume/main-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MessageComponent,
    QuestionsComponent,
    QuestionComponent,
    SelectTabComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PixiComponent,
    MainHomeComponent,
    MainResumeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
