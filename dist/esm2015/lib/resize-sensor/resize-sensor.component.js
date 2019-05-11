/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, NgZone, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
export class MarkdownEditorResizeSensorComponent {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.interval = 500;
        this.resize = new EventEmitter();
        this.sizeInfo = {
            width: 0,
            height: 0
        };
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.sizeInfo = {
            width: this.resizeSensor.nativeElement.offsetWidth,
            height: this.resizeSensor.nativeElement.offsetHeight
        };
        this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.detectSize();
            }, this.interval);
        });
    }
    /**
     * @private
     * @return {?}
     */
    detectSize() {
        /** @type {?} */
        let width = this.resizeSensor.nativeElement.offsetWidth;
        /** @type {?} */
        let height = this.resizeSensor.nativeElement.offsetHeight;
        if (this.sizeInfo.width !== width || this.sizeInfo.height !== height) {
            this.sizeInfo = {
                width: width,
                height: height
            };
            this.resize.emit(this.sizeInfo);
        }
        setTimeout(() => {
            this.detectSize();
        }, this.interval);
    }
}
MarkdownEditorResizeSensorComponent.decorators = [
    { type: Component, args: [{
                selector: 'md-editor-resize-sensor',
                template: "<div class=\"md-editor-resize-sensor\" #resizeSensor></div>\n",
                styles: [".md-editor-resize-sensor{position:absolute;left:0;right:0;top:0;bottom:0;z-index:-1}"]
            }] }
];
/** @nocollapse */
MarkdownEditorResizeSensorComponent.ctorParameters = () => [
    { type: NgZone }
];
MarkdownEditorResizeSensorComponent.propDecorators = {
    resizeSensor: [{ type: ViewChild, args: ['resizeSensor',] }],
    interval: [{ type: Input }],
    resize: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MarkdownEditorResizeSensorComponent.prototype.resizeSensor;
    /** @type {?} */
    MarkdownEditorResizeSensorComponent.prototype.interval;
    /** @type {?} */
    MarkdownEditorResizeSensorComponent.prototype.resize;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorResizeSensorComponent.prototype.sizeInfo;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorResizeSensorComponent.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLXNlbnNvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaGgtbWQtZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6ZS1zZW5zb3IvcmVzaXplLXNlbnNvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdEcsTUFBTSxPQUFPLG1DQUFtQzs7OztJQVk5QyxZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVIxQixhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV0RCxhQUFRLEdBQVE7WUFDdEIsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUE7SUFJRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVztZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWTtTQUNyRCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDbEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sVUFBVTs7WUFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVzs7WUFDbkQsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVk7UUFDekQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLE1BQU07YUFDZixDQUFBO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMseUVBQW1DOzthQUVwQzs7OztZQU5tQixNQUFNOzs7MkJBVXZCLFNBQVMsU0FBQyxjQUFjO3VCQUV4QixLQUFLO3FCQUNMLE1BQU07Ozs7SUFIUCwyREFBb0Q7O0lBRXBELHVEQUFnQzs7SUFDaEMscURBQThEOzs7OztJQUU5RCx1REFHQzs7Ozs7SUFFVyxzREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWQtZWRpdG9yLXJlc2l6ZS1zZW5zb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzaXplLXNlbnNvci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzaXplLXNlbnNvci5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXJrZG93bkVkaXRvclJlc2l6ZVNlbnNvckNvbXBvbmVudCB7XG5cbiAgQFZpZXdDaGlsZCgncmVzaXplU2Vuc29yJykgcmVzaXplU2Vuc29yOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGludGVydmFsOiBudW1iZXIgPSA1MDA7XG4gIEBPdXRwdXQoKSByZXNpemU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBzaXplSW5mbzogYW55ID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2l6ZUluZm8gPSB7XG4gICAgICB3aWR0aDogdGhpcy5yZXNpemVTZW5zb3IubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5yZXNpemVTZW5zb3IubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRldGVjdFNpemUoKTtcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXRlY3RTaXplKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMucmVzaXplU2Vuc29yLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMucmVzaXplU2Vuc29yLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGlmICh0aGlzLnNpemVJbmZvLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLnNpemVJbmZvLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLnNpemVJbmZvID0ge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6ZS5lbWl0KHRoaXMuc2l6ZUluZm8pO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGV0ZWN0U2l6ZSgpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG59XG4iXX0=