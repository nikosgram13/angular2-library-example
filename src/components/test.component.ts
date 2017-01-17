import {Component} from "@angular/core"

@Component({
    selector: "test",
    template: `<p>Hello from library : {{_magicNumber}}</p> <button (click)="increment()">Increment</button>`
})
export class TestComponent {
    private _magicNumber: number  = 0;
    public increment() {
        this._magicNumber++;
        console.log(this._magicNumber);
    }
}