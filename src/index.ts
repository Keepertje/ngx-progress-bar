import {Component, Input} from "@angular/core";

@Component({
    selector: "progress-bar",
    template: `
<div class="progress">
    <div class="progress-bar"
        role="progressbar"
        [attr.aria-valuenow]="getProgress()"
        aria-valuemin="0"
        [attr.aria-valuemax]="getProgress()" [ngStyle]="{ width: getProgress() + '%' }">
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

    getProgress() {
        if (this.max === 0)
            return 0;

        return this.value / this.max * 100;
    }

}