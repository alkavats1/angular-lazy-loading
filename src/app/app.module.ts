import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes} from "@angular/router";
import {LazyLoading2Module} from "./lazy-loading2/lazy-loading2.module";

const routes: Routes = [
  {
    path: 'lazy-loading',
    loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
  },
  {
    path: 'lazy-loading2',
    loadChildren: () => import('./lazy-loading2/lazy-loading2.module').then(m => m.LazyLoading2Module)
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
