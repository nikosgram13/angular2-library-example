import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

// Entry point
import { AppComponent } from "./app/app.component";

// Library component
import {TestComponent} from "../components/test.component";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent, TestComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: 'main', component: TestComponent },
            { path: '**', redirectTo: 'main' }
        ])
    ]
})
export class AppModule {
}
