import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-details-inventory',
  templateUrl: './details-inventory.component.html',
  styleUrls: ['./details-inventory.component.css']
})
export class DetailsInventoryComponent implements OnInit {

  currentItem =  null;
  message ='';

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getItem(this.route.snapshot.paramMap.get('id'))

  }

  //getting the information for a single item by idea
  getItem(id){
    this.inventoryService.get(id)
    .subscribe(
      data => {
        this.currentItem = data;
        console.log(data);
      },
      error =>{
        console.log(error)
      }
    )
  }

  //updating a single item 
  updateItem(){
    this.inventoryService.update(this.currentItem._id, this.currentItem)
    .subscribe(
      response =>{
        console.log(response);
        this.message = 'successfully updated :)'
      },
      error =>{
        console.log(error)
      }
    )
  }

  //deleting a single item 
  deleteItem(){
    this.inventoryService.delete(this.currentItem._id)
    .subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['inventorys'])
      },
      error=>{
        console.log(error)
      }
    )
  }

}
