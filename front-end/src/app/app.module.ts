import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { DetailsInventoryComponent } from './components/details-inventory/details-inventory.component';
import { ListInventoryComponent } from './components/list-inventory/list-inventory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddInventoryComponent,
    DetailsInventoryComponent,
    ListInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
