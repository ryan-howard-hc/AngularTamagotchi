import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  tamagotchiName: string = 'My Tamagotchi';
  happinessLevel: number = 100;

  feedTamagotchi() {
    //feeding logic...
    this.happinessLevel += 10;
  }

  playWithTamagotchi() {
    //playing logic....
    this.happinessLevel += 20;
  }
}