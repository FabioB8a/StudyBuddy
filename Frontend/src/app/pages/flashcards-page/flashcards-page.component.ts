import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  // Datos de las flashcards

  flashcards = [
    { title: 'Flashcard 1', frontText: 'Texto de la cara delantera 1', backText: 'Texto de la cara trasera 1' },
    { title: 'Flashcard 2', frontText: 'Texto de la cara delantera 2', backText: 'Texto de la cara trasera 2' },
    { title: 'Flashcard 3', frontText: 'Texto de la cara delantera 3', backText: 'Texto de la cara trasera 3' },
    { title: 'Flashcard 4', frontText: 'Texto de la cara delantera 4', backText: 'Texto de la cara trasera 4' },
    { title: 'Flashcard 5', frontText: 'Texto de la cara delantera 5', backText: 'Texto de la cara trasera 5' },
    { title: 'Flashcard 6', frontText: 'Texto de la cara delantera 6', backText: 'Texto de la cara trasera 6' }
  ];

  // Flip de la flashcard

  flipped: boolean = false;

  toggleFlip() {
    console.log("Card Flipped")
    this.flipped = !this.flipped;
  }

  nextCard() {
    // TO-DO
    console.log("Next card")
  }



  // Botones clickeados

  btnVolume() {
    alert("Btn Volumen Clickeado")
  }

  btnPencil() {
    alert("Btn Pencil Clickeado")
  }


}
