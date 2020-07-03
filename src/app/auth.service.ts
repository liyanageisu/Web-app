import { Injectable } from '@angular/core';
import { AdminNotifications } from '../app/components/models/notifications';
import { Observable } from "rxjs";
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";

@Injectable()
export class AuthService {

  notificaitonsCollection: AngularFirestoreCollection<AdminNotifications>
  notifications: Observable<AdminNotifications[]>

  constructor(public afs: AngularFirestore) { 
    this.notifications = this.afs.collection('AdminNotifications').valueChanges();

  }

  getNotifications(){
    return this.notifications;
  }
}

