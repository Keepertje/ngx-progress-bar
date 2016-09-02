import {Component, Input, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: "progress-bar",
    template: `
<div class="progress">
    <div class="progress-bar"
        role="progressbar"
        [attr.aria-valuenow]="getProgress()"
        aria-valuemin="0"
        [attr.aria-valuemax]="getProgress()" [ngStyle]="{ width: getProgress() + '%' }">
        <span [hidden]="!title" class="progress-bar-title">{{ title }}</span>
        <span class="sr-only">{{ getProgress() }}% Complete</span>
    </div>
</div>
`
})
export class ProgressBar {

    @Input()
    value = 0;

    @Input()
    max = 100;

    @Input()
    title: string;

    getProgress() {
        if (this.max === 0)
            return 0;

        return this.value / this.max * 100;
    }

}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProgressBar
    ],
    exports: [
        ProgressBar
    ]
})
export class ProgressBarModule {

}