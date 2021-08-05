import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoading2RoutingModule } from './lazy-loading2-routing.module';
import { LazyLoading2Component } from './lazy-loading2.component';


@NgModule({
  declarations: [
    LazyLoading2Component
  ],
  imports: [
    CommonModule,
    LazyLoading2RoutingModule
  ]
})
export class LazyLoading2Module { }
