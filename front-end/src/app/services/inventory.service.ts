import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080/api/inventorys/'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  //Get request call to get all the inventory items 
  getAll(){
    return this.http.get(baseUrl);
  }

  //Post request call to create a new inventory item 
  create(data){
    console.log(data)
    return this.http.post(baseUrl, data);
  }

  //Put request to update an exiting item 
  update(id, data){
    return this.http.put(`${baseUrl}/${id}`,data)
  }

  //Delete request to delete a single item 
  delete(id){
    return this.http.delete(`${baseUrl}/${id}`)
  }

  //Get request to get a single item
  get(id){
    return this.http.get(`${baseUrl}/${id}`)
  }

  //Get request to filter by item 
  findByTitle(title){
    return this.http.get(`${baseUrl}?title=${title}`)
  }

  //Get request to filter by brand
  find(brand){
    return this.http.get(`${baseUrl}brand/${brand}`)
  }

  //Get request to filter by description 
  findByDescription(description){
    return this.http.get(`${baseUrl}description/${description}`)
  }

  //Get request to filter by quantity 
  findByQuantity(quantity){
    return this.http.get(`${baseUrl}quantity/${quantity}`)
  }
}
