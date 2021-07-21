/*
 * @Author: your name
 * @Date: 2021-07-20 10:38:36
 * @LastEditTime: 2021-07-20 11:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-angular\src\app\app.module.ts
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgModel } from '@angular/forms';

//双向数据绑定
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AbentComponent } from './components/abent/abent.component';
import { AbterComponent } from './components/abter/abter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbentComponent,
    AbterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
