/// <reference path="../.d.ts" />

import * as frameModule from "ui/frame";

export module Navigation {
    export function navigate(navigationEntry: frameModule.NavigationEntry): void {
        var topmost = frameModule.topmost();
        topmost.navigate(navigationEntry);
    }

    export function goBack(): void {
        var topmost = frameModule.topmost();
        topmost.goBack();
    }
}
