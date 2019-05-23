/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, forwardRef, Renderer, Attribute, Input, ElementRef, EventEmitter, Output, TemplateRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * @template T
 */
export class OperationResult {
}
if (false) {
    /** @type {?} */
    OperationResult.prototype.success;
    /** @type {?} */
    OperationResult.prototype.message;
    /** @type {?} */
    OperationResult.prototype.result;
}
export class MarkdownEditorComponent {
    /**
     * @param {?=} required
     * @param {?=} maxlength
     * @param {?=} _renderer
     * @param {?=} _domSanitizer
     * @param {?=} http
     * @param {?=} modalService
     */
    constructor(required = false, maxlength = -1, _renderer, _domSanitizer, http, modalService) {
        this.required = required;
        this.maxlength = maxlength;
        this._renderer = _renderer;
        this._domSanitizer = _domSanitizer;
        this.http = http;
        this.modalService = modalService;
        this.hideToolbar = false;
        this.height = "357px";
        this.width = "100%";
        this.blur = new EventEmitter();
        this.screenHeight = window.innerHeight;
        /**
         * The remote invocation promise by requested path
         */
        this.remoteInvocationPromiseByPath = new Map();
        this.fileUploadOptions = {
            listFilesUrl: "",
            uploadFileUrl: "",
            isVideoList: "",
            getToken: () => {
                return new Promise((resolve, reject) => {
                    resolve("");
                });
            },
            parametersToAdd: new Map([["path", "upload/taxonomia-equipo-bmv"]])
        };
        this._defaultOption = {
            showBorder: true,
            icons: {},
            scrollPastEnd: 0,
            enablePreviewContentClick: false,
            resizable: false,
            getToken: () => {
                return new Promise((resolve, reject) => {
                    resolve("");
                });
            },
            parametersToAdd: new Map()
        };
        this._options = {};
        this.icons = {};
        this.showPreviewPanel = true;
        this.isFullScreen = false;
        this.dragover = false;
        this.isUploading = false;
        this._btnToolbarHasBeenClicked = false;
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
            id: this.LINK_ID,
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
            iconClass: "fa fa-file-code-o",
            title: "Code"
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
     * @param {?=} event
     * @return {?}
     */
    onResize(event) {
        this.screenHeight = window.innerHeight;
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
        this._defaultOption.icons = defaultIconOptions.ALL_ICONS;
        this._options = Object.assign(this._defaultOption, {}, value);
        this.icons = defaultIconOptions.ALL_ICONS;
        if (this._options.icons) {
            for (let key of Object.keys(this._options.icons)) {
                if (defaultIconOptions.ALL_ICON_IDS.indexOf(key) !== -1) {
                    this.icons[key] = this._options.icons[key];
                }
            }
        }
        if (value.uploadFileUrl) {
            this.fileUploadOptions.uploadFileUrl = value.uploadFileUrl;
        }
        if (value.listFilesUrl) {
            this.fileUploadOptions.listFilesUrl = value.listFilesUrl;
        }
        if (value.isVideoList) {
            this.fileUploadOptions.isVideoList = value.isVideoList;
        }
        if (value.getToken) {
            this.fileUploadOptions.getToken = value.getToken;
        }
        if (value.parametersToAdd) {
            this.fileUploadOptions.parametersToAdd = value.parametersToAdd;
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
                if (this.isFullScreen) {
                    this.isFullScreen = !this.isFullScreen;
                    this._renderer.setElementStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
                    this.editorResize();
                    this.blur.emit(e);
                }
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
                selectedText = `
| ** ${selectedText || initText} ** | **Column Header** | **Column Header** | **Column Header** |
|--------------|-----------------------|-------------------|--------------------|
| Text         | Yes                   | Yes               | Yes                |
| Text         | Yes                   | Yes               | Yes                |
| Text         | Yes                   | Yes               | Yes                |
| Text         | Yes                   | Yes               | Yes                |`;
                startSize = 6;
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
    selectImage() {
        this.openModal(this.modalTemplate);
    }
    /**
     * @param {?} image
     * @return {?}
     */
    onFileSelected(image) {
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
        selectedText = "![](" + image.url + ")";
        this._editor.session.replace(range, selectedText);
        if (!isSelected) {
            range.start.column += startSize;
            range.end.column = range.start.column + initText.length;
            this._editor.selection.setRange(range);
        }
        this.modalRef.close();
        this._editor.focus();
    }
    /**
     * @param {?} content
     * @return {?}
     */
    openModal(content) {
        return new Promise((resolve, reject) => {
            this.modalRef = this.modalService.open(content);
            this.modalRef.result.then((result) => {
                this._btnToolbarHasBeenClicked = false;
                resolve(result);
            }, (reason) => {
                this._btnToolbarHasBeenClicked = false;
                resolve(null);
            });
        });
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
     * @return {?}
     */
    processClickToolbar() {
        this._btnToolbarHasBeenClicked = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    previewPanelClick(event) {
        this._btnToolbarHasBeenClicked = false;
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
                template: "<div class=\"md-editor-container\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\n  [style.height]=\"height\" [style.width]=\"width\">\n  <div class=\"md-layout\">\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\" (mousedown)=\"toolbarButtonMouseDown()\" (click)=\"processClickToolbar()\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Bold.title\" (click)=\"insertContent('Bold')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Bold.hidden\">\n          <i [ngClass]=\"icons.Bold.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Italic.title\" (click)=\"insertContent('Italic')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Italic.hidden\">\n          <i [ngClass]=\"icons.Italic.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Heading.title\" (click)=\"insertContent('Heading')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Heading.hidden\">\n          <i [ngClass]=\"icons.Heading.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Refrence.title\" (click)=\"insertContent('Refrence')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Refrence.hidden\">\n          <i [ngClass]=\"icons.Refrence.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Link.title\" (click)=\"insertContent('Link')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Link.hidden\">\n          <i [ngClass]=\"icons.Link.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Image.title\" (click)=\"selectImage()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Image.hidden\">\n          <i [ngClass]=\"icons.Image.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ul.title\" (click)=\"insertContent('Ul')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ul.hidden\">\n          <i [ngClass]=\"icons.Ul.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ol.title\" (click)=\"insertContent('Ol')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ol.hidden\">\n          <i [ngClass]=\"icons.Ol.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Code.title\" (click)=\"insertContent('Code')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Code.hidden\">\n          <i [ngClass]=\"icons.Code.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Table.title\" (click)=\"insertContent('Table')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Table.hidden\">\n          <i [ngClass]=\"icons.Table.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\n          [attr.title]=\"showPreviewPanel ? icons.TogglePreview.titleToggle : icons.TogglePreview.title\" (click)=\"togglePreview()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.TogglePreview.hidden\">\n          <i class=\"{{showPreviewPanel? icons.TogglePreview.iconClassToggle : icons.TogglePreview.iconClass}}\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group pull-right hide-split\">\n        <button class=\"btn btn-sm btn-default {{isFullScreen? icons.Fullscreen.activeClass : '' }}\" [title]=\"isFullScreen? icons.Fullscreen.titleToggle : icons.Fullscreen.title\" type=\"button\" (click)=\"fullScreen()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Fullscreen.hidden\">\n          <i [ngClass]=\"icons.Fullscreen.iconClass\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"editor-container\">\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\n        (dragover)=\"onDragover($event)\">\n        <div class=\"drag-container\">\n          <div class=\"upload-loading\">\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\n          </div>\n        </div>\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\n        <div class=\"editor-panel\">\n          <div class=\"ace-editor\" #aceEditor></div>\n        </div>\n      </div>\n      <div [style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\" (mousedown)=\"toolbarButtonMouseDown()\">\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\" [style.height]=\"isFullScreen ? (screenHeight - 57) + 'px' : height + 'px'\"></div>\n      </div>\n    </div>\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\n      <div class=\"text-right length-view\">\n        {{ markdownValue?.length }} / {{ maxlength }}\n      </div>\n      <div class=\"resize-btn\"></div>\n    </div>\n  </div>\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\n</div>\n<ng-template #modalTemplate let-modal>\n  <ngx-file-list-picker #imageListPicker [options]=\"fileUploadOptions\" (fileSelected)=\"onFileSelected($event)\" ></ngx-file-list-picker>\n</ng-template>\n",
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
                styles: [".md-editor-container{position:relative;height:100%;margin-bottom:15px;border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:1000}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .tool-bar{background-color:#f5f5f5;border-bottom:1px solid rgba(0,0,0,.1)}.md-editor-container .md-layout .tool-bar .btn-group{padding:6px}.md-editor-container .md-layout .tool-bar .btn-group:first-child>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn-group>.btn:first-child::before{content:' ';background-color:#a9a9a9;width:1px;height:24px;left:-9px;top:2px;position:absolute}.md-editor-container .md-layout .tool-bar .btn-group.hide-split>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn{margin-bottom:0}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container>div .drag-container{display:none}.md-editor-container .md-layout .editor-container>div.dragover{position:relative}.md-editor-container .md-layout .editor-container>div.dragover .drag-container{display:block;position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:50px;color:#fff}.md-editor-container .md-layout .editor-container>div.dragover .drag-container.drag-container-mask{background-color:transparent;z-index:11}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading{display:flex;flex-direction:column;align-items:center}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading .text{font-size:20px;margin-top:10px}.md-editor-container .md-layout .editor-container .editor-panel{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .md-footer{background-color:#f0f0f0;border-top:1px solid rgba(0,0,0,.1);display:flex;align-items:center}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}"]
            }] }
];
/** @nocollapse */
MarkdownEditorComponent.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Attribute, args: ['required',] }] },
    { type: Number, decorators: [{ type: Attribute, args: ['maxlength',] }] },
    { type: Renderer },
    { type: DomSanitizer },
    { type: HttpClient },
    { type: NgbModal }
];
MarkdownEditorComponent.propDecorators = {
    aceEditorContainer: [{ type: ViewChild, args: ['aceEditor',] }],
    modalTemplate: [{ type: ViewChild, args: ['modalTemplate',] }],
    hideToolbar: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    preRender: [{ type: Input }],
    upload: [{ type: Input }],
    blur: [{ type: Output }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    mode: [{ type: Input }],
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MarkdownEditorComponent.prototype.aceEditorContainer;
    /** @type {?} */
    MarkdownEditorComponent.prototype.modalTemplate;
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
    /** @type {?} */
    MarkdownEditorComponent.prototype.screenHeight;
    /** @type {?} */
    MarkdownEditorComponent.prototype.images;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._mode;
    /**
     * The remote invocation promise by requested path
     * @type {?}
     */
    MarkdownEditorComponent.prototype.remoteInvocationPromiseByPath;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype.modalRef;
    /** @type {?} */
    MarkdownEditorComponent.prototype.imageListPicker;
    /** @type {?} */
    MarkdownEditorComponent.prototype.fileUploadOptions;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype._defaultOption;
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
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    MarkdownEditorComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaC1tZC1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvbWQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLGlCQUFpQixFQUF3QixhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDdEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXpELE9BQU8sRUFBZSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsUUFBUSxFQUFtQyxNQUFNLDRCQUE0QixDQUFDOzs7O0FBTXRGLE1BQU0sT0FBTyxlQUFlO0NBVTNCOzs7SUFQQyxrQ0FBd0I7O0lBR3hCLGtDQUF1Qjs7SUFHdkIsaUNBQWlCOztBQW9CbkIsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7O0lBZ1NsQyxZQUNnQyxXQUFvQixLQUFLLEVBQ3hCLFlBQW9CLENBQUMsQ0FBQyxFQUM3QyxTQUFtQixFQUNuQixhQUEyQixFQUMzQixJQUFnQixFQUNoQixZQUFzQjtRQUxBLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDN0MsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBOUloQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQVcsT0FBTyxDQUFDO1FBQ3pCLFVBQUss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O0lBQ3JCLDREQUFtRDs7Ozs7SUFDbkQscURBQWdDOzs7OztJQUNoQyxxREFBZ0M7Ozs7O0lBQ2hDLDZDQUF3Qjs7Ozs7SUFNeEIsNENBQW9DOzs7OztJQUNwQyw2Q0FBK0I7O0lBRzdCLDJDQUF1RDs7SUFDdkQsNENBQXFEOzs7OztJQUNyRCw0Q0FBMkI7Ozs7O0lBQzNCLGdEQUFtQzs7Ozs7SUFDbkMsdUNBQXdCOzs7OztJQUN4QiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiwgUmVuZGVyZXIsIEF0dHJpYnV0ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNZEVkaXRvck9wdGlvbiwgSWNvbk9wdGlvbnMsIERlZmF1bHRJY29uT3B0aW9ucyB9IGZyb20gJy4vbWQtZWRpdG9yLnR5cGVzJztcbmltcG9ydCB7IE5neEltYWdlTGlzdFBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25neC1pbWFnZS1saXN0LXBpY2tlcic7XG5pbXBvcnQgeyBJRmlsZVVwbG9hZE9wdGlvbnMsIElJbWFnZURlZmluaXRpb24gfSBmcm9tICduZ3gtaW1hZ2UtbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7TmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMsIE5nYk1vZGFsUmVmfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmRlY2xhcmUgbGV0IGFjZTogYW55O1xuZGVjbGFyZSBsZXQgbWFya2VkOiBhbnk7XG5kZWNsYXJlIGxldCBobGpzOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25SZXN1bHQ8VD4ge1xuXG4gIC8qIEZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBvcmNjZXNzIHN1Y2Vzcy4gKi9cbiAgcHVibGljIHN1Y2Nlc3M6IGJvb2xlYW47XG5cbiAgLyogVGhlIHJlc3VsdCBtZXNzYWdlLiAqL1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qIFRoZSByZXN1bHQgb2YgdGhlIHJlcXVlc3QuICovXG4gIHB1YmxpYyByZXN1bHQ6IFQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kLWVkaXRvcicsXG4gIHN0eWxlVXJsczogWycuL21kLWVkaXRvci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZC1lZGl0b3IuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWFya2Rvd25FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXJrZG93bkVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxuIH0pXG5leHBvcnQgY2xhc3MgTWFya2Rvd25FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBEZWZhdWx0SWNvbk9wdGlvbnMge1xuXG4gIGdldCBCT0xEX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkJvbGRcIjsgfVxuICBnZXQgSVRBTElDX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkl0YWxpY1wiOyB9XG4gIGdldCBIRUFESU5HX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkhlYWRpbmdcIjsgfVxuICBnZXQgUkVGUkVOQ0VfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiUmVmcmVuY2VcIjsgfVxuICBnZXQgTElOS19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJMaW5rXCI7IH1cbiAgZ2V0IElNQUdFX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkltYWdlXCI7IH1cbiAgZ2V0IFVMX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIlVsXCI7IH1cbiAgZ2V0IE9MX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIk9sXCI7IH1cbiAgZ2V0IENPREVfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29kZVwiOyB9XG4gIGdldCBUQUJMRV9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUYWJsZVwiOyB9XG4gIGdldCBUT0dHTEVfUFJFVklFV19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUb2dnbGVQcmV2aWV3XCI7IH1cbiAgZ2V0IEZVTExTQ1JFRU5fSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiRnVsbHNjcmVlblwiOyB9XG5cbiAgZ2V0IEJPTEQoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuQk9MRF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWJvbGRcIixcbiAgICAgdGl0bGU6IFwiQm9sZFwiXG4gICB9O1xuIH1cbiAgZ2V0IElUQUxJQygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5JVEFMSUNfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1pdGFsaWNcIixcbiAgICAgdGl0bGU6IFwiSXRhbGljXCJcbiAgIH07XG4gfVxuICBnZXQgSEVBRElORygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5IRUFESU5HX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaGVhZGVyXCIsXG4gICAgIHRpdGxlOiBcIkhlYWRpbmdcIlxuICAgfTtcbiB9XG4gIGdldCBSRUZSRU5DRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5SRUZSRU5DRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXF1b3RlLWxlZnRcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IExJTksoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuTElOS19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpbmtcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IElNQUdFKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLklNQUdFX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaW1hZ2VcIixcbiAgICAgdGl0bGU6IFwiSW1hZ2VcIlxuICAgfTtcbiB9XG4gIGdldCBVTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5VTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3QtdWxcIixcbiAgICAgdGl0bGU6IFwiVW5vcmRlcmVkIExpc3RcIlxuICAgfTtcbiB9XG4gIGdldCBPTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3Qtb2xcIixcbiAgICAgdGl0bGU6IFwiT3JkZXJlZCBMaXN0XCJcbiAgIH07XG4gfVxuICBnZXQgQ09ERSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWZpbGUtY29kZS1vXCIsXG4gICAgIHRpdGxlOiBcIkNvZGVcIlxuICAgfTtcbiB9XG4gIGdldCBUQUJMRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5UQUJMRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXRhYmxlXCIsXG4gICAgIHRpdGxlOiBcIlRhYmxlXCJcbiAgIH07XG4gfVxuICBnZXQgVE9HR0xFX1BSRVZJRVcoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVE9HR0xFX1BSRVZJRVdfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1leWVcIixcbiAgICAgaWNvbkNsYXNzVG9nZ2xlOiBcImZhIGZhLWV5ZS1zbGFzaFwiLFxuICAgICB0aXRsZTogXCJTaG93IFByZXZpZXdcIixcbiAgICAgdGl0bGVUb2dnbGU6IFwiSGlkZSBQcmV2aWV3XCJcbiAgIH07XG4gfVxuICBnZXQgRlVMTFNDUkVFTigpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5UT0dHTEVfUFJFVklFV19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWFycm93cy1hbHRcIixcbiAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlXCIsXG4gICAgIHRpdGxlOiBcIkZ1bGxzY3JlZW5cIixcbiAgICAgdGl0bGVUb2dnbGU6IFwiUmVzdG9yZVwiXG4gICB9O1xuIH1cblxuICBnZXQgQUxMX0lDT05TKCk6IHtbaWQ6IHN0cmluZ106IEljb25PcHRpb25zfSB7XG4gICAgbGV0IGFsbEljb25zOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30gPSB7fTtcbiAgICBhbGxJY29uc1t0aGlzLkJPTERfSURdID0gdGhpcy5CT0xEO1xuICAgIGFsbEljb25zW3RoaXMuSVRBTElDX0lEXSA9IHRoaXMuSVRBTElDO1xuICAgIGFsbEljb25zW3RoaXMuSEVBRElOR19JRF0gPSB0aGlzLkhFQURJTkc7XG4gICAgYWxsSWNvbnNbdGhpcy5SRUZSRU5DRV9JRF0gPSB0aGlzLlJFRlJFTkNFO1xuICAgIGFsbEljb25zW3RoaXMuTElOS19JRF0gPSB0aGlzLkxJTks7XG4gICAgYWxsSWNvbnNbdGhpcy5JTUFHRV9JRF0gPSB0aGlzLklNQUdFO1xuICAgIGFsbEljb25zW3RoaXMuVUxfSURdID0gdGhpcy5VTDtcbiAgICBhbGxJY29uc1t0aGlzLk9MX0lEXSA9IHRoaXMuT0w7XG4gICAgYWxsSWNvbnNbdGhpcy5DT0RFX0lEXSA9IHRoaXMuQ09ERTtcbiAgICBhbGxJY29uc1t0aGlzLlRBQkxFX0lEXSA9IHRoaXMuVEFCTEU7XG4gICAgYWxsSWNvbnNbdGhpcy5UT0dHTEVfUFJFVklFV19JRF0gPSB0aGlzLlRPR0dMRV9QUkVWSUVXO1xuICAgIGFsbEljb25zW3RoaXMuRlVMTFNDUkVFTl9JRF0gPSB0aGlzLkZVTExTQ1JFRU47XG4gICAgcmV0dXJuIGFsbEljb25zO1xuIH1cblxuICBnZXQgQUxMX0lDT05fSURTKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLkJPTERfSUQsXG4gICAgICB0aGlzLklUQUxJQ19JRCxcbiAgICAgIHRoaXMuSEVBRElOR19JRCxcbiAgICAgIHRoaXMuUkVGUkVOQ0VfSUQsXG4gICAgICB0aGlzLkxJTktfSUQsXG4gICAgICB0aGlzLklNQUdFX0lELFxuICAgICAgdGhpcy5VTF9JRCxcbiAgICAgIHRoaXMuT0xfSUQsXG4gICAgICB0aGlzLkNPREVfSUQsXG4gICAgICB0aGlzLlRBQkxFX0lELFxuICAgICAgdGhpcy5UT0dHTEVfUFJFVklFV19JRCxcbiAgICAgIHRoaXMuRlVMTFNDUkVFTl9JRFxuICAgIF07XG4gIH1cblxuICBAVmlld0NoaWxkKCdhY2VFZGl0b3InKSBwdWJsaWMgYWNlRWRpdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtb2RhbFRlbXBsYXRlJykgcHVibGljIG1vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlVG9vbGJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBzdHJpbmcgPSBcIjM1N3B4XCI7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gXCIxMDAlXCI7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcmVSZW5kZXI6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkOiBGdW5jdGlvbjtcbiAgQE91dHB1dCgpIHB1YmxpYyBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHNjcmVlbkhlaWdodDogbnVtYmVyID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudD8pIHtcbiAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSB8fCAnZWRpdG9yJztcbiAgfVxuXG4gIHB1YmxpYyBpbWFnZXM6IEFycmF5PElJbWFnZURlZmluaXRpb24+O1xuXG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAodmFsdWUudG9Mb3dlckNhc2UoKSAhPT0gJ2VkaXRvcicgJiYgdmFsdWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ByZXZpZXcnKSkge1xuICAgICAgdmFsdWUgPSAnZWRpdG9yJztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX21vZGU6IHN0cmluZztcblxuICAvKiogVGhlIHJlbW90ZSBpbnZvY2F0aW9uIHByb21pc2UgYnkgcmVxdWVzdGVkIHBhdGggKi9cbiAgcHVibGljIHJlbW90ZUludm9jYXRpb25Qcm9taXNlQnlQYXRoID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8YW55Pj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTogTWRFZGl0b3JPcHRpb24ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zIHx8IHt9O1xuICB9XG4gIHB1YmxpYyBzZXQgb3B0aW9ucyh2YWx1ZTogTWRFZGl0b3JPcHRpb24pIHtcbiAgICBjb25zdCBkZWZhdWx0SWNvbk9wdGlvbnM6IERlZmF1bHRJY29uT3B0aW9ucyA9IHRoaXM7XG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbi5pY29ucyA9IGRlZmF1bHRJY29uT3B0aW9ucy5BTExfSUNPTlM7XG4gICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5fZGVmYXVsdE9wdGlvbiwge30sIHZhbHVlKTtcbiAgICB0aGlzLmljb25zID0gZGVmYXVsdEljb25PcHRpb25zLkFMTF9JQ09OUztcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pY29ucykge1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX29wdGlvbnMuaWNvbnMpKSB7XG4gICAgICAgIGlmKGRlZmF1bHRJY29uT3B0aW9ucy5BTExfSUNPTl9JRFMuaW5kZXhPZihrZXkpIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5pY29uc1trZXldID0gdGhpcy5fb3B0aW9ucy5pY29uc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHZhbHVlLnVwbG9hZEZpbGVVcmwpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMudXBsb2FkRmlsZVVybCA9IHZhbHVlLnVwbG9hZEZpbGVVcmw7XG4gICAgfVxuICAgIGlmKHZhbHVlLmxpc3RGaWxlc1VybCkge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy5saXN0RmlsZXNVcmwgPSB2YWx1ZS5saXN0RmlsZXNVcmw7XG4gICAgfVxuICAgIGlmKHZhbHVlLmlzVmlkZW9MaXN0KSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLmlzVmlkZW9MaXN0ID0gdmFsdWUuaXNWaWRlb0xpc3Q7XG4gICAgfVxuICAgIGlmKHZhbHVlLmdldFRva2VuKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLmdldFRva2VuID0gdmFsdWUuZ2V0VG9rZW47XG4gICAgfVxuICAgIGlmKHZhbHVlLnBhcmFtZXRlcnNUb0FkZCkge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy5wYXJhbWV0ZXJzVG9BZGQgPSB2YWx1ZS5wYXJhbWV0ZXJzVG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgaW1hZ2VMaXN0UGlja2VyOiBOZ3hJbWFnZUxpc3RQaWNrZXJDb21wb25lbnQ7XG5cbiAgZmlsZVVwbG9hZE9wdGlvbnM6IElGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAgICBsaXN0RmlsZXNVcmw6IFwiXCIsXG4gICAgdXBsb2FkRmlsZVVybDogXCJcIixcbiAgICBpc1ZpZGVvTGlzdDogXCJcIixcbiAgICBnZXRUb2tlbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHBhcmFtZXRlcnNUb0FkZDogbmV3IE1hcChbW1wicGF0aFwiLFwidXBsb2FkL3RheG9ub21pYS1lcXVpcG8tYm12XCJdXSlcbiAgfTtcblxuICBwcml2YXRlIF9kZWZhdWx0T3B0aW9uOiBNZEVkaXRvck9wdGlvbiA9IHtcbiAgICBzaG93Qm9yZGVyOiB0cnVlLFxuICAgIGljb25zOiB7fSxcbiAgICBzY3JvbGxQYXN0RW5kOiAwLFxuICAgIGVuYWJsZVByZXZpZXdDb250ZW50Q2xpY2s6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlOiAodmFsdWU/OiBzdHJpbmcpID0+IHZvaWQsIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwYXJhbWV0ZXJzVG9BZGQ6IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcbiAgfTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgcHVibGljIGljb25zOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30gPSB7fTtcbiAgcHVibGljIHNob3dQcmV2aWV3UGFuZWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNGdWxsU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwcmV2aWV3SHRtbDogYW55O1xuICBwdWJsaWMgZHJhZ292ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzVXBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBtYXJrZG93blZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtkb3duVmFsdWUgfHwgJyc7XG4gIH1cbiAgcHVibGljIHNldCBtYXJrZG93blZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMucHJlUmVuZGVyICYmIHRoaXMucHJlUmVuZGVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcmVSZW5kZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX3JlbmRlck1hcmtUaW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy5fcmVuZGVyTWFya1RpbWVvdXQpO1xuICAgICAgdGhpcy5fcmVuZGVyTWFya1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGh0bWwgPSBtYXJrZWQodmFsdWUgfHwgJycsIHRoaXMuX21hcmtlZE9wdCk7XG4gICAgICAgIHRoaXMucHJldmlld0h0bWwgPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9tYXJrZG93blZhbHVlOiBhbnk7XG5cbiAgcHJpdmF0ZSBfZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9lZGl0b3JSZXNpemVUaW1lcjogYW55O1xuICBwcml2YXRlIF9yZW5kZXJNYXJrVGltZW91dDogYW55O1xuICBwcml2YXRlIF9tYXJrZWRPcHQ6IGFueTtcblxuICBwcml2YXRlIGdldCBfaGFzVXBsb2FkRnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkICYmIHRoaXMudXBsb2FkIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2UsXG4gICAgQEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykgcHVibGljIG1heGxlbmd0aDogbnVtYmVyID0gLTEsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG1hcmtlZFJlbmRlciA9IG5ldyBtYXJrZWQuUmVuZGVyZXIoKTtcbiAgICBtYXJrZWRSZW5kZXIuY29kZSA9IChjb2RlOiBhbnksIGxhbmd1YWdlOiBhbnkpID0+IHtcbiAgICAgIGxldCB2YWxpZExhbmcgPSAhIShsYW5ndWFnZSAmJiBobGpzLmdldExhbmd1YWdlKGxhbmd1YWdlKSk7XG4gICAgICBsZXQgaGlnaGxpZ2h0ZWQgPSB2YWxpZExhbmcgPyBobGpzLmhpZ2hsaWdodChsYW5ndWFnZSwgY29kZSkudmFsdWUgOiBjb2RlO1xuICAgICAgcmV0dXJuIGA8cHJlIHN0eWxlPVwicGFkZGluZzogMDsgYm9yZGVyLXJhZGl1czogMDtcIj48Y29kZSBjbGFzcz1cImhsanMgJHtsYW5ndWFnZX1cIj4ke2hpZ2hsaWdodGVkfTwvY29kZT48L3ByZT5gO1xuICAgIH07XG4gICAgbWFya2VkUmVuZGVyLnRhYmxlID0gKGhlYWRlcjogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFwiPlxcbjx0aGVhZD5cXG4ke2hlYWRlcn08L3RoZWFkPlxcbjx0Ym9keT5cXG4ke2JvZHl9PC90Ym9keT5cXG48L3RhYmxlPlxcbmA7XG4gICAgfTtcbiAgICBtYXJrZWRSZW5kZXIubGlzdGl0ZW0gPSAodGV4dDogYW55KSA9PiB7XG4gICAgICBpZiAoL15cXHMqXFxbW3ggXVxcXVxccyovLnRlc3QodGV4dCkpIHtcbiAgICAgICAgdGV4dCA9IHRleHRcbiAgICAgICAgICAucmVwbGFjZSgvXlxccypcXFsgXFxdXFxzKi8sICc8aSBjbGFzcz1cImZhIGZhLXNxdWFyZS1vXCIgc3R5bGU9XCJtYXJnaW46IDAgMC4yZW0gMC4yNWVtIC0xLjZlbTtcIj48L2k+ICcpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXHMqXFxbeFxcXVxccyovLCAnPGkgY2xhc3M9XCJmYSBmYS1jaGVjay1zcXVhcmVcIiBzdHlsZT1cIm1hcmdpbjogMCAwLjJlbSAwLjI1ZW0gLTEuNmVtO1wiPjwvaT4gJyk7XG4gICAgICAgIHJldHVybiBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZTogbm9uZTtcIj4ke3RleHR9PC9saT5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGA8bGk+JHt0ZXh0fTwvbGk+YDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBtYXJrZWRqc09wdCA9IHtcbiAgICAgIHJlbmRlcmVyOiBtYXJrZWRSZW5kZXIsXG4gICAgICBoaWdobGlnaHQ6IChjb2RlOiBhbnkpID0+IGhsanMuaGlnaGxpZ2h0QXV0byhjb2RlKS52YWx1ZVxuICAgIH07XG4gICAgdGhpcy5fbWFya2VkT3B0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLm1hcmtlZGpzT3B0LCBtYXJrZWRqc09wdCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGVkaXRvckVsZW1lbnQgPSB0aGlzLmFjZUVkaXRvckNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2VkaXRvciA9IGFjZS5lZGl0KGVkaXRvckVsZW1lbnQpO1xuICAgIHRoaXMuX2VkaXRvci4kYmxvY2tTY3JvbGxpbmcgPSBJbmZpbml0eTtcbiAgICB0aGlzLl9lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldFVzZVdyYXBNb2RlKHRydWUpO1xuICAgIHRoaXMuX2VkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShcImFjZS9tb2RlL21hcmtkb3duXCIpO1xuICAgIHRoaXMuX2VkaXRvci5zZXRWYWx1ZSh0aGlzLm1hcmtkb3duVmFsdWUgfHwgJycsIDEpO1xuICAgIHRoaXMuX2VkaXRvci5zZXRPcHRpb24oJ3Njcm9sbFBhc3RFbmQnLCB0aGlzLl9vcHRpb25zLnNjcm9sbFBhc3RFbmQgfHwgMCk7XG5cbiAgICB0aGlzLl9lZGl0b3Iub24oXCJjaGFuZ2VcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5tYXJrZG93blZhbHVlID0gdGhpcy5fZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9lZGl0b3Iub24oXCJibHVyXCIsIChlOiBhbnkpID0+IHtcbiAgICAgIGlmKCF0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQpIHtcbiAgICAgICAgaWYodGhpcy5pc0Z1bGxTY3JlZW4pIHtcbiAgICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9ICF0aGlzLmlzRnVsbFNjcmVlbjtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93WScsIHRoaXMuaXNGdWxsU2NyZWVuID8gJ2hpZGRlbicgOiAnYXV0bycpO1xuICAgICAgICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gICAgICAgICAgdGhpcy5ibHVyLmVtaXQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VkaXRvciAmJiB0aGlzLl9lZGl0b3IuZGVzdHJveSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHZhbHVlIHx8ICcnLCAxKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLm1hcmtkb3duVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGxlbmd0aCA+IDAgJiYgdGhpcy5tYXJrZG93blZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB7IG1heGxlbmd0aDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9vbGJhckJ1dHRvbk1vdXNlRG93bigpIHtcbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5zZXJ0Q29udGVudCh0eXBlOiBzdHJpbmcsIGN1c3RvbUNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLl9lZGl0b3IuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGVkVGV4dDtcbiAgICBsZXQgc3RhcnRTaXplID0gMjtcbiAgICBsZXQgaW5pdFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIGxldCByYW5nZSA9IHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uZ2V0UmFuZ2UoKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0JvbGQnOlxuICAgICAgICBpbml0VGV4dCA9ICdCb2xkIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKioke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0qKmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSXRhbGljJzpcbiAgICAgICAgaW5pdFRleHQgPSAnSXRhbGljIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKiR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fSpgO1xuICAgICAgICBzdGFydFNpemUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hlYWRpbmcnOlxuICAgICAgICBpbml0VGV4dCA9ICdIZWFkaW5nJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCMgJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSZWZyZW5jZSc6XG4gICAgICAgIGluaXRUZXh0ID0gJ1JlZnJlbmNlJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYD4gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYFtdKGh0dHA6Ly8pYDtcbiAgICAgICAgc3RhcnRTaXplID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAhW10oaHR0cDovLylgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VsJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYC0gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ09sJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYDEuICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWBcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWJsZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9YFxufCAqKiAke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0gKiogfCAqKkNvbHVtbiBIZWFkZXIqKiB8ICoqQ29sdW1uIEhlYWRlcioqIHwgKipDb2x1bW4gSGVhZGVyKiogfFxufC0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS18XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxcbnwgVGV4dCAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgfFxufCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxgO1xuICAgICAgICBzdGFydFNpemUgPSA2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NvZGUnOlxuICAgICAgICBpbml0VGV4dCA9ICdTb3VyY2UgQ29kZSc7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IFwiYGBgbGFuZ3VhZ2VcXHJcXG5cIiArIChzZWxlY3RlZFRleHQgfHwgaW5pdFRleHQpICsgXCJcXHJcXG5gYGBcIjtcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDdXN0b20nOlxuICAgICAgICBzZWxlY3RlZFRleHQgPSBjdXN0b21Db250ZW50O1xuICAgICAgICBzdGFydFNpemUgPSAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fZWRpdG9yLnNlc3Npb24ucmVwbGFjZShyYW5nZSwgc2VsZWN0ZWRUZXh0KTtcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgIHJhbmdlLnN0YXJ0LmNvbHVtbiArPSBzdGFydFNpemU7XG4gICAgICByYW5nZS5lbmQuY29sdW1uID0gcmFuZ2Uuc3RhcnQuY29sdW1uICsgaW5pdFRleHQubGVuZ3RoO1xuICAgICAgdGhpcy5fZWRpdG9yLnNlbGVjdGlvbi5zZXRSYW5nZShyYW5nZSk7XG4gICAgfVxuICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEltYWdlKCkge1xuICAgIHRoaXMub3Blbk1vZGFsKHRoaXMubW9kYWxUZW1wbGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgb25GaWxlU2VsZWN0ZWQoaW1hZ2U6IElJbWFnZURlZmluaXRpb24pIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLl9lZGl0b3IuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGVkVGV4dDtcbiAgICBsZXQgc3RhcnRTaXplID0gMjtcbiAgICBsZXQgaW5pdFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIGxldCByYW5nZSA9IHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uZ2V0UmFuZ2UoKTtcbiAgICBzZWxlY3RlZFRleHQgPSBcIiFbXShcIiArIGltYWdlLnVybCArIFwiKVwiO1xuICAgIHRoaXMuX2VkaXRvci5zZXNzaW9uLnJlcGxhY2UocmFuZ2UsIHNlbGVjdGVkVGV4dCk7XG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICByYW5nZS5zdGFydC5jb2x1bW4gKz0gc3RhcnRTaXplO1xuICAgICAgcmFuZ2UuZW5kLmNvbHVtbiA9IHJhbmdlLnN0YXJ0LmNvbHVtbiArIGluaXRUZXh0Lmxlbmd0aDtcbiAgICAgIHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uc2V0UmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gICAgdGhpcy5fZWRpdG9yLmZvY3VzKCk7XG4gIH1cblxuICBwdWJsaWMgb3Blbk1vZGFsKGNvbnRlbnQ6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb250ZW50KTtcbiAgICAgIHRoaXMubW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWRpdG9yLmZvY3VzKCk7XG4gIH1cblxuICB0b2dnbGVQcmV2aWV3KCkge1xuICAgIHRoaXMuc2hvd1ByZXZpZXdQYW5lbCA9ICF0aGlzLnNob3dQcmV2aWV3UGFuZWw7XG4gICAgdGhpcy5lZGl0b3JSZXNpemUoKTtcbiAgfVxuXG4gIHByb2Nlc3NDbGlja1Rvb2xiYXIoKSB7XG4gICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gIH1cblxuICBwcmV2aWV3UGFuZWxDbGljayhldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZVByZXZpZXdDb250ZW50Q2xpY2sgIT09IHRydWUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdWxsU2NyZWVuKCkge1xuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gIXRoaXMuaXNGdWxsU2NyZWVuO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3dZJywgdGhpcy5pc0Z1bGxTY3JlZW4gPyAnaGlkZGVuJyA6ICdhdXRvJyk7XG4gICAgdGhpcy5lZGl0b3JSZXNpemUoKTtcbiAgfVxuXG4gIG1kRWRpdG9yUmVzaXplKHNpemU6IGFueSkge1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBlZGl0b3JSZXNpemUodGltZU91dDogbnVtYmVyID0gMTAwKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVyblxuICAgIGlmICh0aGlzLl9lZGl0b3JSZXNpemVUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX2VkaXRvclJlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLl9lZGl0b3JSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZWRpdG9yLnJlc2l6ZSgpO1xuICAgICAgdGhpcy5fZWRpdG9yLmZvY3VzKCk7XG4gICAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB9LCB0aW1lT3V0KTtcbiAgfVxuXG4gIG9uRHJhZ292ZXIoZXZ0OiBEcmFnRXZlbnQpIHtcbiAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9oYXNVcGxvYWRGdW5jdGlvbikgcmV0dXJuO1xuICAgIHRoaXMuZHJhZ292ZXIgPSB0cnVlO1xuICB9XG5cbiAgb25Ecm9wKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24gfHwgdGhpcy5pc1VwbG9hZGluZykgcmV0dXJuO1xuXG4gICAgaWYgKCFldnQuZGF0YVRyYW5zZmVyLmZpbGVzIHx8IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkKGV2dC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgIGxldCBtc2cgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wTXNnID0gYFske2l0ZW0ubmFtZX1dKCR7aXRlbS51cmx9KWA7XG4gICAgICAgICAgICBpZiAoaXRlbS5pc0ltZykge1xuICAgICAgICAgICAgICB0ZW1wTXNnID0gYCEke3RlbXBNc2d9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1zZy5wdXNoKHRlbXBNc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmluc2VydENvbnRlbnQoJ0N1c3RvbScsIG1zZy5qb2luKCdcXHJcXG4nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHVwbG9hZCByZXN1bHQuIFBsZWFzZSB1c2luZyBmb2xsb3cgdGhpcyB0eXBlIGBVcGxvYWRSZXN1bHRgLicpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRHJhZ2xlYXZlKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24pIHJldHVybjtcbiAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==