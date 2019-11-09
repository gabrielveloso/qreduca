import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-adicionar-item',
  templateUrl: './adicionar-item.page.html',
  styleUrls: ['./adicionar-item.page.scss'],
})
export class AdicionarItemPage implements OnInit {
  public item: Item = {};
  public itens: Item[] = [];

  constructor(private itemService: ItemService) {  
    this.itemService.getItens().subscribe(data =>{
      this.itens = data
    })  
  }

  ngOnInit() {
  }

  async saveItem(){
    if(this.item.id == undefined){
    await this.itemService.addItem(this.item);
    }else{
      await this.itemService.updateTodo(this.item, this.item.id);
    }
  }

  async remover(id){
    console.log("o id é "+ id)
    await this.itemService.removeTodo(id);
  }

  selecionar(id){
    this.itemService.getItem(id).subscribe((response: Item) => {
      console.log(response);
      this.item = response;
      this.item.id = id;
      console.log(id);
    });
  }

}