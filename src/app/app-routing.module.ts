import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "",
    component : DashboardComponent
  },
  {
    path : "productView",
    component : ProductViewComponent
  },
  {
    path : "productCreate",
    component : ProductCreateComponent
  },
  {
    path : "productEdit",
    component : ProductEditComponent
  },
  {
    path : "productList/productEdit/:id",
    component : ProductEditComponent
  },
  {
    path : "productList/productView/:id",
    component : ProductViewComponent
  },
  {
    path : "product/:id",
    component : ProductComponent
  },
  {
    path : "productList",
    component : ProductListComponent
  },
  {
    path : "user/:id",
    component : UserComponent
  },
  {
    path : "userCreate",
    component : UserCreateComponent
  },
  {
    path : "userList",
    component : UserListComponent
  },
  {
    path : "userEdit",
    component : UserEditComponent
  },
  {
    path : "userList/userEdit/:id",
    component : UserEditComponent
  },
  {
    path : "userList/userView/:id",
    component : UserViewComponent
  },
  {
    path : "userView",
    component : UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
