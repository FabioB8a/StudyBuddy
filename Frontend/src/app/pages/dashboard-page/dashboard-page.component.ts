import { Component } from '@angular/core';
import {SidebarComponent} from "../../global/sidebar/sidebar.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    SidebarComponent,
    NgOptimizedImage
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
