import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { DetailsInventoryComponent } from './components/details-inventory/details-inventory.component';
import { ListInventoryComponent } from './components/list-inventory/list-inventory.component';

const routes: Routes = [
  {path: '', redirectTo: 'inventorys', pathMatch: 'full'},
  {path: 'inventorys', component: ListInventoryComponent},
  {path: 'inventoys/:id', component: DetailsInventoryComponent},
  {path: 'add', component: AddInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
