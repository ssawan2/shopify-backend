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
  title= ''
  
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


  currentSelectedInventory(item, index){
    console.log("hello")
    console.log(item)
    console.log(index)
    this.currentItem = item;
    this.currentIndex = index;
  }
}
