import {NgModule} from "@angular/core"
import {NavComponent} from "./nav.component"
import {CommonModule} from "@angular/common"

@NgModule({
    imports:[CommonModule],
    declarations:[NavComponent],
    entryComponents:[NavComponent],
    exports:[NavComponent]
})

export class NavModule{}