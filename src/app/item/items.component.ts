import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { BottomBar, LABEL_VISIBILITY, TabSelectedEventData } from 'nativescript-bottombar';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styles: [`
    BottomBar {
        inactive-tint-color: #ffffff;
        active-tint-color: #000000;
        bar-background-color: #df1a20;
    }
`]
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) {
        this.labelVisibility = LABEL_VISIBILITY.SELECTED;

     }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    private bottomBar: BottomBar;
    labelVisibility: LABEL_VISIBILITY;

    tabSelected(event: TabSelectedEventData) {
        console.dir(event);
    }

    barLoaded(event) {
        this.bottomBar = event.object;
    }
}