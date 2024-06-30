import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonList,
  IonFab,
  IonIcon,
  IonFabButton,
  IonListHeader,
  IonButtons,
  IonModal,
  ModalController, IonCheckbox
} from '@ionic/angular/standalone';
import { AddTodoComponentComponent } from '../add-todo-component/add-todo-component.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCheckbox,
    IonModal,
    IonButtons,
    IonListHeader,
    IonFabButton,
    IonIcon,
    IonFab,
    IonList,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonButton,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    CommonModule,
    IonLabel,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    FormsModule
  ],
})
export class HomePage {
  todoList: Array<{ itemName: string; itemDueDate: string; itemPriority: string; itemCategory: string, done: boolean }> = [];
  today = Date.now();

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddTodoComponentComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data && dataReturned.role == "confirm") {
        const newItem = dataReturned.data;
        this.todoList.unshift(newItem);
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
      }
    });

    return await modal.present();
  }

  toggleDoneStatus(item: any): void {
    const index = this.todoList.findIndex(todo => todo.itemName === item.itemName);

    if (index !== -1) {
      this.todoList[index].done = !this.todoList[index].done;
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  }

  constructor(public modalController: ModalController) {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      this.todoList = JSON.parse(storedList);
    }
  }
}
