import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {ProgressBar} from "../../src/ProgressBar";

@Component({
    selector: "app",
    template: `
<div class="container">
    <progress-bar [value]="50"></progress-bar>
</div>
`,
    directives: [ProgressBar]
})
export class Sample1App {

}

bootstrap(Sample1App);