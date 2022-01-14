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
    description: '',
    published: false
  };

  submitted = false;

  constructor(private inventoryService: InventoryService) {   }

  ngOnInit(): void {
  
  }

  saveInventory(){
    const data = {
      title: this.inventory.title,
      description: this.inventory.description
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

  newInventory(){
    this.submitted = false;
    this.inventory ={
      title: this.inventory.title,
      description: this.inventory.description,
      published: false
    }
  }

}
