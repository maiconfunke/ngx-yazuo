# NgxYazuoClickOutside

## How to use it
Import **NgxYazuoClickOutside** in the root module of your app.

```ts
import { NgxYazuoClickOutsideModule } from '@fluig-tools-lib/ngx-styleguide';

@NgModule({
  // ...
  imports: [
    NgxYazuoClickOutsideModule
  ]
  // ...
})
export class MyAppModule {}
```

Use the **NgxYazuoClickOutsideDirective** passing the parameters **allowedClickedClasses** and **allowedClickedIds** for classes and id's to allow clicking, respectively.


```html
    <div class="content" (ngx-yazuo-click-outside)="outsideClicked()" [allowed-clicked-classes]="classesList" [allowed-clicked-ids]="idsList">
    </div>
```

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