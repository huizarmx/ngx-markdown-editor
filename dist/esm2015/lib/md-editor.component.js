/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, forwardRef, Renderer, Attribute, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
export class MarkdownEditorComponent {
    /**
     * @param {?=} required
     * @param {?=} maxlength
     * @param {?=} _renderer
     * @param {?=} _domSanitizer
     */
    constructor(required = false, maxlength = -1, _renderer, _domSanitizer) {
        this.required = required;
        this.maxlength = maxlength;
        this._renderer = _renderer;
        this._domSanitizer = _domSanitizer;
        this.hideToolbar = false;
        this.height = "300px";
        this.width = "100%";
        this.blur = new EventEmitter();
        this._options = {};
        this.icons = {};
        this.showPreviewPanel = true;
        this.isFullScreen = false;
        this.dragover = false;
        this.isUploading = false;
        this._btnToolbarHasBeenClicked = false;
        this._defaultOption = {
            showBorder: true,
            icons: {},
            scrollPastEnd: 0,
            enablePreviewContentClick: false,
            resizable: false
        };
        this._onChange = (_) => { };
        this._onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get BOLD_ID() { return "Bold"; }
    /**
     * @return {?}
     */
    get ITALIC_ID() { return "Italic"; }
    /**
     * @return {?}
     */
    get HEADING_ID() { return "Heading"; }
    /**
     * @return {?}
     */
    get REFRENCE_ID() { return "Refrence"; }
    /**
     * @return {?}
     */
    get LINK_ID() { return "Link"; }
    /**
     * @return {?}
     */
    get IMAGE_ID() { return "Image"; }
    /**
     * @return {?}
     */
    get UL_ID() { return "Ul"; }
    /**
     * @return {?}
     */
    get OL_ID() { return "Ol"; }
    /**
     * @return {?}
     */
    get CODE_ID() { return "Code"; }
    /**
     * @return {?}
     */
    get TABLE_ID() { return "Table"; }
    /**
     * @return {?}
     */
    get TOGGLE_PREVIEW_ID() { return "TogglePreview"; }
    /**
     * @return {?}
     */
    get FULLSCREEN_ID() { return "Fullscreen"; }
    /**
     * @return {?}
     */
    get BOLD() {
        return {
            id: this.BOLD_ID,
            hidden: false,
            iconClass: "fa fa-bold",
            title: "Bold"
        };
    }
    /**
     * @return {?}
     */
    get ITALIC() {
        return {
            id: this.ITALIC_ID,
            hidden: false,
            iconClass: "fa fa-italic",
            title: "Italic"
        };
    }
    /**
     * @return {?}
     */
    get HEADING() {
        return {
            id: this.HEADING_ID,
            hidden: false,
            iconClass: "fa fa-header",
            title: "Heading"
        };
    }
    /**
     * @return {?}
     */
    get REFRENCE() {
        return {
            id: this.REFRENCE_ID,
            hidden: false,
            iconClass: "fa fa-quote-left",
            title: "Link"
        };
    }
    /**
     * @return {?}
     */
    get LINK() {
        return {
            id: this.HEADING_ID,
            hidden: false,
            iconClass: "fa fa-link",
            title: "Link"
        };
    }
    /**
     * @return {?}
     */
    get IMAGE() {
        return {
            id: this.IMAGE_ID,
            hidden: false,
            iconClass: "fa fa-image",
            title: "Image"
        };
    }
    /**
     * @return {?}
     */
    get UL() {
        return {
            id: this.UL_ID,
            hidden: false,
            iconClass: "fa fa-list-ul",
            title: "Unordered List"
        };
    }
    /**
     * @return {?}
     */
    get OL() {
        return {
            id: this.OL_ID,
            hidden: false,
            iconClass: "fa fa-list-ol",
            title: "Ordered List"
        };
    }
    /**
     * @return {?}
     */
    get CODE() {
        return {
            id: this.OL_ID,
            hidden: false,
            iconClass: "fa fa-list-ol",
            title: "Ordered List"
        };
    }
    /**
     * @return {?}
     */
    get TABLE() {
        return {
            id: this.TABLE_ID,
            hidden: false,
            iconClass: "fa fa-table",
            title: "Table"
        };
    }
    /**
     * @return {?}
     */
    get TOGGLE_PREVIEW() {
        return {
            id: this.TOGGLE_PREVIEW_ID,
            hidden: false,
            iconClass: "fa fa-eye",
            iconClassToggle: "fa fa-eye-slash",
            title: "Show Preview",
            titleToggle: "Hide Preview"
        };
    }
    /**
     * @return {?}
     */
    get FULLSCREEN() {
        return {
            id: this.TOGGLE_PREVIEW_ID,
            hidden: false,
            iconClass: "fa fa-arrows-alt",
            activeClass: "active",
            title: "Fullscreen",
            titleToggle: "Restore"
        };
    }
    /**
     * @return {?}
     */
    get ALL_ICONS() {
        /** @type {?} */
        let allIcons = {};
        allIcons[this.BOLD_ID] = this.BOLD;
        allIcons[this.ITALIC_ID] = this.ITALIC;
        allIcons[this.HEADING_ID] = this.HEADING;
        allIcons[this.REFRENCE_ID] = this.REFRENCE;
        allIcons[this.LINK_ID] = this.LINK;
        allIcons[this.IMAGE_ID] = this.IMAGE;
        allIcons[this.UL_ID] = this.UL;
        allIcons[this.OL_ID] = this.OL;
        allIcons[this.CODE_ID] = this.CODE;
        allIcons[this.TABLE_ID] = this.TABLE;
        allIcons[this.TOGGLE_PREVIEW_ID] = this.TOGGLE_PREVIEW;
        allIcons[this.FULLSCREEN_ID] = this.FULLSCREEN;
        return allIcons;
    }
    /**
     * @return {?}
     */
    get ALL_ICON_IDS() {
        return [
            this.BOLD_ID,
            this.ITALIC_ID,
            this.HEADING_ID,
            this.REFRENCE_ID,
            this.LINK_ID,
            this.IMAGE_ID,
            this.UL_ID,
            this.OL_ID,
            this.CODE_ID,
            this.TABLE_ID,
            this.TOGGLE_PREVIEW_ID,
            this.FULLSCREEN_ID
        ];
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode || 'editor';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
        if (!value || (value.toLowerCase() !== 'editor' && value.toLowerCase() !== 'preview')) {
            value = 'editor';
        }
        this._mode = value;
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options || {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set options(value) {
        /** @type {?} */
        const defaultIconOptions = this;
        this._defaultOption = defaultIconOptions.ALL_ICONS;
        this._options = Object.assign(this._defaultOption, {}, value);
        this.icons = defaultIconOptions.ALL_ICONS;
        if (this._options.icons) {
            for (let key of Object.keys(this._options.icons)) {
                if (defaultIconOptions.ALL_ICON_IDS.indexOf(key) !== -1) {
                    this.icons[key] = this._options.icons[key];
                }
            }
        }
    }
    /**
     * @return {?}
     */
    get markdownValue() {
        return this._markdownValue || '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set markdownValue(value) {
        this._markdownValue = value;
        this._onChange(value);
        if (this.preRender && this.preRender instanceof Function) {
            value = this.preRender(value);
        }
        if (value !== null && value !== undefined) {
            if (this._renderMarkTimeout)
                clearTimeout(this._renderMarkTimeout);
            this._renderMarkTimeout = setTimeout(() => {
                /** @type {?} */
                let html = marked(value || '', this._markedOpt);
                this.previewHtml = this._domSanitizer.bypassSecurityTrustHtml(html);
            }, 100);
        }
    }
    /**
     * @private
     * @return {?}
     */
    get _hasUploadFunction() {
        return this.upload && this.upload instanceof Function;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let markedRender = new marked.Renderer();
        markedRender.code = (code, language) => {
            /** @type {?} */
            let validLang = !!(language && hljs.getLanguage(language));
            /** @type {?} */
            let highlighted = validLang ? hljs.highlight(language, code).value : code;
            return `<pre style="padding: 0; border-radius: 0;"><code class="hljs ${language}">${highlighted}</code></pre>`;
        };
        markedRender.table = (header, body) => {
            return `<table class="table table-bordered table-striped">\n<thead>\n${header}</thead>\n<tbody>\n${body}</tbody>\n</table>\n`;
        };
        markedRender.listitem = (text) => {
            if (/^\s*\[[x ]\]\s*/.test(text)) {
                text = text
                    .replace(/^\s*\[ \]\s*/, '<i class="fa fa-square-o" style="margin: 0 0.2em 0.25em -1.6em;"></i> ')
                    .replace(/^\s*\[x\]\s*/, '<i class="fa fa-check-square" style="margin: 0 0.2em 0.25em -1.6em;"></i> ');
                return `<li style="list-style: none;">${text}</li>`;
            }
            else {
                return `<li>${text}</li>`;
            }
        };
        /** @type {?} */
        let markedjsOpt = {
            renderer: markedRender,
            highlight: (code) => hljs.highlightAuto(code).value
        };
        this._markedOpt = Object.assign({}, this.options.markedjsOpt, markedjsOpt);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let editorElement = this.aceEditorContainer.nativeElement;
        this._editor = ace.edit(editorElement);
        this._editor.$blockScrolling = Infinity;
        this._editor.getSession().setUseWrapMode(true);
        this._editor.getSession().setMode("ace/mode/markdown");
        this._editor.setValue(this.markdownValue || '', 1);
        this._editor.setOption('scrollPastEnd', this._options.scrollPastEnd || 0);
        this._editor.on("change", (e) => {
            this.markdownValue = this._editor.getValue();
        });
        this._editor.on("blur", (e) => {
            if (!this._btnToolbarHasBeenClicked) {
                this.blur.emit(e);
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._editor && this._editor.destroy();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        setTimeout(() => {
            this.markdownValue = value;
            if (typeof value !== 'undefined' && this._editor) {
                this._editor.setValue(value || '', 1);
            }
        }, 1);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        let result = null;
        if (this.required && this.markdownValue.length === 0) {
            result = { required: true };
        }
        if (this.maxlength > 0 && this.markdownValue.length > this.maxlength) {
            result = { maxlength: true };
        }
        return result;
    }
    /**
     * @return {?}
     */
    toolbarButtonMouseDown() {
        this._btnToolbarHasBeenClicked = true;
    }
    /**
     * @param {?} type
     * @param {?=} customContent
     * @return {?}
     */
    insertContent(type, customContent) {
        if (!this._editor)
            return;
        /** @type {?} */
        let selectedText = this._editor.getSelectedText();
        /** @type {?} */
        let isSelected = !!selectedText;
        /** @type {?} */
        let startSize = 2;
        /** @type {?} */
        let initText = '';
        /** @type {?} */
        let range = this._editor.selection.getRange();
        switch (type) {
            case 'Bold':
                initText = 'Bold Text';
                selectedText = `**${selectedText || initText}**`;
                break;
            case 'Italic':
                initText = 'Italic Text';
                selectedText = `*${selectedText || initText}*`;
                startSize = 1;
                break;
            case 'Heading':
                initText = 'Heading';
                selectedText = `# ${selectedText || initText}`;
                break;
            case 'Refrence':
                initText = 'Refrence';
                selectedText = `> ${selectedText || initText}`;
                break;
            case 'Link':
                selectedText = `[](http://)`;
                startSize = 1;
                break;
            case 'Image':
                selectedText = `![](http://)`;
                break;
            case 'Ul':
                selectedText = `- ${selectedText || initText}`;
                break;
            case 'Ol':
                selectedText = `1. ${selectedText || initText}`;
                startSize = 3;
                break;
            case 'Table':
                selectedText =
                    `
        | ** ${selectedText || initText} ** | **Column Header** | **Column Header** | **Column Header** |
        |--------------|-----------------------|-------------------|--------------------|
        | Text         | Yes                   | Yes               | Yes                |
        | Text         | Yes                   | Yes               | Yes                |
        | Text         | Yes                   | Yes               | Yes                |
        | Text         | Yes                   | Yes               | Yes                |`;
                startSize = 4;
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
        this._btnToolbarHasBeenClicked = false;
        this._editor.focus();
    }
    /**
     * @return {?}
     */
    focus() {
        this._editor.focus();
    }
    /**
     * @return {?}
     */
    togglePreview() {
        this.showPreviewPanel = !this.showPreviewPanel;
        this.editorResize();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    previewPanelClick(event) {
        if (this.options.enablePreviewContentClick !== true) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    /**
     * @return {?}
     */
    fullScreen() {
        this.isFullScreen = !this.isFullScreen;
        this._renderer.setElementStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
        this.editorResize();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    mdEditorResize(size) {
        this.editorResize();
    }
    /**
     * @param {?=} timeOut
     * @return {?}
     */
    editorResize(timeOut = 100) {
        if (!this._editor)
            return;
        if (this._editorResizeTimer)
            clearTimeout(this._editorResizeTimer);
        this._editorResizeTimer = setTimeout(() => {
            this._editor.resize();
            this._editor.focus();
            this._btnToolbarHasBeenClicked = false;
        }, timeOut);
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragover(evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction)
            return;
        this.dragover = true;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDrop(evt) {
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
            .then(() => {
            return this.upload(evt.dataTransfer.files);
        })
            .then(data => {
            if (Array.isArray(data)) {
                /** @type {?} */
                let msg = [];
                for (let item of data) {
                    /** @type {?} */
                    let tempMsg = `[${item.name}](${item.url})`;
                    if (item.isImg) {
                        tempMsg = `!${tempMsg}`;
                    }
                    msg.push(tempMsg);
                }
                this.insertContent('Custom', msg.join('\r\n'));
            }
            else {
                console.warn('Invalid upload result. Please using follow this type `UploadResult`.');
            }
            this.isUploading = false;
            this.dragover = false;
        })
            .catch(err => {
            console.error(err);
            this.isUploading = false;
            this.dragover = false;
        });
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragleave(evt) {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        if (!this._hasUploadFunction)
            return;
        this.dragover = false;
    }
}
MarkdownEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'md-editor',
                template: "<div class=\"md-editor-container\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\n  [style.height]=\"height\" [style.width]=\"width\">\n  <div class=\"md-layout\">\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Bold.title\" (click)=\"insertContent('Bold')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Bold.hidden\">\n          <i [ngClass]=\"icons.Bold.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Italic.title\" (click)=\"insertContent('Italic')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Italic.hidden\">\n          <i [ngClass]=\"icons.Italic.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Heading.title\" (click)=\"insertContent('Heading')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Heading.hidden\">\n          <i [ngClass]=\"icons.Heading.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Refrence.title\" (click)=\"insertContent('Refrence')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Refrence.hidden\">\n          <i [ngClass]=\"icons.Refrence.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Link.title\" (click)=\"insertContent('Link')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Link.hidden\">\n          <i [ngClass]=\"icons.Link.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Image.title\" (click)=\"insertContent('Image')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Image.hidden\">\n          <i [ngClass]=\"icons.Image.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ul.title\" (click)=\"insertContent('Ul')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ul.hidden\">\n          <i [ngClass]=\"icons.Ul.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ol.title\" (click)=\"insertContent('Ol')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ol.hidden\">\n          <i [ngClass]=\"icons.Ol.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Code.title\" (click)=\"insertContent('Code')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Code.hidden\">\n          <i [ngClass]=\"icons.Code.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Table.title\" (click)=\"insertContent('Table')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Table.hidden\">\n          <i [ngClass]=\"icons.Table.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\n          [attr.title]=\"showPreviewPanel ? icons.TogglePreview.titleToggle : icons.TogglePreview.title\" (click)=\"togglePreview()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.TogglePreview.hidden\">\n          <i class=\"{{showPreviewPanel? icons.TogglePreview.iconClassToggle : icons.TogglePreview.iconClass}}\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group pull-right hide-split\">\n        <button class=\"btn btn-sm btn-default {{isFullScreen? icons.Fullscreen.activeClass : '' }}\" [title]=\"isFullScreen? icons.Fullscreen.titleToggle : icons.Fullscreen.title\" type=\"button\" (click)=\"fullScreen()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Fullscreen.hidden\">\n          <i [ngClass]=\"icons.Fullscreen.iconClass\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"editor-container\">\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\n        (dragover)=\"onDragover($event)\">\n        <div class=\"drag-container\">\n          <div class=\"upload-loading\">\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\n          </div>\n        </div>\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\n        <div class=\"editor-panel\">\n          <div class=\"ace-editor\" #aceEditor></div>\n        </div>\n      </div>\n      <div [style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\">\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\"></div>\n      </div>\n    </div>\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\n      <div class=\"text-right length-view\">\n        {{ markdownValue?.length }} / {{ maxlength }}\n      </div>\n      <div class=\"resize-btn\"></div>\n    </div>\n  </div>\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MarkdownEditorComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => MarkdownEditorComponent),
                        multi: true
                    }
                ],
                styles: [".md-editor-container{position:relative;height:100%;margin-bottom:15px;border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:99999999}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .tool-bar{background-color:#f5f5f5;border-bottom:1px solid rgba(0,0,0,.1)}.md-editor-container .md-layout .tool-bar .btn-group{padding:6px}.md-editor-container .md-layout .tool-bar .btn-group:first-child>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn-group>.btn:first-child::before{content:' ';background-color:#a9a9a9;width:1px;height:24px;left:-9px;top:2px;position:absolute}.md-editor-container .md-layout .tool-bar .btn-group.hide-split>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn{margin-bottom:0}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container>div .drag-container{display:none}.md-editor-container .md-layout .editor-container>div.dragover{position:relative}.md-editor-container .md-layout .editor-container>div.dragover .drag-container{display:block;position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:50px;color:#fff}.md-editor-container .md-layout .editor-container>div.dragover .drag-container.drag-container-mask{background-color:transparent;z-index:11}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading{display:flex;flex-direction:column;align-items:center}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading .text{font-size:20px;margin-top:10px}.md-editor-container .md-layout .editor-container .editor-panel{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{height:100%;border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .md-footer{background-color:#f0f0f0;border-top:1px solid rgba(0,0,0,.1);display:flex;align-items:center}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}"]
            }] }
];
/** @nocollapse */
MarkdownEditorComponent.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Attribute, args: ['required',] }] },
    { type: Number, decorators: [{ type: Attribute, args: ['maxlength',] }] },
    { type: Renderer },
    { type: DomSanitizer }
];
MarkdownEditorComponent.propDecorators = {
    aceEditorContainer: [{ type: ViewChild, args: ['aceEditor',] }],
    hideToolbar: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    preRender: [{ type: Input }],
    upload: [{ type: Input }],
    blur: [{ type: Output }],
    mode: [{ type: Input }],
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MarkdownEditorComponent.prototype.aceEditorContainer;
    /** @type {?} */
    MarkdownEditorComponent.prototype.hideToolbar;
    /** @type {?} */
    MarkdownEditorComponent.prototype.height;
    /** @type {?} */
    MarkdownEditorComponent.prototype.width;
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
    MarkdownEditorComponent.prototype.icons;
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
    MarkdownEditorComponent.prototype._btnToolbarHasBeenClicked;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaC1tZC1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvbWQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXdCekQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQTRPbEMsWUFDZ0MsV0FBb0IsS0FBSyxFQUN4QixZQUFvQixDQUFDLENBQUMsRUFDN0MsU0FBbUIsRUFDbkIsYUFBMkI7UUFITCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQzdDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUF6RnJCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBVyxPQUFPLENBQUM7UUFDekIsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQUd0QixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQWdDeEMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVwQixVQUFLLEdBQWdDLEVBQUUsQ0FBQztRQUN4QyxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQXVCNUIsOEJBQXlCLEdBQVksS0FBSyxDQUFDO1FBSTNDLG1CQUFjLEdBQW1C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RDs7OzswQ0E4T0csU0FBUyxTQUFDLFVBQVU7eUNBQ3BCLFNBQVMsU0FBQyxXQUFXO1lBeFFpQixRQUFRO1lBRTFDLFlBQVk7OztpQ0E4S2xCLFNBQVMsU0FBQyxXQUFXOzBCQUNyQixLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsTUFBTTttQkFFTixLQUFLO3NCQWFMLEtBQUs7Ozs7SUFyQk4scURBQThEOztJQUM5RCw4Q0FBNkM7O0lBQzdDLHlDQUF5Qzs7SUFDekMsd0NBQXVDOztJQUN2Qyw0Q0FBb0M7O0lBQ3BDLHlDQUFpQzs7SUFDakMsdUNBQWdEOzs7OztJQWFoRCx3Q0FBc0I7Ozs7O0lBbUJ0QiwyQ0FBMkI7O0lBRTNCLHdDQUErQzs7SUFDL0MsbURBQXdDOztJQUN4QywrQ0FBcUM7O0lBQ3JDLDhDQUF3Qjs7SUFDeEIsMkNBQWlDOztJQUNqQyw4Q0FBb0M7Ozs7O0lBb0JwQyxpREFBNEI7Ozs7O0lBRTVCLDBDQUFxQjs7Ozs7SUFDckIsNERBQW1EOzs7OztJQUNuRCxxREFBZ0M7Ozs7O0lBQ2hDLHFEQUFnQzs7Ozs7SUFDaEMsNkNBQXdCOzs7OztJQUN4QixpREFNRTs7Ozs7SUFLRiw0Q0FBb0M7Ozs7O0lBQ3BDLDZDQUErQjs7SUFHN0IsMkNBQXVEOztJQUN2RCw0Q0FBcUQ7Ozs7O0lBQ3JELDRDQUEyQjs7Ozs7SUFDM0IsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYsIFJlbmRlcmVyLCBBdHRyaWJ1dGUsIElucHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWRFZGl0b3JPcHRpb24sIEljb25PcHRpb25zLCBEZWZhdWx0SWNvbk9wdGlvbnMgfSBmcm9tICcuL21kLWVkaXRvci50eXBlcyc7XG5cbmRlY2xhcmUgbGV0IGFjZTogYW55O1xuZGVjbGFyZSBsZXQgbWFya2VkOiBhbnk7XG5kZWNsYXJlIGxldCBobGpzOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kLWVkaXRvcicsXG4gIHN0eWxlVXJsczogWycuL21kLWVkaXRvci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZC1lZGl0b3IuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWFya2Rvd25FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXJrZG93bkVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxuIH0pXG5leHBvcnQgY2xhc3MgTWFya2Rvd25FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBEZWZhdWx0SWNvbk9wdGlvbnMge1xuXG4gIGdldCBCT0xEX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkJvbGRcIjsgfVxuICBnZXQgSVRBTElDX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkl0YWxpY1wiOyB9XG4gIGdldCBIRUFESU5HX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkhlYWRpbmdcIjsgfVxuICBnZXQgUkVGUkVOQ0VfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiUmVmcmVuY2VcIjsgfVxuICBnZXQgTElOS19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJMaW5rXCI7IH1cbiAgZ2V0IElNQUdFX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkltYWdlXCI7IH1cbiAgZ2V0IFVMX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIlVsXCI7IH1cbiAgZ2V0IE9MX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIk9sXCI7IH1cbiAgZ2V0IENPREVfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29kZVwiOyB9XG4gIGdldCBUQUJMRV9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUYWJsZVwiOyB9XG4gIGdldCBUT0dHTEVfUFJFVklFV19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUb2dnbGVQcmV2aWV3XCI7IH1cbiAgZ2V0IEZVTExTQ1JFRU5fSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiRnVsbHNjcmVlblwiOyB9XG5cbiAgZ2V0IEJPTEQoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuQk9MRF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWJvbGRcIixcbiAgICAgdGl0bGU6IFwiQm9sZFwiXG4gICB9O1xuIH1cbiAgZ2V0IElUQUxJQygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5JVEFMSUNfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1pdGFsaWNcIixcbiAgICAgdGl0bGU6IFwiSXRhbGljXCJcbiAgIH07XG4gfVxuICBnZXQgSEVBRElORygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5IRUFESU5HX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaGVhZGVyXCIsXG4gICAgIHRpdGxlOiBcIkhlYWRpbmdcIlxuICAgfTtcbiB9XG4gIGdldCBSRUZSRU5DRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5SRUZSRU5DRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXF1b3RlLWxlZnRcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IExJTksoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuSEVBRElOR19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpbmtcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IElNQUdFKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLklNQUdFX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaW1hZ2VcIixcbiAgICAgdGl0bGU6IFwiSW1hZ2VcIlxuICAgfTtcbiB9XG4gIGdldCBVTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5VTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3QtdWxcIixcbiAgICAgdGl0bGU6IFwiVW5vcmRlcmVkIExpc3RcIlxuICAgfTtcbiB9XG4gIGdldCBPTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3Qtb2xcIixcbiAgICAgdGl0bGU6IFwiT3JkZXJlZCBMaXN0XCJcbiAgIH07XG4gfVxuICBnZXQgQ09ERSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3Qtb2xcIixcbiAgICAgdGl0bGU6IFwiT3JkZXJlZCBMaXN0XCJcbiAgIH07XG4gfVxuICBnZXQgVEFCTEUoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVEFCTEVfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS10YWJsZVwiLFxuICAgICB0aXRsZTogXCJUYWJsZVwiXG4gICB9O1xuIH1cbiAgZ2V0IFRPR0dMRV9QUkVWSUVXKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLlRPR0dMRV9QUkVWSUVXX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtZXllXCIsXG4gICAgIGljb25DbGFzc1RvZ2dsZTogXCJmYSBmYS1leWUtc2xhc2hcIixcbiAgICAgdGl0bGU6IFwiU2hvdyBQcmV2aWV3XCIsXG4gICAgIHRpdGxlVG9nZ2xlOiBcIkhpZGUgUHJldmlld1wiXG4gICB9O1xuIH1cbiAgZ2V0IEZVTExTQ1JFRU4oKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVE9HR0xFX1BSRVZJRVdfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1hcnJvd3MtYWx0XCIsXG4gICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZVwiLFxuICAgICB0aXRsZTogXCJGdWxsc2NyZWVuXCIsXG4gICAgIHRpdGxlVG9nZ2xlOiBcIlJlc3RvcmVcIlxuICAgfTtcbiB9XG5cbiAgZ2V0IEFMTF9JQ09OUygpOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30ge1xuICAgbGV0IGFsbEljb25zOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30gPSB7fTtcbiAgIGFsbEljb25zW3RoaXMuQk9MRF9JRF0gPSB0aGlzLkJPTEQ7XG4gICBhbGxJY29uc1t0aGlzLklUQUxJQ19JRF0gPSB0aGlzLklUQUxJQztcbiAgIGFsbEljb25zW3RoaXMuSEVBRElOR19JRF0gPSB0aGlzLkhFQURJTkc7XG4gICBhbGxJY29uc1t0aGlzLlJFRlJFTkNFX0lEXSA9IHRoaXMuUkVGUkVOQ0U7XG4gICBhbGxJY29uc1t0aGlzLkxJTktfSURdID0gdGhpcy5MSU5LO1xuICAgYWxsSWNvbnNbdGhpcy5JTUFHRV9JRF0gPSB0aGlzLklNQUdFO1xuICAgYWxsSWNvbnNbdGhpcy5VTF9JRF0gPSB0aGlzLlVMO1xuICAgYWxsSWNvbnNbdGhpcy5PTF9JRF0gPSB0aGlzLk9MO1xuICAgYWxsSWNvbnNbdGhpcy5DT0RFX0lEXSA9IHRoaXMuQ09ERTtcbiAgIGFsbEljb25zW3RoaXMuVEFCTEVfSURdID0gdGhpcy5UQUJMRTtcbiAgIGFsbEljb25zW3RoaXMuVE9HR0xFX1BSRVZJRVdfSURdID0gdGhpcy5UT0dHTEVfUFJFVklFVztcbiAgIGFsbEljb25zW3RoaXMuRlVMTFNDUkVFTl9JRF0gPSB0aGlzLkZVTExTQ1JFRU47XG4gICByZXR1cm4gYWxsSWNvbnM7XG4gfVxuXG4gIGdldCBBTExfSUNPTl9JRFMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICByZXR1cm4gW1xuICAgICB0aGlzLkJPTERfSUQsXG4gICAgIHRoaXMuSVRBTElDX0lELFxuICAgICB0aGlzLkhFQURJTkdfSUQsXG4gICAgIHRoaXMuUkVGUkVOQ0VfSUQsXG4gICAgIHRoaXMuTElOS19JRCxcbiAgICAgdGhpcy5JTUFHRV9JRCxcbiAgICAgdGhpcy5VTF9JRCxcbiAgICAgdGhpcy5PTF9JRCxcbiAgICAgdGhpcy5DT0RFX0lELFxuICAgICB0aGlzLlRBQkxFX0lELFxuICAgICB0aGlzLlRPR0dMRV9QUkVWSUVXX0lELFxuICAgICB0aGlzLkZVTExTQ1JFRU5fSURcbiAgIF07XG4gfVxuXG4gIEBWaWV3Q2hpbGQoJ2FjZUVkaXRvcicpIHB1YmxpYyBhY2VFZGl0b3JDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlVG9vbGJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBzdHJpbmcgPSBcIjMwMHB4XCI7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gXCIxMDAlXCI7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcmVSZW5kZXI6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkOiBGdW5jdGlvbjtcbiAgQE91dHB1dCgpIHB1YmxpYyBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgfHwgJ2VkaXRvcic7XG4gIH1cblxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdlZGl0b3InICYmIHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdwcmV2aWV3JykpIHtcbiAgICAgIHZhbHVlID0gJ2VkaXRvcic7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBvcHRpb25zKCk6IE1kRWRpdG9yT3B0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucyB8fCB7fTtcbiAgfVxuICBwdWJsaWMgc2V0IG9wdGlvbnModmFsdWU6IE1kRWRpdG9yT3B0aW9uKSB7XG4gICAgY29uc3QgZGVmYXVsdEljb25PcHRpb25zOiBEZWZhdWx0SWNvbk9wdGlvbnMgPSB0aGlzO1xuICAgIHRoaXMuX2RlZmF1bHRPcHRpb24gPSBkZWZhdWx0SWNvbk9wdGlvbnMuQUxMX0lDT05TO1xuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuX2RlZmF1bHRPcHRpb24sIHt9LCB2YWx1ZSk7XG4gICAgdGhpcy5pY29ucyA9IGRlZmF1bHRJY29uT3B0aW9ucy5BTExfSUNPTlM7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaWNvbnMpIHtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9vcHRpb25zLmljb25zKSkge1xuICAgICAgICBpZihkZWZhdWx0SWNvbk9wdGlvbnMuQUxMX0lDT05fSURTLmluZGV4T2Yoa2V5KSE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuaWNvbnNba2V5XSA9IHRoaXMuX29wdGlvbnMuaWNvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgaWNvbnM6IHtbaWQ6IHN0cmluZ106IEljb25PcHRpb25zfSA9IHt9O1xuICBwdWJsaWMgc2hvd1ByZXZpZXdQYW5lbDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc0Z1bGxTY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHByZXZpZXdIdG1sOiBhbnk7XG4gIHB1YmxpYyBkcmFnb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNVcGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IG1hcmtkb3duVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Rvd25WYWx1ZSB8fCAnJztcbiAgfVxuICBwdWJsaWMgc2V0IG1hcmtkb3duVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX21hcmtkb3duVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5wcmVSZW5kZXIgJiYgdGhpcy5wcmVSZW5kZXIgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgdmFsdWUgPSB0aGlzLnByZVJlbmRlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fcmVuZGVyTWFya1RpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLl9yZW5kZXJNYXJrVGltZW91dCk7XG4gICAgICB0aGlzLl9yZW5kZXJNYXJrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgaHRtbCA9IG1hcmtlZCh2YWx1ZSB8fCAnJywgdGhpcy5fbWFya2VkT3B0KTtcbiAgICAgICAgdGhpcy5wcmV2aWV3SHRtbCA9IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX21hcmtkb3duVmFsdWU6IGFueTtcblxuICBwcml2YXRlIF9lZGl0b3I6IGFueTtcbiAgcHJpdmF0ZSBfYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2VkaXRvclJlc2l6ZVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgX3JlbmRlck1hcmtUaW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgX21hcmtlZE9wdDogYW55O1xuICBwcml2YXRlIF9kZWZhdWx0T3B0aW9uOiBNZEVkaXRvck9wdGlvbiA9IHtcbiAgICBzaG93Qm9yZGVyOiB0cnVlLFxuICAgIGljb25zOiB7fSxcbiAgICBzY3JvbGxQYXN0RW5kOiAwLFxuICAgIGVuYWJsZVByZXZpZXdDb250ZW50Q2xpY2s6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2VcbiAgfTtcbiAgcHJpdmF0ZSBnZXQgX2hhc1VwbG9hZEZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZCAmJiB0aGlzLnVwbG9hZCBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAQXR0cmlidXRlKCdyZXF1aXJlZCcpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIEBBdHRyaWJ1dGUoJ21heGxlbmd0aCcpIHB1YmxpYyBtYXhsZW5ndGg6IG51bWJlciA9IC0xLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbiAgICBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgbWFya2VkUmVuZGVyID0gbmV3IG1hcmtlZC5SZW5kZXJlcigpO1xuICAgIG1hcmtlZFJlbmRlci5jb2RlID0gKGNvZGU6IGFueSwgbGFuZ3VhZ2U6IGFueSkgPT4ge1xuICAgICAgbGV0IHZhbGlkTGFuZyA9ICEhKGxhbmd1YWdlICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpKTtcbiAgICAgIGxldCBoaWdobGlnaHRlZCA9IHZhbGlkTGFuZyA/IGhsanMuaGlnaGxpZ2h0KGxhbmd1YWdlLCBjb2RlKS52YWx1ZSA6IGNvZGU7XG4gICAgICByZXR1cm4gYDxwcmUgc3R5bGU9XCJwYWRkaW5nOiAwOyBib3JkZXItcmFkaXVzOiAwO1wiPjxjb2RlIGNsYXNzPVwiaGxqcyAke2xhbmd1YWdlfVwiPiR7aGlnaGxpZ2h0ZWR9PC9jb2RlPjwvcHJlPmA7XG4gICAgfTtcbiAgICBtYXJrZWRSZW5kZXIudGFibGUgPSAoaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCI+XFxuPHRoZWFkPlxcbiR7aGVhZGVyfTwvdGhlYWQ+XFxuPHRib2R5PlxcbiR7Ym9keX08L3Rib2R5PlxcbjwvdGFibGU+XFxuYDtcbiAgICB9O1xuICAgIG1hcmtlZFJlbmRlci5saXN0aXRlbSA9ICh0ZXh0OiBhbnkpID0+IHtcbiAgICAgIGlmICgvXlxccypcXFtbeCBdXFxdXFxzKi8udGVzdCh0ZXh0KSkge1xuICAgICAgICB0ZXh0ID0gdGV4dFxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzKlxcWyBcXF1cXHMqLywgJzxpIGNsYXNzPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT1cIm1hcmdpbjogMCAwLjJlbSAwLjI1ZW0gLTEuNmVtO1wiPjwvaT4gJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxccypcXFt4XFxdXFxzKi8sICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrLXNxdWFyZVwiIHN0eWxlPVwibWFyZ2luOiAwIDAuMmVtIDAuMjVlbSAtMS42ZW07XCI+PC9pPiAnKTtcbiAgICAgICAgcmV0dXJuIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOiBub25lO1wiPiR7dGV4dH08L2xpPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYDxsaT4ke3RleHR9PC9saT5gO1xuICAgICAgfVxuICAgIH07XG4gICAgbGV0IG1hcmtlZGpzT3B0ID0ge1xuICAgICAgcmVuZGVyZXI6IG1hcmtlZFJlbmRlcixcbiAgICAgIGhpZ2hsaWdodDogKGNvZGU6IGFueSkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLl9tYXJrZWRPcHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMubWFya2VkanNPcHQsIG1hcmtlZGpzT3B0KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsZXQgZWRpdG9yRWxlbWVudCA9IHRoaXMuYWNlRWRpdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fZWRpdG9yID0gYWNlLmVkaXQoZWRpdG9yRWxlbWVudCk7XG4gICAgdGhpcy5fZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICAgIHRoaXMuX2VkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV3JhcE1vZGUodHJ1ZSk7XG4gICAgdGhpcy5fZWRpdG9yLmdldFNlc3Npb24oKS5zZXRNb2RlKFwiYWNlL21vZGUvbWFya2Rvd25cIik7XG4gICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHRoaXMubWFya2Rvd25WYWx1ZSB8fCAnJywgMSk7XG4gICAgdGhpcy5fZWRpdG9yLnNldE9wdGlvbignc2Nyb2xsUGFzdEVuZCcsIHRoaXMuX29wdGlvbnMuc2Nyb2xsUGFzdEVuZCB8fCAwKTtcblxuICAgIHRoaXMuX2VkaXRvci5vbihcImNoYW5nZVwiLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLm1hcmtkb3duVmFsdWUgPSB0aGlzLl9lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VkaXRvci5vbihcImJsdXJcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgaWYoIXRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCkge1xuICAgICAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VkaXRvciAmJiB0aGlzLl9lZGl0b3IuZGVzdHJveSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHZhbHVlIHx8ICcnLCAxKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLm1hcmtkb3duVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGxlbmd0aCA+IDAgJiYgdGhpcy5tYXJrZG93blZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB7IG1heGxlbmd0aDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9vbGJhckJ1dHRvbk1vdXNlRG93bigpIHtcbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5zZXJ0Q29udGVudCh0eXBlOiBzdHJpbmcsIGN1c3RvbUNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLl9lZGl0b3IuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGVkVGV4dDtcbiAgICBsZXQgc3RhcnRTaXplID0gMjtcbiAgICBsZXQgaW5pdFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIGxldCByYW5nZSA9IHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uZ2V0UmFuZ2UoKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0JvbGQnOlxuICAgICAgICBpbml0VGV4dCA9ICdCb2xkIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKioke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0qKmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSXRhbGljJzpcbiAgICAgICAgaW5pdFRleHQgPSAnSXRhbGljIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKiR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fSpgO1xuICAgICAgICBzdGFydFNpemUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hlYWRpbmcnOlxuICAgICAgICBpbml0VGV4dCA9ICdIZWFkaW5nJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCMgJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSZWZyZW5jZSc6XG4gICAgICAgIGluaXRUZXh0ID0gJ1JlZnJlbmNlJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYD4gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYFtdKGh0dHA6Ly8pYDtcbiAgICAgICAgc3RhcnRTaXplID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAhW10oaHR0cDovLylgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VsJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYC0gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ09sJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYDEuICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWBcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWJsZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9XG4gICAgICAgIGBcbiAgICAgICAgfCAqKiAke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0gKiogfCAqKkNvbHVtbiBIZWFkZXIqKiB8ICoqQ29sdW1uIEhlYWRlcioqIHwgKipDb2x1bW4gSGVhZGVyKiogfFxuICAgICAgICB8LS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgfCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8XG4gICAgICAgIHwgVGV4dCAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgfFxuICAgICAgICB8IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxcbiAgICAgICAgfCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8YDtcbiAgICAgICAgc3RhcnRTaXplID0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDb2RlJzpcbiAgICAgICAgaW5pdFRleHQgPSAnU291cmNlIENvZGUnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBcImBgYGxhbmd1YWdlXFxyXFxuXCIgKyAoc2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0KSArIFwiXFxyXFxuYGBgXCI7XG4gICAgICAgIHN0YXJ0U2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ3VzdG9tJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gY3VzdG9tQ29udGVudDtcbiAgICAgICAgc3RhcnRTaXplID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX2VkaXRvci5zZXNzaW9uLnJlcGxhY2UocmFuZ2UsIHNlbGVjdGVkVGV4dCk7XG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICByYW5nZS5zdGFydC5jb2x1bW4gKz0gc3RhcnRTaXplO1xuICAgICAgcmFuZ2UuZW5kLmNvbHVtbiA9IHJhbmdlLnN0YXJ0LmNvbHVtbiArIGluaXRUZXh0Lmxlbmd0aDtcbiAgICAgIHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uc2V0UmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgdG9nZ2xlUHJldmlldygpIHtcbiAgICB0aGlzLnNob3dQcmV2aWV3UGFuZWwgPSAhdGhpcy5zaG93UHJldmlld1BhbmVsO1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBwcmV2aWV3UGFuZWxDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZVByZXZpZXdDb250ZW50Q2xpY2sgIT09IHRydWUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdWxsU2NyZWVuKCkge1xuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gIXRoaXMuaXNGdWxsU2NyZWVuO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3dZJywgdGhpcy5pc0Z1bGxTY3JlZW4gPyAnaGlkZGVuJyA6ICdhdXRvJyk7XG4gICAgdGhpcy5lZGl0b3JSZXNpemUoKTtcbiAgfVxuXG4gIG1kRWRpdG9yUmVzaXplKHNpemU6IGFueSkge1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBlZGl0b3JSZXNpemUodGltZU91dDogbnVtYmVyID0gMTAwKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVyblxuICAgIGlmICh0aGlzLl9lZGl0b3JSZXNpemVUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX2VkaXRvclJlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLl9lZGl0b3JSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZWRpdG9yLnJlc2l6ZSgpO1xuICAgICAgdGhpcy5fZWRpdG9yLmZvY3VzKCk7XG4gICAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB9LCB0aW1lT3V0KTtcbiAgfVxuXG4gIG9uRHJhZ292ZXIoZXZ0OiBEcmFnRXZlbnQpIHtcbiAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9oYXNVcGxvYWRGdW5jdGlvbikgcmV0dXJuO1xuICAgIHRoaXMuZHJhZ292ZXIgPSB0cnVlO1xuICB9XG5cbiAgb25Ecm9wKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24gfHwgdGhpcy5pc1VwbG9hZGluZykgcmV0dXJuO1xuXG4gICAgaWYgKCFldnQuZGF0YVRyYW5zZmVyLmZpbGVzIHx8IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkKGV2dC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgIGxldCBtc2cgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wTXNnID0gYFske2l0ZW0ubmFtZX1dKCR7aXRlbS51cmx9KWA7XG4gICAgICAgICAgICBpZiAoaXRlbS5pc0ltZykge1xuICAgICAgICAgICAgICB0ZW1wTXNnID0gYCEke3RlbXBNc2d9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1zZy5wdXNoKHRlbXBNc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmluc2VydENvbnRlbnQoJ0N1c3RvbScsIG1zZy5qb2luKCdcXHJcXG4nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHVwbG9hZCByZXN1bHQuIFBsZWFzZSB1c2luZyBmb2xsb3cgdGhpcyB0eXBlIGBVcGxvYWRSZXN1bHRgLicpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRHJhZ2xlYXZlKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24pIHJldHVybjtcbiAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==