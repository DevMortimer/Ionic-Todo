import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ModalController,
} from '@ionic/angular/standalone';
import { AddTodoComponentComponent } from '../add-todo-component/add-todo-component.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class HomePage {
  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '30-06-24',
      itemPriority: 'high',
      itemCategory: 'Work',
    },
    {
      itemName: 'Take a walk in nature',
      itemDueDate: 'Today',
      itemPriority: 'medium',
      itemCategory: 'Self-Care',
    },
    {
      itemName: 'Pick up groceries',
      itemDueDate: 'Tomorrow',
      itemPriority: 'medium',
      itemCategory: 'Errands',
    },
    {
      itemName: 'Learn a new recipe',
      itemDueDate: 'This weekend',
      itemPriority: 'low',
      itemCategory: 'Personal',
    },
    {
      itemName: 'Pay bills',
      itemDueDate: '05-07-24',
      itemPriority: 'high',
      itemCategory: 'Finances',
    },
  ];
  today = Date.now();

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddTodoComponentComponent,
    });
    return await modal.present();
  }

  constructor(public modalController: ModalController) {}
}
