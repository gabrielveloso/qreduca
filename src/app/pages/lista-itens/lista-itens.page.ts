import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.page.html',
  styleUrls: ['./lista-itens.page.scss'],
})
export class ListaItensPage implements OnInit {
  public itemSubscription: Subscription;
  public itens = new Array<Item>();

  constructor(private itemService: ItemService) {
    this.itemSubscription = this.itemService.getItens().subscribe(data =>{
      this.itens = data
    })
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.itemSubscription.unsubscribe();
  }

}
