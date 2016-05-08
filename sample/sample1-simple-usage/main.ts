import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {ProgressBar} from "../../src/index";

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