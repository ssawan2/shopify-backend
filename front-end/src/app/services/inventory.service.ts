import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080/api/inventorys/'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }

  create(data){
    console.log(data)
    return this.http.post(baseUrl, data);
  }

  update(id, data){
    return this.http.put(`${baseUrl}/${id}`,data)
  }

  delete(id){
    return this.http.delete(`${baseUrl}/${id}`)
  }

  get(id){
    return this.http.get(`${baseUrl}/${id}`)
  }

  findByTitle(title){
    return this.http.get(`${baseUrl}?title=${title}`)
  }

  find(brand){
    return this.http.get(`${baseUrl}brand/${brand}`)
  }

  findByDescription(description){
    return this.http.get(`${baseUrl}description/${description}`)
  }

  findByQuantity(quantity){
    return this.http.get(`${baseUrl}quantity/${quantity}`)
  }
}
