import { Component } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "black-dashboard-angular";
  constructor(db: AngularFirestore)
{}}
