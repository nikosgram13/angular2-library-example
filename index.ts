import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestComponent} from "./src/components/test.component";


export * from "./src/components/test.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TestComponent
    ],
    exports: [
        TestComponent
    ]
})
export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: []
        };
    }
}
