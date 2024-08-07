import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  ModalController,
  IonModal,
  IonContent,
  IonInput,
  IonItem,
  IonListHeader,
  IonList,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonCol, IonRow, IonGrid
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-todo-component',
  templateUrl: './add-todo-component.component.html',
  styleUrls: ['./add-todo-component.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol,
    IonDatetime,
    IonList,
    IonListHeader,
    IonItem,
    IonInput,
    IonContent,
    IonModal,
    IonButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonSelect,
    IonSelectOption,
    FormsModule,
  ],
})
export class AddTodoComponentComponent {
  description: string = '';
  category: string = '';
  priority: string = '';
  date: number = Date.now();

  dismiss() {
    this.modalController.dismiss(null, 'dismiss');
  }

  confirm() {
    console.log(this.description);
    console.log(this.category);
    console.log(this.priority);
    console.log(this.date);

    if (
      this.description.trim() == '' ||
      this.category.trim() == '' ||
      this.priority.trim() == ''
    ) {
      return;
    }

    const data = {
      itemName: this.description,
      itemDueDate: this.date.toString(),
      itemPriority: this.priority,
      itemCategory: this.category,
      done: false
    }

    this.modalController.dismiss(data, 'confirm');
  }

  constructor(public modalController: ModalController) { }
}
