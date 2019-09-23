import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../interfaces/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemCollections: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemCollections = this.afs.collection<Item>('Products');
   }


   getItens(){
     return this.itemCollections.snapshotChanges().pipe(
      map((actions: any) => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
     );
   }

   getItem(id: string){      
      return this.itemCollections.doc<Item>(id).valueChanges();
   }

   addItem(item: Item){
      return this.itemCollections.add(item);
   }

   

   
}
