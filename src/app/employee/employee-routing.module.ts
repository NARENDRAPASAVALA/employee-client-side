import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path :'', redirectTo:'display', pathMatch: 'full'},
  {path : 'display', component: DisplayComponent},
  {path : 'create' , component : CreateComponent},
  {path : 'update/:id', component : UpdateComponent},
  {path : 'details/:id', component : DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
