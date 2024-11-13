import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { selectCount } from './state/counter/counter.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  count$!: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }
}
