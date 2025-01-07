import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  showOverlay = false;
  selectedImage = '';

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.showOverlay = true; 
  }
close(){
  this.showOverlay=false
}
}
