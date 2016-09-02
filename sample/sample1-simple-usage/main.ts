import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ProgressBarModule} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">
    
    Simple progress bar:<br/>
    <progress-bar [value]="50"></progress-bar><br/><br/>
    
    Progress bar with title:<br/>
    <progress-bar [value]="10" title="Hello progress bar"></progress-bar>
</div>
`
})
export class Sample1App {

}

@NgModule({
    imports: [
        BrowserModule,
        ProgressBarModule
    ],
    declarations: [
        Sample1App
    ],
    bootstrap: [
        Sample1App
    ]
})
export class Sample1Module {

}

platformBrowserDynamic().bootstrapModule(Sample1Module);