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
    this.listInventory();

  }

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

  refreshList() {
    this.listInventory();
    this.currentItem = null;
    this.currentIndex = -1;
  }

  searchByTitle():void{
    this.currentIndex =-1;
    this.currentItem = {};

    console.log("getTitle: "+ this.title)

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

  currentSelectedInventory(item, index){
    console.log("hello")
    console.log(item)
    console.log(index)
    this.currentItem = item;
    this.currentIndex = index;
  }

  getBrand(){
    console.log("getBrand: "+this.brand)
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

