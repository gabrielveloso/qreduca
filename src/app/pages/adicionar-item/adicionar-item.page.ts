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

  constructor(private itemService: ItemService) {    
  }

  ngOnInit() {
  }

  async saveItem(){
    await this.itemService.addItem(this.item);
  }

}