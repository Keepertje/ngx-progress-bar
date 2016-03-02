# ng2-progress-bar

Simple progress bar control for your angular2 applications using bootstrap3.
Does not depend of jquery or bootstrap.js.

## Installation

`npm install ng2-progress-bar --save`

## Usage

```typescript
<progress-bar [value]="50" [max]="100"></progress-bar>
```

## Sample

```typescript
import {Component} from "angular2/core";
import {ProgressBar} from "ng2-progress-bar/ProgressBar";

@Component({
    selector: "app",
    template: `
    <div class="container">
        <progress-bar [value]="50" [max]="100"></progress-bar>
    </div>
    `,
    directives: [ProgressBar]
})
export class App {

}
```

## Samples

Take a look on samples in [./sample](https://github.com/pleerock/ng2-progress-bar/tree/master/sample) for more examples of
usages.
