import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CloseSession } from '../../../auth/state/auth.actions';

@Component({
  selector: 'layout-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  @Output() topBarClicked = new EventEmitter<any>();

  constructor(
    private store: Store
  ) {}

  emitEvent(){
    this.topBarClicked.emit()
  }

  closeSession(){
    this.store.dispatch( CloseSession() )
  }
}
