## TamagotchiComponent

### Properties
- `tamagotchiName: string = 'My Tamagotchi'`
- `happinessLevel: number = 100`
- `isAlive: boolean = true`

### Methods
#### `ngOnInit()`
- Initialize Tamagotchi when the component is loaded.
- Call `startTamagotchiTimer()`.

#### `feedTamagotchi()`
- If Tamagotchi is alive, increase `happinessLevel` by 10.

#### `playWithTamagotchi()`
- If Tamagotchi is alive, increase `happinessLevel` by 20.

#### `startTamagotchiTimer()`
- Set up a timer to update Tamagotchi's state over time.
- Within the timer:
  - If Tamagotchi is alive:
    - Decrease `happinessLevel` by 5.
    - Check if `happinessLevel` is less than or equal to 0, set `isAlive` to false.

### Template (tamagotchi.component.html)
```html
<div>
  <h1>{{ tamagotchiName }}</h1>
  <p *ngIf="isAlive">Happiness Level: {{ happinessLevel }}</p>
  <p *ngIf="!isAlive">Your Tamagotchi is no longer alive.</p>

  <button (click)="feedTamagotchi()">Feed Tamagotchi</button>
  <button (click)="playWithTamagotchi()">Play with Tamagotchi</button>
</div>
