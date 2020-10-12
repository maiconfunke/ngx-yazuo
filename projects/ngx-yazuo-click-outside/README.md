# NgxYazuoClickOutside

## Installation

`npm install --save ngx-yazuo-click-outside`

## Usage

### Module:

Import `NgxYazuoClickOutside` from `ngx-yazuo-click-outside`

```ts
import { NgxYazuoClickOutsideModule } from 'ngx-yazuo-click-outside';

@NgModule({
  // ...
  imports: [
    NgxYazuoClickOutsideModule
  ]
  // ...
})
export class MyAppModule {}
```
### Markup

Use the **NgxYazuoClickOutsideDirective** passing the parameters **allowedClickedClasses** and **allowedClickedIds** for classes and id's to allow clicking, respectively.


```html
    <div class="content" (ngx-yazuo-click-outside)="outsideClicked()" [allowed-clicked-classes]="classesList" [allowed-clicked-ids]="idsList">
    </div>
```


### Component

```ts

@Component({
  // ...
})
export class AppComponent implements {

    classesList = ['class1', 'class2', 'class3'];
    idsList = ['id1', 'id2', 'id3'];


    constructor() {}

    outsideClicked() {
      // ...
    }
}
```