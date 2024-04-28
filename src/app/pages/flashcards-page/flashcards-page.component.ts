import { Component } from '@angular/core';
import {SidebarComponent} from "../../global/sidebar/sidebar.component";
import {NgOptimizedImage} from "@angular/common";
import { TopbarComponent } from '../../global/topbar/topbar.component';

@Component({
  selector: 'app-flashcards-page',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    NgOptimizedImage
  ],
  templateUrl: './flashcards-page.component.html',
  styleUrl: './flashcards-page.component.css'
})
export class FlashcardsPageComponent {

}
