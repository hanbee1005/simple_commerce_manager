import {RouterModule, Routes} from '@angular/router';
import {CategoryManagementComponent} from './category-management/category-management.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'category-link', component: CategoryManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
