import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {

  inventorys: any;
  currentItem = null;
  currentIndex = -1;
  title= '';
  brand='';
  description='';
  quantity ='';
  
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    //will load this first 
    this.listInventory();
  }

  //to list all the inventory items
  listInventory(){
    this.inventoryService.getAll()
    .subscribe(
      data => {
        this.inventorys = data;
        console.log(data)
      },
      error =>{
        console.log(error);
      }
    )
  }

  //to refresh 
  refreshList() {
    this.listInventory();
    this.currentItem = null;
    this.currentIndex = -1;
  }

  //Filter by title 
  searchByTitle():void{
    this.currentIndex =-1;
    this.currentItem = {};

    this.inventoryService.findByTitle(this.title)
    .subscribe(
      data =>{
        this.inventorys = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

  //retreving the current selected item 
  currentSelectedInventory(item, index){
    this.currentItem = item;
    this.currentIndex = index;
  }

  //filtering by brand 
  getBrand(){
    this.currentIndex =-1;
    this.currentItem = {};

    this.inventoryService.find(this.brand)
    .subscribe(
      data =>{
        this.inventorys = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

  //filtering by description 
  getDescription(){
    this.currentIndex =-1;
    this.currentItem = {};

    this.inventoryService.findByDescription(this.description)
    .subscribe(
      data =>{
        this.inventorys = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

  //filtering by quantity 
  getQuantity(){
    this.currentIndex =-1;
    this.currentItem = {};

    this.inventoryService.findByQuantity(this.quantity)
    .subscribe(
      data =>{
        this.inventorys = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }
}

