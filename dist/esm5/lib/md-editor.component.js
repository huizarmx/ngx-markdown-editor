/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, forwardRef, Renderer, Attribute, Input, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
var MarkdownEditorComponent = /** @class */ (function () {
    function MarkdownEditorComponent(required, maxlength, _renderer, _domSanitizer) {
        if (required === void 0) { required = false; }
        if (maxlength === void 0) { maxlength = -1; }
        this.required = required;
        this.maxlength = maxlength;
        this._renderer = _renderer;
        this._domSanitizer = _domSanitizer;
        this.hideToolbar = false;
        this.height = "300px";
        this._options = {};
        this.hideIcons = {};
        this.showPreviewPanel = true;
        this.isFullScreen = false;
        this.dragover = false;
        this.isUploading = false;
        this._defaultOption = {
            showBorder: true,
            hideIcons: [],
            scrollPastEnd: 0,
            enablePreviewContentClick: false,
            resizable: false
        };
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    Object.defineProperty(MarkdownEditorComponent.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode || 'editor';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value || (value.toLowerCase() !== 'editor' && value.toLowerCase() !== 'preview')) {
                value = 'editor';
            }
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options || {};
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._options = Object.assign(this._defaultOption, {}, value);
            this.hideIcons = {};
            if (this._options.hideIcons) {
                this._options.hideIcons.forEach(function (v) { return _this.hideIcons[v] = true; });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "markdownValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markdownValue || '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._markdownValue = value;
            this._onChange(value);
            if (this.preRender && this.preRender instanceof Function) {
                value = this.preRender(value);
            }
            if (value !== null && value !== undefined) {
                if (this._renderMarkTimeout)
                    clearTimeout(this._renderMarkTimeout);
                this._renderMarkTimeout = setTimeout(function () {
                    /** @type {?} */
                    var html = marked(value || '', _this._markedOpt);
                    _this.previewHtml = _this._domSanitizer.bypassSecurityTrustHtml(html);
                }, 100);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "_hasUploadFunction", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.upload && this.upload instanceof Function;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var markedRender = new marked.Renderer();
        markedRender.code = function (code, language) {
            /** @type {?} */
            var validLang = !!(language && hljs.getLanguage(language));
            /** @type {?} */
            var highlighted = validLang ? hljs.highlight(language, code).value : code;
            return "<pre style=\"padding: 0; border-radius: 0;\"><code class=\"hljs " + language + "\">" + highlighted + "</code></pre>";
        };
        markedRender.table = function (header, body) {
            return "<table class=\"table table-bordered\">\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
        };
        markedRender.listitem = function (text) {
            if (/^\s*\[[x ]\]\s*/.test(text)) {
                text = text
                    .replace(/^\s*\[ \]\s*/, '<i class="fa fa-square-o" style="margin: 0 0.2em 0.25em -1.6em;"></i> ')
                    .replace(/^\s*\[x\]\s*/, '<i class="fa fa-check-square" style="margin: 0 0.2em 0.25em -1.6em;"></i> ');
                return "<li style=\"list-style: none;\">" + text + "</li>";
            }
            else {
                return "<li>" + text + "</li>";
            }
        };
        /** @type {?} */
        var markedjsOpt = {
            renderer: markedRender,
            highlight: function (code) { return hljs.highlightAuto(code).value; }
        };
        this._markedOpt = Object.assign({}, this.options.markedjsOpt, markedjsOpt);
    };
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var editorElement = this.aceEditorContainer.nativeElement;
        this._editor = ace.edit(editorElement);
        this._editor.$blockScrolling = Infinity;
        this._editor.getSession().setUseWrapMode(true);
        this._editor.getSession().setMode("ace/mode/markdown");
        this._editor.setValue(this.markdownValue || '', 1);
        this._editor.setOption('scrollPastEnd', this._options.scrollPastEnd || 0);
        this._editor.on("change", function (e) {
            /** @type {?} */
            var val = _this._editor.getValue();
            _this.markdownValue = val;
        });
        this._editor.on("blur", function (e) {
            if (_this.blur && _this.blur instanceof Function) {
                _this.blur(e);
            }
        });
    };
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._editor && this._editor.destroy();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MarkdownEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        setTimeout(function () {
            _this.markdownValue = value;
            if (typeof value !== 'undefined' && _this._editor) {
                _this._editor.setValue(value || '', 1);
            }
        }, 1);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MarkdownEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MarkdownEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MarkdownEditorComponent.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var result = null;
        if (this.required && this.markdownValue.length === 0) {
            result = { required: true };
        }
        if (this.maxlength > 0 && this.markdownValue.length > this.maxlength) {
            result = { maxlength: true };
        }
        return result;
    };
    /**
     * @param {?} type
     * @param {?=} customContent
     * @return {?}
     */
    MarkdownEditorComponent.prototype.insertContent = /**
     * @param {?} type
     * @param {?=} customContent
     * @return {?}
     */
    function (type, customContent) {
        if (!this._editor)
            return;
        /** @type {?} */
        var selectedText = this._editor.getSelectedText();
        /** @type {?} */
        var isSelected = !!selectedText;
        /** @type {?} */
        var startSize = 2;
        /** @type {?} */
        var initText = '';
        /** @type {?} */
        var range = this._editor.selection.getRange();
        switch (type) {
            case 'Bold':
                initText = 'Bold Text';
                selectedText = "**" + (selectedText || initText) + "**";
                break;
            case 'Italic':
                initText = 'Italic Text';
                selectedText = "*" + (selectedText || initText) + "*";
                startSize = 1;
                break;
            case 'Heading':
                initText = 'Heading';
                selectedText = "# " + (selectedText || initText);
                break;
            case 'Refrence':
                initText = 'Refrence';
                selectedText = "> " + (selectedText || initText);
                break;
            case 'Link':
                selectedText = "[](http://)";
                startSize = 1;
                break;
            case 'Image':
                selectedText = "![](http://)";
                break;
            case 'Ul':
                selectedText = "- " + (selectedText || initText);
                break;
            case 'Ol':
                selectedText = "1. " + (selectedText || initText);
                startSize = 3;
                break;
            case 'Code':
                initText = 'Source Code';
                selectedText = "```language\r\n" + (selectedText || initText) + "\r\n```";
                startSize = 3;
                break;
            case 'Custom':
                selectedText = customContent;
                startSize = 0;
                break;
        }
        this._editor.session.replace(range, selectedText);
        if (!isSelected) {
            range.start.column += startSize;
            range.end.column = range.start.column + initText.length;
            this._editor.selection.setRange(range);
        }
        this._editor.focus();
    };
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.togglePreview = /**
     * @return {?}
     */
    function () {
        this.showPreviewPanel = !this.showPreviewPanel;
        this.editorResize();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MarkdownEditorComponent.prototype.previewPanelClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.options.enablePreviewContentClick !== true) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.fullScreen = /**
     * @return {?}
     */
    function () {
        this.isFullScreen = !this.isFullScreen;
        this._renderer.setElementStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
        this.editorResize();
    };
    /**
     * @param {?} size
     * @return {?}
     */
    MarkdownEditorComponent.prototype.mdEditorResize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.editorResize();
    };
    /**
     * @param {?=} timeOut
     * @return {?}
     */
    MarkdownEditorComponent.prototype.editorResize = /**
     * @param {?=} timeOut
     * @return {?}
     */
    function (timeOut) {
        var _this = this;
        if (timeOut === void 0) { timeOut = 100; }
        if (!this._editor)
            return;
        if (this._editorResizeTimer)
            clearTimeout(this._editorResizeTimer);
        this._editorResizeTimer = setTimeout(function () {
            _this._editor.resize();
            _this._editor.focus();
        }, timeOut);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onDragover = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction)
            return;
        this.dragover = true;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onDrop = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        var _this = this;
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction || this.isUploading)
            return;
        if (!evt.dataTransfer.files || evt.dataTransfer.files.length === 0) {
            this.dragover = false;
            return;
        }
        this.isUploading = true;
        Promise.resolve()
            .then(function () {
            return _this.upload(evt.dataTransfer.files);
        })
            .then(function (data) {
            var e_1, _a;
            if (Array.isArray(data)) {
                /** @type {?} */
                var msg = [];
                try {
                    for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var item = data_1_1.value;
                        /** @type {?} */
                        var tempMsg = "[" + item.name + "](" + item.url + ")";
                        if (item.isImg) {
                            tempMsg = "!" + tempMsg;
                        }
                        msg.push(tempMsg);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.insertContent('Custom', msg.join('\r\n'));
            }
            else {
                console.warn('Invalid upload result. Please using follow this type `UploadResult`.');
            }
            _this.isUploading = false;
            _this.dragover = false;
        })
            .catch(function (err) {
            console.error(err);
            _this.isUploading = false;
            _this.dragover = false;
        });
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onDragleave = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction)
            return;
        this.dragover = false;
    };
    MarkdownEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'md-editor',
                    template: "<div class=\"md-editor-container\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\n  [style.height]=\"height\">\n  <div class=\"md-layout\">\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Bold\" (click)=\"insertContent('Bold')\"\n          *ngIf=\"!hideIcons.Bold\">\n          <i class=\"fa fa-bold\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Italic\" (click)=\"insertContent('Italic')\"\n          *ngIf=\"!hideIcons.Italic\">\n          <i class=\"fa fa-italic\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Heading\" (click)=\"insertContent('Heading')\"\n          *ngIf=\"!hideIcons.Heading\">\n          <i class=\"fa fa-header\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Refrence\" (click)=\"insertContent('Refrence')\"\n          *ngIf=\"!hideIcons.Refrence\">\n          <i class=\"fa fa-quote-left\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Link\" (click)=\"insertContent('Link')\"\n          *ngIf=\"!hideIcons.Link\">\n          <i class=\"fa fa-link\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Image\" (click)=\"insertContent('Image')\"\n          *ngIf=\"!hideIcons.Image\">\n          <i class=\"fa fa-image\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Unordered List\" (click)=\"insertContent('Ul')\"\n          *ngIf=\"!hideIcons.Ul\">\n          <i class=\"fa fa-list-ul\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Ordered List\" (click)=\"insertContent('Ol')\"\n          *ngIf=\"!hideIcons.Ol\">\n          <i class=\"fa fa-list-ol\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" title=\"Code Block\" (click)=\"insertContent('Code')\"\n          *ngIf=\"!hideIcons.Code\">\n          <i class=\"fa fa-file-code-o\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\n          [attr.title]=\"showPreviewPanel ? 'Hide Preview' : 'Show Preview'\" (click)=\"togglePreview()\"\n          *ngIf=\"!hideIcons.TogglePreview\">\n          <i class=\"fa\" [class.fa-eye]=\"!showPreviewPanel\" [class.fa-eye-slash]=\"showPreviewPanel\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group pull-right hide-split\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [class.active]=\"isFullScreen\" (click)=\"fullScreen()\"\n          *ngIf=\"!hideIcons.FullScreen\">\n          <i class=\"fa fa-arrows-alt\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"editor-container\">\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\n        (dragover)=\"onDragover($event)\">\n        <div class=\"drag-container\">\n          <div class=\"upload-loading\">\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\n          </div>\n        </div>\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\n        <div class=\"editor-panel\">\n          <div class=\"ace-editor\" #aceEditor></div>\n        </div>\n      </div>\n      <div [style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\">\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\"></div>\n      </div>\n    </div>\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\n      <div class=\"text-right length-view\">\n        {{ markdownValue?.length }} / {{ maxlength }}\n      </div>\n      <div class=\"resize-btn\"></div>\n    </div>\n  </div>\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\n</div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MarkdownEditorComponent; }),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(function () { return MarkdownEditorComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".md-editor-container{position:relative;height:100%;margin-bottom:15px;border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99999999}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .tool-bar{background-color:#f5f5f5;border-bottom:1px solid rgba(0,0,0,.1)}.md-editor-container .md-layout .tool-bar .btn-group{padding:6px}.md-editor-container .md-layout .tool-bar .btn-group:first-child>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn-group>.btn:first-child::before{content:' ';background-color:#a9a9a9;width:1px;height:24px;left:-9px;top:2px;position:absolute}.md-editor-container .md-layout .tool-bar .btn-group.hide-split>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn{margin-bottom:0}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container>div .drag-container{display:none}.md-editor-container .md-layout .editor-container>div.dragover{position:relative}.md-editor-container .md-layout .editor-container>div.dragover .drag-container{display:block;position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:50px;color:#fff}.md-editor-container .md-layout .editor-container>div.dragover .drag-container.drag-container-mask{background-color:transparent;z-index:11}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading{display:flex;flex-direction:column;align-items:center}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading .text{font-size:20px;margin-top:10px}.md-editor-container .md-layout .editor-container .editor-panel{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .md-footer{background-color:#f0f0f0;border-top:1px solid rgba(0,0,0,.1);display:flex;align-items:center}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}"]
                }] }
    ];
    /** @nocollapse */
    MarkdownEditorComponent.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Attribute, args: ['required',] }] },
        { type: Number, decorators: [{ type: Attribute, args: ['maxlength',] }] },
        { type: Renderer },
        { type: DomSanitizer }
    ]; };
    MarkdownEditorComponent.propDecorators = {
        aceEditorContainer: [{ type: ViewChild, args: ['aceEditor',] }],
        hideToolbar: [{ type: Input }],
        height: [{ type: Input }],
        preRender: [{ type: Input }],
        upload: [{ type: Input }],
        blur: [{ type: Input }],
        mode: [{ type: Input }],
        options: [{ type: Input }]
    };
    return MarkdownEditorComponent;
}());
export { MarkdownEditorComponent };
if (false) {
    /** @type {?} */
    MarkdownEditorComponent.prototype.aceEditorContainer;
    /** @type {?} */
    MarkdownEditorComponent.prototype.hideToolbar;
    /** @type {?} */
    MarkdownEditorComponent.prototype.height;
    /** @type {?} */
    MarkdownEditorComponent.prototype.preRender;
    /** @type {?} */
    MarkdownEditorComponent.prototype.upload;
    /** @type {?} */
    MarkdownEditorComponent.prototype.blur;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._options;
    /** @type {?} */
    MarkdownEditorComponent.prototype.hideIcons;
    /** @type {?} */
    MarkdownEditorComponent.prototype.showPreviewPanel;
    /** @type {?} */
    MarkdownEditorComponent.prototype.isFullScreen;
    /** @type {?} */
    MarkdownEditorComponent.prototype.previewHtml;
    /** @type {?} */
    MarkdownEditorComponent.prototype.dragover;
    /** @type {?} */
    MarkdownEditorComponent.prototype.isUploading;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._markdownValue;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._editor;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._editorResizeTimer;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._renderMarkTimeout;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._markedOpt;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._defaultOption;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._onTouched;
    /** @type {?} */
    MarkdownEditorComponent.prototype.required;
    /** @type {?} */
    MarkdownEditorComponent.prototype.maxlength;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._domSanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvbWQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDdEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pEO0lBaUdFLGlDQUNnQyxRQUF5QixFQUN4QixTQUFzQixFQUM3QyxTQUFtQixFQUNuQixhQUEyQjtRQUhMLHlCQUFBLEVBQUEsZ0JBQXlCO1FBQ3hCLDBCQUFBLEVBQUEsYUFBcUIsQ0FBQztRQUR2QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQzdDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFoRnJCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBVyxPQUFPLENBQUM7UUE0QmpDLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFcEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQTBCNUIsbUJBQWMsR0FBbUI7WUFDdkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLEVBQUU7WUFDYixhQUFhLEVBQUUsQ0FBQztZQUNoQix5QkFBeUIsRUFBRSxLQUFLO1lBQ2hDLFNB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QzlELDhDQUE2Qzs7SUFDN0MseUNBQXlDOztJQUN6Qyw0Q0FBb0M7O0lBQ3BDLHlDQUFpQzs7SUFDakMsdUNBQStCOzs7OztJQVkvQix3Q0FBc0I7Ozs7O0lBYXRCLDJDQUEyQjs7SUFFM0IsNENBQTJCOztJQUMzQixtREFBd0M7O0lBQ3hDLCtDQUFxQzs7SUFDckMsOENBQXdCOztJQUN4QiwyQ0FBaUM7O0lBQ2pDLDhDQUFvQzs7Ozs7SUFvQnBDLGlEQUE0Qjs7Ozs7SUFFNUIsMENBQXFCOzs7OztJQUNyQixxREFBZ0M7Ozs7O0lBQ2hDLHFEQUFnQzs7Ozs7SUFDaEMsNkNBQXdCOzs7OztJQUN4QixpREFNRTs7Ozs7SUFLRiw0Q0FBb0M7Ozs7O0lBQ3BDLDZDQUErQjs7SUFHN0IsMkNBQXVEOztJQUN2RCw0Q0FBcUQ7Ozs7O0lBQ3JELDRDQUEyQjs7Ozs7SUFDM0IsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYsIFJlbmRlcmVyLCBBdHRyaWJ1dGUsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNZEVkaXRvck9wdGlvbiB9IGZyb20gJy4vbWQtZWRpdG9yLnR5cGVzJztcblxuZGVjbGFyZSBsZXQgYWNlOiBhbnk7XG5kZWNsYXJlIGxldCBtYXJrZWQ6IGFueTtcbmRlY2xhcmUgbGV0IGhsanM6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWQtZWRpdG9yJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWQtZWRpdG9yLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21kLWVkaXRvci5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXJrZG93bkVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hcmtkb3duRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWFya2Rvd25FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcblxuICBAVmlld0NoaWxkKCdhY2VFZGl0b3InKSBwdWJsaWMgYWNlRWRpdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZVRvb2xiYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogc3RyaW5nID0gXCIzMDBweFwiO1xuICBASW5wdXQoKSBwdWJsaWMgcHJlUmVuZGVyOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZDogRnVuY3Rpb247XG4gIEBJbnB1dCgpIHB1YmxpYyBibHVyOiBGdW5jdGlvbjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSB8fCAnZWRpdG9yJztcbiAgfVxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdlZGl0b3InICYmIHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdwcmV2aWV3JykpIHtcbiAgICAgIHZhbHVlID0gJ2VkaXRvcic7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBvcHRpb25zKCk6IE1kRWRpdG9yT3B0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucyB8fCB7fTtcbiAgfVxuICBwdWJsaWMgc2V0IG9wdGlvbnModmFsdWU6IE1kRWRpdG9yT3B0aW9uKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5fZGVmYXVsdE9wdGlvbiwge30sIHZhbHVlKTtcbiAgICB0aGlzLmhpZGVJY29ucyA9IHt9O1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmhpZGVJY29ucykge1xuICAgICAgdGhpcy5fb3B0aW9ucy5oaWRlSWNvbnMuZm9yRWFjaCgodjogYW55KSA9PiB0aGlzLmhpZGVJY29uc1t2XSA9IHRydWUpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgaGlkZUljb25zOiBhbnkgPSB7fTtcbiAgcHVibGljIHNob3dQcmV2aWV3UGFuZWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNGdWxsU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwcmV2aWV3SHRtbDogYW55O1xuICBwdWJsaWMgZHJhZ292ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzVXBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBtYXJrZG93blZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtkb3duVmFsdWUgfHwgJyc7XG4gIH1cbiAgcHVibGljIHNldCBtYXJrZG93blZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMucHJlUmVuZGVyICYmIHRoaXMucHJlUmVuZGVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcmVSZW5kZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX3JlbmRlck1hcmtUaW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy5fcmVuZGVyTWFya1RpbWVvdXQpO1xuICAgICAgdGhpcy5fcmVuZGVyTWFya1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGh0bWwgPSBtYXJrZWQodmFsdWUgfHwgJycsIHRoaXMuX21hcmtlZE9wdCk7XG4gICAgICAgIHRoaXMucHJldmlld0h0bWwgPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9tYXJrZG93blZhbHVlOiBhbnk7XG5cbiAgcHJpdmF0ZSBfZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgX2VkaXRvclJlc2l6ZVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgX3JlbmRlck1hcmtUaW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgX21hcmtlZE9wdDogYW55O1xuICBwcml2YXRlIF9kZWZhdWx0T3B0aW9uOiBNZEVkaXRvck9wdGlvbiA9IHtcbiAgICBzaG93Qm9yZGVyOiB0cnVlLFxuICAgIGhpZGVJY29uczogW10sXG4gICAgc2Nyb2xsUGFzdEVuZDogMCxcbiAgICBlbmFibGVQcmV2aWV3Q29udGVudENsaWNrOiBmYWxzZSxcbiAgICByZXNpemFibGU6IGZhbHNlXG4gIH07XG4gIHByaXZhdGUgZ2V0IF9oYXNVcGxvYWRGdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQgJiYgdGhpcy51cGxvYWQgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEF0dHJpYnV0ZSgncmVxdWlyZWQnKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBAQXR0cmlidXRlKCdtYXhsZW5ndGgnKSBwdWJsaWMgbWF4bGVuZ3RoOiBudW1iZXIgPSAtMSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG1hcmtlZFJlbmRlciA9IG5ldyBtYXJrZWQuUmVuZGVyZXIoKTtcbiAgICBtYXJrZWRSZW5kZXIuY29kZSA9IChjb2RlOiBhbnksIGxhbmd1YWdlOiBhbnkpID0+IHtcbiAgICAgIGxldCB2YWxpZExhbmcgPSAhIShsYW5ndWFnZSAmJiBobGpzLmdldExhbmd1YWdlKGxhbmd1YWdlKSk7XG4gICAgICBsZXQgaGlnaGxpZ2h0ZWQgPSB2YWxpZExhbmcgPyBobGpzLmhpZ2hsaWdodChsYW5ndWFnZSwgY29kZSkudmFsdWUgOiBjb2RlO1xuICAgICAgcmV0dXJuIGA8cHJlIHN0eWxlPVwicGFkZGluZzogMDsgYm9yZGVyLXJhZGl1czogMDtcIj48Y29kZSBjbGFzcz1cImhsanMgJHtsYW5ndWFnZX1cIj4ke2hpZ2hsaWdodGVkfTwvY29kZT48L3ByZT5gO1xuICAgIH07XG4gICAgbWFya2VkUmVuZGVyLnRhYmxlID0gKGhlYWRlcjogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cXG48dGhlYWQ+XFxuJHtoZWFkZXJ9PC90aGVhZD5cXG48dGJvZHk+XFxuJHtib2R5fTwvdGJvZHk+XFxuPC90YWJsZT5cXG5gO1xuICAgIH07XG4gICAgbWFya2VkUmVuZGVyLmxpc3RpdGVtID0gKHRleHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKC9eXFxzKlxcW1t4IF1cXF1cXHMqLy50ZXN0KHRleHQpKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0XG4gICAgICAgICAgLnJlcGxhY2UoL15cXHMqXFxbIFxcXVxccyovLCAnPGkgY2xhc3M9XCJmYSBmYS1zcXVhcmUtb1wiIHN0eWxlPVwibWFyZ2luOiAwIDAuMmVtIDAuMjVlbSAtMS42ZW07XCI+PC9pPiAnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzKlxcW3hcXF1cXHMqLywgJzxpIGNsYXNzPVwiZmEgZmEtY2hlY2stc3F1YXJlXCIgc3R5bGU9XCJtYXJnaW46IDAgMC4yZW0gMC4yNWVtIC0xLjZlbTtcIj48L2k+ICcpO1xuICAgICAgICByZXR1cm4gYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+JHt0ZXh0fTwvbGk+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgPGxpPiR7dGV4dH08L2xpPmA7XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgbWFya2VkanNPcHQgPSB7XG4gICAgICByZW5kZXJlcjogbWFya2VkUmVuZGVyLFxuICAgICAgaGlnaGxpZ2h0OiAoY29kZTogYW55KSA9PiBobGpzLmhpZ2hsaWdodEF1dG8oY29kZSkudmFsdWVcbiAgICB9O1xuICAgIHRoaXMuX21hcmtlZE9wdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5tYXJrZWRqc09wdCwgbWFya2VkanNPcHQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGxldCBlZGl0b3JFbGVtZW50ID0gdGhpcy5hY2VFZGl0b3JDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9lZGl0b3IgPSBhY2UuZWRpdChlZGl0b3JFbGVtZW50KTtcbiAgICB0aGlzLl9lZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHk7XG4gICAgdGhpcy5fZWRpdG9yLmdldFNlc3Npb24oKS5zZXRVc2VXcmFwTW9kZSh0cnVlKTtcbiAgICB0aGlzLl9lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoXCJhY2UvbW9kZS9tYXJrZG93blwiKTtcbiAgICB0aGlzLl9lZGl0b3Iuc2V0VmFsdWUodGhpcy5tYXJrZG93blZhbHVlIHx8ICcnLCAxKTtcbiAgICB0aGlzLl9lZGl0b3Iuc2V0T3B0aW9uKCdzY3JvbGxQYXN0RW5kJywgdGhpcy5fb3B0aW9ucy5zY3JvbGxQYXN0RW5kIHx8IDApO1xuXG4gICAgdGhpcy5fZWRpdG9yLm9uKFwiY2hhbmdlXCIsIChlOiBhbnkpID0+IHtcbiAgICAgIGxldCB2YWwgPSB0aGlzLl9lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgIHRoaXMubWFya2Rvd25WYWx1ZSA9IHZhbDtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VkaXRvci5vbihcImJsdXJcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgaWYodGhpcy5ibHVyICYmIHRoaXMuYmx1ciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuYmx1cihlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VkaXRvciAmJiB0aGlzLl9lZGl0b3IuZGVzdHJveSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHZhbHVlIHx8ICcnLCAxKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLm1hcmtkb3duVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGxlbmd0aCA+IDAgJiYgdGhpcy5tYXJrZG93blZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB7IG1heGxlbmd0aDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaW5zZXJ0Q29udGVudCh0eXBlOiBzdHJpbmcsIGN1c3RvbUNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLl9lZGl0b3IuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGVkVGV4dDtcbiAgICBsZXQgc3RhcnRTaXplID0gMjtcbiAgICBsZXQgaW5pdFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIGxldCByYW5nZSA9IHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uZ2V0UmFuZ2UoKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0JvbGQnOlxuICAgICAgICBpbml0VGV4dCA9ICdCb2xkIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKioke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0qKmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSXRhbGljJzpcbiAgICAgICAgaW5pdFRleHQgPSAnSXRhbGljIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKiR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fSpgO1xuICAgICAgICBzdGFydFNpemUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hlYWRpbmcnOlxuICAgICAgICBpbml0VGV4dCA9ICdIZWFkaW5nJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCMgJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSZWZyZW5jZSc6XG4gICAgICAgIGluaXRUZXh0ID0gJ1JlZnJlbmNlJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYD4gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYFtdKGh0dHA6Ly8pYDtcbiAgICAgICAgc3RhcnRTaXplID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAhW10oaHR0cDovLylgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VsJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYC0gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ09sJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYDEuICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWBcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDb2RlJzpcbiAgICAgICAgaW5pdFRleHQgPSAnU291cmNlIENvZGUnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBcImBgYGxhbmd1YWdlXFxyXFxuXCIgKyAoc2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0KSArIFwiXFxyXFxuYGBgXCI7XG4gICAgICAgIHN0YXJ0U2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ3VzdG9tJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gY3VzdG9tQ29udGVudDtcbiAgICAgICAgc3RhcnRTaXplID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX2VkaXRvci5zZXNzaW9uLnJlcGxhY2UocmFuZ2UsIHNlbGVjdGVkVGV4dCk7XG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICByYW5nZS5zdGFydC5jb2x1bW4gKz0gc3RhcnRTaXplO1xuICAgICAgcmFuZ2UuZW5kLmNvbHVtbiA9IHJhbmdlLnN0YXJ0LmNvbHVtbiArIGluaXRUZXh0Lmxlbmd0aDtcbiAgICAgIHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uc2V0UmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIHRvZ2dsZVByZXZpZXcoKSB7XG4gICAgdGhpcy5zaG93UHJldmlld1BhbmVsID0gIXRoaXMuc2hvd1ByZXZpZXdQYW5lbDtcbiAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICB9XG5cbiAgcHJldmlld1BhbmVsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVQcmV2aWV3Q29udGVudENsaWNrICE9PSB0cnVlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9ICF0aGlzLmlzRnVsbFNjcmVlbjtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93WScsIHRoaXMuaXNGdWxsU2NyZWVuID8gJ2hpZGRlbicgOiAnYXV0bycpO1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBtZEVkaXRvclJlc2l6ZShzaXplOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICB9XG5cbiAgZWRpdG9yUmVzaXplKHRpbWVPdXQ6IG51bWJlciA9IDEwMCkge1xuICAgIGlmICghdGhpcy5fZWRpdG9yKSByZXR1cm5cbiAgICBpZiAodGhpcy5fZWRpdG9yUmVzaXplVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLl9lZGl0b3JSZXNpemVUaW1lcik7XG4gICAgdGhpcy5fZWRpdG9yUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2VkaXRvci5yZXNpemUoKTtcbiAgICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICAgIH0sIHRpbWVPdXQpO1xuICB9XG5cbiAgb25EcmFnb3ZlcihldnQ6IERyYWdFdmVudCkge1xuICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2hhc1VwbG9hZEZ1bmN0aW9uKSByZXR1cm47XG4gICAgdGhpcy5kcmFnb3ZlciA9IHRydWU7XG4gIH1cblxuICBvbkRyb3AoZXZ0OiBEcmFnRXZlbnQpIHtcbiAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9oYXNVcGxvYWRGdW5jdGlvbiB8fCB0aGlzLmlzVXBsb2FkaW5nKSByZXR1cm47XG5cbiAgICBpZiAoIWV2dC5kYXRhVHJhbnNmZXIuZmlsZXMgfHwgZXZ0LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzVXBsb2FkaW5nID0gdHJ1ZTtcbiAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWQoZXZ0LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgbGV0IG1zZyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IHRlbXBNc2cgPSBgWyR7aXRlbS5uYW1lfV0oJHtpdGVtLnVybH0pYDtcbiAgICAgICAgICAgIGlmIChpdGVtLmlzSW1nKSB7XG4gICAgICAgICAgICAgIHRlbXBNc2cgPSBgISR7dGVtcE1zZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXNnLnB1c2godGVtcE1zZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaW5zZXJ0Q29udGVudCgnQ3VzdG9tJywgbXNnLmpvaW4oJ1xcclxcbicpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgdXBsb2FkIHJlc3VsdC4gUGxlYXNlIHVzaW5nIGZvbGxvdyB0aGlzIHR5cGUgYFVwbG9hZFJlc3VsdGAuJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25EcmFnbGVhdmUoZXZ0OiBEcmFnRXZlbnQpIHtcbiAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9oYXNVcGxvYWRGdW5jdGlvbikgcmV0dXJuO1xuICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgfVxufVxuIl19