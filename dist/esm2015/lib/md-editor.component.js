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
                }
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
        selectedText = '<img src="' + image.url + '" width="100%"></img>';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaC1tZC1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvbWQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLGlCQUFpQixFQUF3QixhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDdEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXpELE9BQU8sRUFBZSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsUUFBUSxFQUFtQyxNQUFNLDRCQUE0QixDQUFDOzs7O0FBTXRGLE1BQU0sT0FBTyxlQUFlO0NBVTNCOzs7SUFQQyxrQ0FBd0I7O0lBR3hCLGtDQUF1Qjs7SUFHdkIsaUNBQWlCOztBQW9CbkIsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7O0lBZ1NsQyxZQUNnQyxXQUFvQixLQUFLLEVBQ3hCLFlBQW9CLENBQUMsQ0FBQyxFQUM3QyxTQUFtQixFQUNuQixhQUEyQixFQUMzQixJQUFnQixFQUNoQixZQUFzQjtRQUxBLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDN0MsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBOUloQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQVcsT0FBTyxDQUFDO1FBQ3pCLFVBQUss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Ozs7SUFDckIsNERBQW1EOzs7OztJQUNuRCxxREFBZ0M7Ozs7O0lBQ2hDLHFEQUFnQzs7Ozs7SUFDaEMsNkNBQXdCOzs7OztJQU14Qiw0Q0FBb0M7Ozs7O0lBQ3BDLDZDQUErQjs7SUFHN0IsMkNBQXVEOztJQUN2RCw0Q0FBcUQ7Ozs7O0lBQ3JELDRDQUEyQjs7Ozs7SUFDM0IsZ0RBQW1DOzs7OztJQUNuQyx1Q0FBd0I7Ozs7O0lBQ3hCLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBmb3J3YXJkUmVmLCBSZW5kZXJlciwgQXR0cmlidXRlLCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1kRWRpdG9yT3B0aW9uLCBJY29uT3B0aW9ucywgRGVmYXVsdEljb25PcHRpb25zIH0gZnJvbSAnLi9tZC1lZGl0b3IudHlwZXMnO1xuaW1wb3J0IHsgTmd4SW1hZ2VMaXN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmd4LWltYWdlLWxpc3QtcGlja2VyJztcbmltcG9ydCB7IElGaWxlVXBsb2FkT3B0aW9ucywgSUltYWdlRGVmaW5pdGlvbiB9IGZyb20gJ25neC1pbWFnZS1saXN0LXBpY2tlcic7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucywgTmdiTW9kYWxSZWZ9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuZGVjbGFyZSBsZXQgYWNlOiBhbnk7XG5kZWNsYXJlIGxldCBtYXJrZWQ6IGFueTtcbmRlY2xhcmUgbGV0IGhsanM6IGFueTtcblxuZXhwb3J0IGNsYXNzIE9wZXJhdGlvblJlc3VsdDxUPiB7XG5cbiAgLyogRmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgcG9yY2Nlc3Mgc3VjZXNzLiAqL1xuICBwdWJsaWMgc3VjY2VzczogYm9vbGVhbjtcblxuICAvKiBUaGUgcmVzdWx0IG1lc3NhZ2UuICovXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyogVGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdC4gKi9cbiAgcHVibGljIHJlc3VsdDogVDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWQtZWRpdG9yJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWQtZWRpdG9yLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21kLWVkaXRvci5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXJrZG93bkVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hcmtkb3duRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG4gfSlcbmV4cG9ydCBjbGFzcyBNYXJrZG93bkVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3IsIERlZmF1bHRJY29uT3B0aW9ucyB7XG5cbiAgZ2V0IEJPTERfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQm9sZFwiOyB9XG4gIGdldCBJVEFMSUNfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiSXRhbGljXCI7IH1cbiAgZ2V0IEhFQURJTkdfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiSGVhZGluZ1wiOyB9XG4gIGdldCBSRUZSRU5DRV9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJSZWZyZW5jZVwiOyB9XG4gIGdldCBMSU5LX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkxpbmtcIjsgfVxuICBnZXQgSU1BR0VfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VcIjsgfVxuICBnZXQgVUxfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiVWxcIjsgfVxuICBnZXQgT0xfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiT2xcIjsgfVxuICBnZXQgQ09ERV9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJDb2RlXCI7IH1cbiAgZ2V0IFRBQkxFX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIlRhYmxlXCI7IH1cbiAgZ2V0IFRPR0dMRV9QUkVWSUVXX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIlRvZ2dsZVByZXZpZXdcIjsgfVxuICBnZXQgRlVMTFNDUkVFTl9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJGdWxsc2NyZWVuXCI7IH1cblxuICBnZXQgQk9MRCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5CT0xEX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtYm9sZFwiLFxuICAgICB0aXRsZTogXCJCb2xkXCJcbiAgIH07XG4gfVxuICBnZXQgSVRBTElDKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLklUQUxJQ19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWl0YWxpY1wiLFxuICAgICB0aXRsZTogXCJJdGFsaWNcIlxuICAgfTtcbiB9XG4gIGdldCBIRUFESU5HKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLkhFQURJTkdfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1oZWFkZXJcIixcbiAgICAgdGl0bGU6IFwiSGVhZGluZ1wiXG4gICB9O1xuIH1cbiAgZ2V0IFJFRlJFTkNFKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLlJFRlJFTkNFX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtcXVvdGUtbGVmdFwiLFxuICAgICB0aXRsZTogXCJMaW5rXCJcbiAgIH07XG4gfVxuICBnZXQgTElOSygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5MSU5LX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtbGlua1wiLFxuICAgICB0aXRsZTogXCJMaW5rXCJcbiAgIH07XG4gfVxuICBnZXQgSU1BR0UoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuSU1BR0VfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1pbWFnZVwiLFxuICAgICB0aXRsZTogXCJJbWFnZVwiXG4gICB9O1xuIH1cbiAgZ2V0IFVMKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLlVMX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtbGlzdC11bFwiLFxuICAgICB0aXRsZTogXCJVbm9yZGVyZWQgTGlzdFwiXG4gICB9O1xuIH1cbiAgZ2V0IE9MKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLk9MX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtbGlzdC1vbFwiLFxuICAgICB0aXRsZTogXCJPcmRlcmVkIExpc3RcIlxuICAgfTtcbiB9XG4gIGdldCBDT0RFKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLk9MX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtZmlsZS1jb2RlLW9cIixcbiAgICAgdGl0bGU6IFwiQ29kZVwiXG4gICB9O1xuIH1cbiAgZ2V0IFRBQkxFKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLlRBQkxFX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtdGFibGVcIixcbiAgICAgdGl0bGU6IFwiVGFibGVcIlxuICAgfTtcbiB9XG4gIGdldCBUT0dHTEVfUFJFVklFVygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5UT0dHTEVfUFJFVklFV19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWV5ZVwiLFxuICAgICBpY29uQ2xhc3NUb2dnbGU6IFwiZmEgZmEtZXllLXNsYXNoXCIsXG4gICAgIHRpdGxlOiBcIlNob3cgUHJldmlld1wiLFxuICAgICB0aXRsZVRvZ2dsZTogXCJIaWRlIFByZXZpZXdcIlxuICAgfTtcbiB9XG4gIGdldCBGVUxMU0NSRUVOKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLlRPR0dMRV9QUkVWSUVXX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtYXJyb3dzLWFsdFwiLFxuICAgICBhY3RpdmVDbGFzczogXCJhY3RpdmVcIixcbiAgICAgdGl0bGU6IFwiRnVsbHNjcmVlblwiLFxuICAgICB0aXRsZVRvZ2dsZTogXCJSZXN0b3JlXCJcbiAgIH07XG4gfVxuXG4gIGdldCBBTExfSUNPTlMoKToge1tpZDogc3RyaW5nXTogSWNvbk9wdGlvbnN9IHtcbiAgICBsZXQgYWxsSWNvbnM6IHtbaWQ6IHN0cmluZ106IEljb25PcHRpb25zfSA9IHt9O1xuICAgIGFsbEljb25zW3RoaXMuQk9MRF9JRF0gPSB0aGlzLkJPTEQ7XG4gICAgYWxsSWNvbnNbdGhpcy5JVEFMSUNfSURdID0gdGhpcy5JVEFMSUM7XG4gICAgYWxsSWNvbnNbdGhpcy5IRUFESU5HX0lEXSA9IHRoaXMuSEVBRElORztcbiAgICBhbGxJY29uc1t0aGlzLlJFRlJFTkNFX0lEXSA9IHRoaXMuUkVGUkVOQ0U7XG4gICAgYWxsSWNvbnNbdGhpcy5MSU5LX0lEXSA9IHRoaXMuTElOSztcbiAgICBhbGxJY29uc1t0aGlzLklNQUdFX0lEXSA9IHRoaXMuSU1BR0U7XG4gICAgYWxsSWNvbnNbdGhpcy5VTF9JRF0gPSB0aGlzLlVMO1xuICAgIGFsbEljb25zW3RoaXMuT0xfSURdID0gdGhpcy5PTDtcbiAgICBhbGxJY29uc1t0aGlzLkNPREVfSURdID0gdGhpcy5DT0RFO1xuICAgIGFsbEljb25zW3RoaXMuVEFCTEVfSURdID0gdGhpcy5UQUJMRTtcbiAgICBhbGxJY29uc1t0aGlzLlRPR0dMRV9QUkVWSUVXX0lEXSA9IHRoaXMuVE9HR0xFX1BSRVZJRVc7XG4gICAgYWxsSWNvbnNbdGhpcy5GVUxMU0NSRUVOX0lEXSA9IHRoaXMuRlVMTFNDUkVFTjtcbiAgICByZXR1cm4gYWxsSWNvbnM7XG4gfVxuXG4gIGdldCBBTExfSUNPTl9JRFMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuQk9MRF9JRCxcbiAgICAgIHRoaXMuSVRBTElDX0lELFxuICAgICAgdGhpcy5IRUFESU5HX0lELFxuICAgICAgdGhpcy5SRUZSRU5DRV9JRCxcbiAgICAgIHRoaXMuTElOS19JRCxcbiAgICAgIHRoaXMuSU1BR0VfSUQsXG4gICAgICB0aGlzLlVMX0lELFxuICAgICAgdGhpcy5PTF9JRCxcbiAgICAgIHRoaXMuQ09ERV9JRCxcbiAgICAgIHRoaXMuVEFCTEVfSUQsXG4gICAgICB0aGlzLlRPR0dMRV9QUkVWSUVXX0lELFxuICAgICAgdGhpcy5GVUxMU0NSRUVOX0lEXG4gICAgXTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2FjZUVkaXRvcicpIHB1YmxpYyBhY2VFZGl0b3JDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsVGVtcGxhdGUnKSBwdWJsaWMgbW9kYWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgcHVibGljIGhpZGVUb29sYmFyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWlnaHQ6IHN0cmluZyA9IFwiMzU3cHhcIjtcbiAgQElucHV0KCkgcHVibGljIHdpZHRoOiBzdHJpbmcgPSBcIjEwMCVcIjtcbiAgQElucHV0KCkgcHVibGljIHByZVJlbmRlcjogRnVuY3Rpb247XG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWQ6IEZ1bmN0aW9uO1xuICBAT3V0cHV0KCkgcHVibGljIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgc2NyZWVuSGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50Pykge1xuICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgbW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tb2RlIHx8ICdlZGl0b3InO1xuICB9XG5cbiAgcHVibGljIGltYWdlczogQXJyYXk8SUltYWdlRGVmaW5pdGlvbj47XG5cbiAgcHVibGljIHNldCBtb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbHVlIHx8ICh2YWx1ZS50b0xvd2VyQ2FzZSgpICE9PSAnZWRpdG9yJyAmJiB2YWx1ZS50b0xvd2VyQ2FzZSgpICE9PSAncHJldmlldycpKSB7XG4gICAgICB2YWx1ZSA9ICdlZGl0b3InO1xuICAgIH1cbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfbW9kZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgcmVtb3RlIGludm9jYXRpb24gcHJvbWlzZSBieSByZXF1ZXN0ZWQgcGF0aCAqL1xuICBwdWJsaWMgcmVtb3RlSW52b2NhdGlvblByb21pc2VCeVBhdGggPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxhbnk+PigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgb3B0aW9ucygpOiBNZEVkaXRvck9wdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMgfHwge307XG4gIH1cbiAgcHVibGljIHNldCBvcHRpb25zKHZhbHVlOiBNZEVkaXRvck9wdGlvbikge1xuICAgIGNvbnN0IGRlZmF1bHRJY29uT3B0aW9uczogRGVmYXVsdEljb25PcHRpb25zID0gdGhpcztcbiAgICB0aGlzLl9kZWZhdWx0T3B0aW9uLmljb25zID0gZGVmYXVsdEljb25PcHRpb25zLkFMTF9JQ09OUztcbiAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLl9kZWZhdWx0T3B0aW9uLCB7fSwgdmFsdWUpO1xuICAgIHRoaXMuaWNvbnMgPSBkZWZhdWx0SWNvbk9wdGlvbnMuQUxMX0lDT05TO1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmljb25zKSB7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5fb3B0aW9ucy5pY29ucykpIHtcbiAgICAgICAgaWYoZGVmYXVsdEljb25PcHRpb25zLkFMTF9JQ09OX0lEUy5pbmRleE9mKGtleSkhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmljb25zW2tleV0gPSB0aGlzLl9vcHRpb25zLmljb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYodmFsdWUudXBsb2FkRmlsZVVybCkge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy51cGxvYWRGaWxlVXJsID0gdmFsdWUudXBsb2FkRmlsZVVybDtcbiAgICB9XG4gICAgaWYodmFsdWUubGlzdEZpbGVzVXJsKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLmxpc3RGaWxlc1VybCA9IHZhbHVlLmxpc3RGaWxlc1VybDtcbiAgICB9XG4gICAgaWYodmFsdWUuaXNWaWRlb0xpc3QpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMuaXNWaWRlb0xpc3QgPSB2YWx1ZS5pc1ZpZGVvTGlzdDtcbiAgICB9XG4gICAgaWYodmFsdWUuZ2V0VG9rZW4pIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMuZ2V0VG9rZW4gPSB2YWx1ZS5nZXRUb2tlbjtcbiAgICB9XG4gICAgaWYodmFsdWUucGFyYW1ldGVyc1RvQWRkKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLnBhcmFtZXRlcnNUb0FkZCA9IHZhbHVlLnBhcmFtZXRlcnNUb0FkZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcblxuICBpbWFnZUxpc3RQaWNrZXI6IE5neEltYWdlTGlzdFBpY2tlckNvbXBvbmVudDtcblxuICBmaWxlVXBsb2FkT3B0aW9uczogSUZpbGVVcGxvYWRPcHRpb25zID0ge1xuICAgIGxpc3RGaWxlc1VybDogXCJcIixcbiAgICB1cGxvYWRGaWxlVXJsOiBcIlwiLFxuICAgIGlzVmlkZW9MaXN0OiBcIlwiLFxuICAgIGdldFRva2VuOiAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZTogKHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcGFyYW1ldGVyc1RvQWRkOiBuZXcgTWFwKFtbXCJwYXRoXCIsXCJ1cGxvYWQvdGF4b25vbWlhLWVxdWlwby1ibXZcIl1dKVxuICB9O1xuXG4gIHByaXZhdGUgX2RlZmF1bHRPcHRpb246IE1kRWRpdG9yT3B0aW9uID0ge1xuICAgIHNob3dCb3JkZXI6IHRydWUsXG4gICAgaWNvbnM6IHt9LFxuICAgIHNjcm9sbFBhc3RFbmQ6IDAsXG4gICAgZW5hYmxlUHJldmlld0NvbnRlbnRDbGljazogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBnZXRUb2tlbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHBhcmFtZXRlcnNUb0FkZDogbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICB9O1xuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgaWNvbnM6IHtbaWQ6IHN0cmluZ106IEljb25PcHRpb25zfSA9IHt9O1xuICBwdWJsaWMgc2hvd1ByZXZpZXdQYW5lbDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc0Z1bGxTY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHByZXZpZXdIdG1sOiBhbnk7XG4gIHB1YmxpYyBkcmFnb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNVcGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IG1hcmtkb3duVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Rvd25WYWx1ZSB8fCAnJztcbiAgfVxuICBwdWJsaWMgc2V0IG1hcmtkb3duVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX21hcmtkb3duVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5wcmVSZW5kZXIgJiYgdGhpcy5wcmVSZW5kZXIgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgdmFsdWUgPSB0aGlzLnByZVJlbmRlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fcmVuZGVyTWFya1RpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLl9yZW5kZXJNYXJrVGltZW91dCk7XG4gICAgICB0aGlzLl9yZW5kZXJNYXJrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgaHRtbCA9IG1hcmtlZCh2YWx1ZSB8fCAnJywgdGhpcy5fbWFya2VkT3B0KTtcbiAgICAgICAgdGhpcy5wcmV2aWV3SHRtbCA9IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX21hcmtkb3duVmFsdWU6IGFueTtcblxuICBwcml2YXRlIF9lZGl0b3I6IGFueTtcbiAgcHJpdmF0ZSBfYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2VkaXRvclJlc2l6ZVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgX3JlbmRlck1hcmtUaW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgX21hcmtlZE9wdDogYW55O1xuXG4gIHByaXZhdGUgZ2V0IF9oYXNVcGxvYWRGdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQgJiYgdGhpcy51cGxvYWQgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEF0dHJpYnV0ZSgncmVxdWlyZWQnKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBAQXR0cmlidXRlKCdtYXhsZW5ndGgnKSBwdWJsaWMgbWF4bGVuZ3RoOiBudW1iZXIgPSAtMSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgbWFya2VkUmVuZGVyID0gbmV3IG1hcmtlZC5SZW5kZXJlcigpO1xuICAgIG1hcmtlZFJlbmRlci5jb2RlID0gKGNvZGU6IGFueSwgbGFuZ3VhZ2U6IGFueSkgPT4ge1xuICAgICAgbGV0IHZhbGlkTGFuZyA9ICEhKGxhbmd1YWdlICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpKTtcbiAgICAgIGxldCBoaWdobGlnaHRlZCA9IHZhbGlkTGFuZyA/IGhsanMuaGlnaGxpZ2h0KGxhbmd1YWdlLCBjb2RlKS52YWx1ZSA6IGNvZGU7XG4gICAgICByZXR1cm4gYDxwcmUgc3R5bGU9XCJwYWRkaW5nOiAwOyBib3JkZXItcmFkaXVzOiAwO1wiPjxjb2RlIGNsYXNzPVwiaGxqcyAke2xhbmd1YWdlfVwiPiR7aGlnaGxpZ2h0ZWR9PC9jb2RlPjwvcHJlPmA7XG4gICAgfTtcbiAgICBtYXJrZWRSZW5kZXIudGFibGUgPSAoaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCI+XFxuPHRoZWFkPlxcbiR7aGVhZGVyfTwvdGhlYWQ+XFxuPHRib2R5PlxcbiR7Ym9keX08L3Rib2R5PlxcbjwvdGFibGU+XFxuYDtcbiAgICB9O1xuICAgIG1hcmtlZFJlbmRlci5saXN0aXRlbSA9ICh0ZXh0OiBhbnkpID0+IHtcbiAgICAgIGlmICgvXlxccypcXFtbeCBdXFxdXFxzKi8udGVzdCh0ZXh0KSkge1xuICAgICAgICB0ZXh0ID0gdGV4dFxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzKlxcWyBcXF1cXHMqLywgJzxpIGNsYXNzPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT1cIm1hcmdpbjogMCAwLjJlbSAwLjI1ZW0gLTEuNmVtO1wiPjwvaT4gJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxccypcXFt4XFxdXFxzKi8sICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrLXNxdWFyZVwiIHN0eWxlPVwibWFyZ2luOiAwIDAuMmVtIDAuMjVlbSAtMS42ZW07XCI+PC9pPiAnKTtcbiAgICAgICAgcmV0dXJuIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOiBub25lO1wiPiR7dGV4dH08L2xpPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYDxsaT4ke3RleHR9PC9saT5gO1xuICAgICAgfVxuICAgIH07XG4gICAgbGV0IG1hcmtlZGpzT3B0ID0ge1xuICAgICAgcmVuZGVyZXI6IG1hcmtlZFJlbmRlcixcbiAgICAgIGhpZ2hsaWdodDogKGNvZGU6IGFueSkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLl9tYXJrZWRPcHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMubWFya2VkanNPcHQsIG1hcmtlZGpzT3B0KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsZXQgZWRpdG9yRWxlbWVudCA9IHRoaXMuYWNlRWRpdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fZWRpdG9yID0gYWNlLmVkaXQoZWRpdG9yRWxlbWVudCk7XG4gICAgdGhpcy5fZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICAgIHRoaXMuX2VkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV3JhcE1vZGUodHJ1ZSk7XG4gICAgdGhpcy5fZWRpdG9yLmdldFNlc3Npb24oKS5zZXRNb2RlKFwiYWNlL21vZGUvbWFya2Rvd25cIik7XG4gICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHRoaXMubWFya2Rvd25WYWx1ZSB8fCAnJywgMSk7XG4gICAgdGhpcy5fZWRpdG9yLnNldE9wdGlvbignc2Nyb2xsUGFzdEVuZCcsIHRoaXMuX29wdGlvbnMuc2Nyb2xsUGFzdEVuZCB8fCAwKTtcblxuICAgIHRoaXMuX2VkaXRvci5vbihcImNoYW5nZVwiLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLm1hcmtkb3duVmFsdWUgPSB0aGlzLl9lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VkaXRvci5vbihcImJsdXJcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgaWYoIXRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCkge1xuICAgICAgICBpZih0aGlzLmlzRnVsbFNjcmVlbikge1xuICAgICAgICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gIXRoaXMuaXNGdWxsU2NyZWVuO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3dZJywgdGhpcy5pc0Z1bGxTY3JlZW4gPyAnaGlkZGVuJyA6ICdhdXRvJyk7XG4gICAgICAgICAgdGhpcy5lZGl0b3JSZXNpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VkaXRvciAmJiB0aGlzLl9lZGl0b3IuZGVzdHJveSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHZhbHVlIHx8ICcnLCAxKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLm1hcmtkb3duVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGxlbmd0aCA+IDAgJiYgdGhpcy5tYXJrZG93blZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB7IG1heGxlbmd0aDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9vbGJhckJ1dHRvbk1vdXNlRG93bigpIHtcbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5zZXJ0Q29udGVudCh0eXBlOiBzdHJpbmcsIGN1c3RvbUNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLl9lZGl0b3IuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGVkVGV4dDtcbiAgICBsZXQgc3RhcnRTaXplID0gMjtcbiAgICBsZXQgaW5pdFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIGxldCByYW5nZSA9IHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uZ2V0UmFuZ2UoKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0JvbGQnOlxuICAgICAgICBpbml0VGV4dCA9ICdCb2xkIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKioke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0qKmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSXRhbGljJzpcbiAgICAgICAgaW5pdFRleHQgPSAnSXRhbGljIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKiR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fSpgO1xuICAgICAgICBzdGFydFNpemUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hlYWRpbmcnOlxuICAgICAgICBpbml0VGV4dCA9ICdIZWFkaW5nJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCMgJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSZWZyZW5jZSc6XG4gICAgICAgIGluaXRUZXh0ID0gJ1JlZnJlbmNlJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYD4gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYFtdKGh0dHA6Ly8pYDtcbiAgICAgICAgc3RhcnRTaXplID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAhW10oaHR0cDovLylgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VsJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYC0gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ09sJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYDEuICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWBcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWJsZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9YFxufCAqKiAke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0gKiogfCAqKkNvbHVtbiBIZWFkZXIqKiB8ICoqQ29sdW1uIEhlYWRlcioqIHwgKipDb2x1bW4gSGVhZGVyKiogfFxufC0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS18XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxcbnwgVGV4dCAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgfFxufCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxgO1xuICAgICAgICBzdGFydFNpemUgPSA2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NvZGUnOlxuICAgICAgICBpbml0VGV4dCA9ICdTb3VyY2UgQ29kZSc7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IFwiYGBgbGFuZ3VhZ2VcXHJcXG5cIiArIChzZWxlY3RlZFRleHQgfHwgaW5pdFRleHQpICsgXCJcXHJcXG5gYGBcIjtcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDdXN0b20nOlxuICAgICAgICBzZWxlY3RlZFRleHQgPSBjdXN0b21Db250ZW50O1xuICAgICAgICBzdGFydFNpemUgPSAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fZWRpdG9yLnNlc3Npb24ucmVwbGFjZShyYW5nZSwgc2VsZWN0ZWRUZXh0KTtcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgIHJhbmdlLnN0YXJ0LmNvbHVtbiArPSBzdGFydFNpemU7XG4gICAgICByYW5nZS5lbmQuY29sdW1uID0gcmFuZ2Uuc3RhcnQuY29sdW1uICsgaW5pdFRleHQubGVuZ3RoO1xuICAgICAgdGhpcy5fZWRpdG9yLnNlbGVjdGlvbi5zZXRSYW5nZShyYW5nZSk7XG4gICAgfVxuICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEltYWdlKCkge1xuICAgIHRoaXMub3Blbk1vZGFsKHRoaXMubW9kYWxUZW1wbGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgb25GaWxlU2VsZWN0ZWQoaW1hZ2U6IElJbWFnZURlZmluaXRpb24pIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLl9lZGl0b3IuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGVkVGV4dDtcbiAgICBsZXQgc3RhcnRTaXplID0gMjtcbiAgICBsZXQgaW5pdFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIGxldCByYW5nZSA9IHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uZ2V0UmFuZ2UoKTtcbiAgICBzZWxlY3RlZFRleHQgPSAnPGltZyBzcmM9XCInICsgaW1hZ2UudXJsICsgJ1wiIHdpZHRoPVwiMTAwJVwiPjwvaW1nPic7XG4gICAgdGhpcy5fZWRpdG9yLnNlc3Npb24ucmVwbGFjZShyYW5nZSwgc2VsZWN0ZWRUZXh0KTtcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgIHJhbmdlLnN0YXJ0LmNvbHVtbiArPSBzdGFydFNpemU7XG4gICAgICByYW5nZS5lbmQuY29sdW1uID0gcmFuZ2Uuc3RhcnQuY29sdW1uICsgaW5pdFRleHQubGVuZ3RoO1xuICAgICAgdGhpcy5fZWRpdG9yLnNlbGVjdGlvbi5zZXRSYW5nZShyYW5nZSk7XG4gICAgfVxuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuTW9kYWwoY29udGVudDogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZTogKHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpO1xuICAgICAgdGhpcy5tb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIHRvZ2dsZVByZXZpZXcoKSB7XG4gICAgdGhpcy5zaG93UHJldmlld1BhbmVsID0gIXRoaXMuc2hvd1ByZXZpZXdQYW5lbDtcbiAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICB9XG5cbiAgcHJvY2Vzc0NsaWNrVG9vbGJhcigpIHtcbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByZXZpZXdQYW5lbENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlUHJldmlld0NvbnRlbnRDbGljayAhPT0gdHJ1ZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSAhdGhpcy5pc0Z1bGxTY3JlZW47XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvd1knLCB0aGlzLmlzRnVsbFNjcmVlbiA/ICdoaWRkZW4nIDogJ2F1dG8nKTtcbiAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICB9XG5cbiAgbWRFZGl0b3JSZXNpemUoc2l6ZTogYW55KSB7XG4gICAgdGhpcy5lZGl0b3JSZXNpemUoKTtcbiAgfVxuXG4gIGVkaXRvclJlc2l6ZSh0aW1lT3V0OiBudW1iZXIgPSAxMDApIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuXG4gICAgaWYgKHRoaXMuX2VkaXRvclJlc2l6ZVRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5fZWRpdG9yUmVzaXplVGltZXIpO1xuICAgIHRoaXMuX2VkaXRvclJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9lZGl0b3IucmVzaXplKCk7XG4gICAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH0sIHRpbWVPdXQpO1xuICB9XG5cbiAgb25EcmFnb3ZlcihldnQ6IERyYWdFdmVudCkge1xuICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2hhc1VwbG9hZEZ1bmN0aW9uKSByZXR1cm47XG4gICAgdGhpcy5kcmFnb3ZlciA9IHRydWU7XG4gIH1cblxuICBvbkRyb3AoZXZ0OiBEcmFnRXZlbnQpIHtcbiAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9oYXNVcGxvYWRGdW5jdGlvbiB8fCB0aGlzLmlzVXBsb2FkaW5nKSByZXR1cm47XG5cbiAgICBpZiAoIWV2dC5kYXRhVHJhbnNmZXIuZmlsZXMgfHwgZXZ0LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzVXBsb2FkaW5nID0gdHJ1ZTtcbiAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWQoZXZ0LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgbGV0IG1zZyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IHRlbXBNc2cgPSBgWyR7aXRlbS5uYW1lfV0oJHtpdGVtLnVybH0pYDtcbiAgICAgICAgICAgIGlmIChpdGVtLmlzSW1nKSB7XG4gICAgICAgICAgICAgIHRlbXBNc2cgPSBgISR7dGVtcE1zZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXNnLnB1c2godGVtcE1zZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaW5zZXJ0Q29udGVudCgnQ3VzdG9tJywgbXNnLmpvaW4oJ1xcclxcbicpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgdXBsb2FkIHJlc3VsdC4gUGxlYXNlIHVzaW5nIGZvbGxvdyB0aGlzIHR5cGUgYFVwbG9hZFJlc3VsdGAuJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25EcmFnbGVhdmUoZXZ0OiBEcmFnRXZlbnQpIHtcbiAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9oYXNVcGxvYWRGdW5jdGlvbikgcmV0dXJuO1xuICAgIHRoaXMuZHJhZ292ZXIgPSBmYWxzZTtcbiAgfVxufVxuIl19