import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoading2Component } from './lazy-loading2.component';

const routes: Routes = [{ path: '', component: LazyLoading2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoading2RoutingModule { }
