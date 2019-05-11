/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, NgZone, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
var MarkdownEditorResizeSensorComponent = /** @class */ (function () {
    function MarkdownEditorResizeSensorComponent(_ngZone) {
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
    MarkdownEditorResizeSensorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sizeInfo = {
            width: this.resizeSensor.nativeElement.offsetWidth,
            height: this.resizeSensor.nativeElement.offsetHeight
        };
        this._ngZone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.detectSize();
            }, _this.interval);
        });
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownEditorResizeSensorComponent.prototype.detectSize = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var width = this.resizeSensor.nativeElement.offsetWidth;
        /** @type {?} */
        var height = this.resizeSensor.nativeElement.offsetHeight;
        if (this.sizeInfo.width !== width || this.sizeInfo.height !== height) {
            this.sizeInfo = {
                width: width,
                height: height
            };
            this.resize.emit(this.sizeInfo);
        }
        setTimeout(function () {
            _this.detectSize();
        }, this.interval);
    };
    MarkdownEditorResizeSensorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'md-editor-resize-sensor',
                    template: "<div class=\"md-editor-resize-sensor\" #resizeSensor></div>\n",
                    styles: [".md-editor-resize-sensor{position:absolute;left:0;right:0;top:0;bottom:0;z-index:-1}"]
                }] }
    ];
    /** @nocollapse */
    MarkdownEditorResizeSensorComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    MarkdownEditorResizeSensorComponent.propDecorators = {
        resizeSensor: [{ type: ViewChild, args: ['resizeSensor',] }],
        interval: [{ type: Input }],
        resize: [{ type: Output }]
    };
    return MarkdownEditorResizeSensorComponent;
}());
export { MarkdownEditorResizeSensorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLXNlbnNvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaGgtbWQtZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3Jlc2l6ZS1zZW5zb3IvcmVzaXplLXNlbnNvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEc7SUFrQkUsNkNBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBUjFCLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFDdEIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXRELGFBQVEsR0FBUTtZQUN0QixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQTtJQUlELENBQUM7Ozs7SUFFRCw2REFBZTs7O0lBQWY7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVztZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWTtTQUNyRCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUM3QixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHdEQUFVOzs7O0lBQWxCO1FBQUEsaUJBYUM7O1lBWkssS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVc7O1lBQ25ELE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1FBQ3pELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQztRQUNELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMseUVBQW1DOztpQkFFcEM7Ozs7Z0JBTm1CLE1BQU07OzsrQkFVdkIsU0FBUyxTQUFDLGNBQWM7MkJBRXhCLEtBQUs7eUJBQ0wsTUFBTTs7SUFxQ1QsMENBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTFDWSxtQ0FBbUM7OztJQUU5QywyREFBb0Q7O0lBRXBELHVEQUFnQzs7SUFDaEMscURBQThEOzs7OztJQUU5RCx1REFHQzs7Ozs7SUFFVyxzREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWQtZWRpdG9yLXJlc2l6ZS1zZW5zb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzaXplLXNlbnNvci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzaXplLXNlbnNvci5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXJrZG93bkVkaXRvclJlc2l6ZVNlbnNvckNvbXBvbmVudCB7XG5cbiAgQFZpZXdDaGlsZCgncmVzaXplU2Vuc29yJykgcmVzaXplU2Vuc29yOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGludGVydmFsOiBudW1iZXIgPSA1MDA7XG4gIEBPdXRwdXQoKSByZXNpemU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBzaXplSW5mbzogYW55ID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2l6ZUluZm8gPSB7XG4gICAgICB3aWR0aDogdGhpcy5yZXNpemVTZW5zb3IubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5yZXNpemVTZW5zb3IubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRldGVjdFNpemUoKTtcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXRlY3RTaXplKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMucmVzaXplU2Vuc29yLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMucmVzaXplU2Vuc29yLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGlmICh0aGlzLnNpemVJbmZvLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLnNpemVJbmZvLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICB0aGlzLnNpemVJbmZvID0ge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6ZS5lbWl0KHRoaXMuc2l6ZUluZm8pO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGV0ZWN0U2l6ZSgpO1xuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xuICB9XG59XG4iXX0=