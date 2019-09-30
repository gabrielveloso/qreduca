import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalhamento-item',
  templateUrl: './detalhamento-item.page.html',
  styleUrls: ['./detalhamento-item.page.scss'],
})
export class DetalhamentoItemPage implements OnInit {
  private itemId: string = null;
  public item: Item = {};
  private itemSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, 
    private itemService: ItemService) { 
    this.itemId = this.activatedRoute.snapshot.params['id'];

    if (this.itemId) this.loadItem();
  }

  ngOnInit() {
  }

  loadItem() {
    this.itemSubscription = this.itemService.getItem(this.itemId).subscribe(data => {
      this.item = data;
    });
  }

}
