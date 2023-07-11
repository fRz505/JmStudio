import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JmStudio';
  selectedItem = null;
  setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  
}


