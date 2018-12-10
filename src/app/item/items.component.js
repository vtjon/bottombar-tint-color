"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        this.labelVisibility = nativescript_bottombar_1.LABEL_VISIBILITY.SELECTED;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.tabSelected = function (event) {
        console.dir(event);
    };
    ItemsComponent.prototype.barLoaded = function (event) {
        this.bottomBar = event.object;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styles: ["\n    BottomBar {\n        inactive-tint-color: #ffffff;\n        active-tint-color: #000000;\n        bar-background-color: #df1a20;\n    }\n"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxpRUFBMkY7QUFjM0Y7SUFHSSw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLHlDQUFnQixDQUFDLFFBQVEsQ0FBQztJQUVwRCxDQUFDO0lBRUYsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBS0Qsb0NBQVcsR0FBWCxVQUFZLEtBQTJCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7SUF2QlEsY0FBYztRQVoxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsTUFBTSxFQUFFLENBQUMsZ0pBTVosQ0FBQztTQUNELENBQUM7eUNBTW1DLDBCQUFXO09BTG5DLGNBQWMsQ0F3QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCb3R0b21CYXIsIExBQkVMX1ZJU0lCSUxJVFksIFRhYlNlbGVjdGVkRXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJvdHRvbWJhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVzOiBbYFxuICAgIEJvdHRvbUJhciB7XG4gICAgICAgIGluYWN0aXZlLXRpbnQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGFjdGl2ZS10aW50LWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBiYXItYmFja2dyb3VuZC1jb2xvcjogI2RmMWEyMDtcbiAgICB9XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sYWJlbFZpc2liaWxpdHkgPSBMQUJFTF9WSVNJQklMSVRZLlNFTEVDVEVEO1xuXG4gICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYm90dG9tQmFyOiBCb3R0b21CYXI7XG4gICAgbGFiZWxWaXNpYmlsaXR5OiBMQUJFTF9WSVNJQklMSVRZO1xuXG4gICAgdGFiU2VsZWN0ZWQoZXZlbnQ6IFRhYlNlbGVjdGVkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBiYXJMb2FkZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5ib3R0b21CYXIgPSBldmVudC5vYmplY3Q7XG4gICAgfVxufSJdfQ==