import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() data: any;

  onCloseModal(): void {
    this.data = null;
  }
  ngOnInit(): void {
    console.log('init');
    
  }

}
