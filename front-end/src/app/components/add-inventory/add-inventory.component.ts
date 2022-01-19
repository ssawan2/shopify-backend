import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  inventory ={
    title: '',
    brand:'',
    description: '',
    quantity: ''
  };

  submitted = false;

  constructor(private inventoryService: InventoryService) {   }

  ngOnInit(): void {
  }

  //to save 
  saveInventory(){
    const data = {
      title: this.inventory.title,
      brand: this.inventory.brand,
      description: this.inventory.description,
      quantity: this.inventory.quantity
    }

    this.inventoryService.create(data)
      .subscribe(
        response =>{
          console.log(response);
          this.submitted =true;
        },
        error =>{
          console.log(error);
        }

    )
    console.log(data)
  }

  //to add new inventory 
  newInventory(){
    this.submitted = false;
    this.inventory ={
      title: this.inventory.title,
      brand: this.inventory.brand,
      description: this.inventory.description,
      quantity: this.inventory.quantity
    }
  }

}
