/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, forwardRef, Renderer, Attribute, Input, ElementRef, EventEmitter, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * @template T
 */
var /**
 * @template T
 */
OperationResult = /** @class */ (function () {
    function OperationResult() {
    }
    return OperationResult;
}());
/**
 * @template T
 */
export { OperationResult };
if (false) {
    /** @type {?} */
    OperationResult.prototype.success;
    /** @type {?} */
    OperationResult.prototype.message;
    /** @type {?} */
    OperationResult.prototype.result;
}
var MarkdownEditorComponent = /** @class */ (function () {
    function MarkdownEditorComponent(required, maxlength, _renderer, _domSanitizer, http, modalService) {
        if (required === void 0) { required = false; }
        if (maxlength === void 0) { maxlength = -1; }
        this.required = required;
        this.maxlength = maxlength;
        this._renderer = _renderer;
        this._domSanitizer = _domSanitizer;
        this.http = http;
        this.modalService = modalService;
        this.hideToolbar = false;
        this.height = "300px";
        this.width = "100%";
        this.blur = new EventEmitter();
        /**
         * The remote invocation promise by requested path
         */
        this.remoteInvocationPromiseByPath = new Map();
        this.fileUploadOptions = {
            url: "",
            getToken: function () {
                return new Promise(function (resolve, reject) {
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
            getToken: function () {
                return new Promise(function (resolve, reject) {
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
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    Object.defineProperty(MarkdownEditorComponent.prototype, "BOLD_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Bold"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "ITALIC_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Italic"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "HEADING_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Heading"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "REFRENCE_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Refrence"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "LINK_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Link"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "IMAGE_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Image"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "UL_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Ul"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "OL_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Ol"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "CODE_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Code"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "TABLE_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Table"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "TOGGLE_PREVIEW_ID", {
        get: /**
         * @return {?}
         */
        function () { return "TogglePreview"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "FULLSCREEN_ID", {
        get: /**
         * @return {?}
         */
        function () { return "Fullscreen"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "BOLD", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.BOLD_ID,
                hidden: false,
                iconClass: "fa fa-bold",
                title: "Bold"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "ITALIC", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.ITALIC_ID,
                hidden: false,
                iconClass: "fa fa-italic",
                title: "Italic"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "HEADING", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.HEADING_ID,
                hidden: false,
                iconClass: "fa fa-header",
                title: "Heading"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "REFRENCE", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.REFRENCE_ID,
                hidden: false,
                iconClass: "fa fa-quote-left",
                title: "Link"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "LINK", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.LINK_ID,
                hidden: false,
                iconClass: "fa fa-link",
                title: "Link"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "IMAGE", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.IMAGE_ID,
                hidden: false,
                iconClass: "fa fa-image",
                title: "Image"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "UL", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.UL_ID,
                hidden: false,
                iconClass: "fa fa-list-ul",
                title: "Unordered List"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "OL", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.OL_ID,
                hidden: false,
                iconClass: "fa fa-list-ol",
                title: "Ordered List"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "CODE", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.OL_ID,
                hidden: false,
                iconClass: "fa fa-file-code-o",
                title: "Code"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "TABLE", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.TABLE_ID,
                hidden: false,
                iconClass: "fa fa-table",
                title: "Table"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "TOGGLE_PREVIEW", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.TOGGLE_PREVIEW_ID,
                hidden: false,
                iconClass: "fa fa-eye",
                iconClassToggle: "fa fa-eye-slash",
                title: "Show Preview",
                titleToggle: "Hide Preview"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "FULLSCREEN", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                id: this.TOGGLE_PREVIEW_ID,
                hidden: false,
                iconClass: "fa fa-arrows-alt",
                activeClass: "active",
                title: "Fullscreen",
                titleToggle: "Restore"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "ALL_ICONS", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var allIcons = {};
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownEditorComponent.prototype, "ALL_ICON_IDS", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
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
            var e_1, _a;
            /** @type {?} */
            var defaultIconOptions = this;
            this._defaultOption.icons = defaultIconOptions.ALL_ICONS;
            this._options = Object.assign(this._defaultOption, {}, value);
            this.icons = defaultIconOptions.ALL_ICONS;
            if (this._options.icons) {
                try {
                    for (var _b = tslib_1.__values(Object.keys(this._options.icons)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (defaultIconOptions.ALL_ICON_IDS.indexOf(key) !== -1) {
                            this.icons[key] = this._options.icons[key];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (value.uploadFileUrl) {
                this.fileUploadOptions.url = value.uploadFileUrl;
            }
            if (value.getToken) {
                this.fileUploadOptions.getToken = value.getToken;
            }
            if (value.parametersToAdd) {
                this.fileUploadOptions.parametersToAdd = value.parametersToAdd;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.getAllFiles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listFilesInBlobByPath(this.fileUploadOptions.parametersToAdd.get("path")).then(function (remoteFiles) {
            _this.images = new Array();
            if (remoteFiles !== null) {
                remoteFiles.forEach(function (remoteFile) {
                    _this.images.push({
                        title: decodeURIComponent(_this.getFileName(remoteFile)),
                        url: remoteFile
                    });
                });
            }
        });
    };
    /**
     * Gets the filename of a url
     *
     * @param url the url to review
     */
    /**
     * Gets the filename of a url
     *
     * @private
     * @param {?} url the url to review
     * @return {?}
     */
    MarkdownEditorComponent.prototype.getFileName = /**
     * Gets the filename of a url
     *
     * @private
     * @param {?} url the url to review
     * @return {?}
     */
    function (url) {
        return url.substring(url.lastIndexOf('/') + 1);
    };
    /**
     * @param {?} imagePickerComponent
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onImagePickerInit = /**
     * @param {?} imagePickerComponent
     * @return {?}
     */
    function (imagePickerComponent) {
        this.imageListPicker = imagePickerComponent;
    };
    /**
     * Lists all the files contained in a path of the blob.
     *
     * @param path the path to query in the remote blob container
     * @param queryCriteria the query criteria to use to fetch data from the remote service
     */
    /**
     * Lists all the files contained in a path of the blob.
     *
     * @param {?} path the path to query in the remote blob container
     * @return {?}
     */
    MarkdownEditorComponent.prototype.listFilesInBlobByPath = /**
     * Lists all the files contained in a path of the blob.
     *
     * @param {?} path the path to query in the remote blob container
     * @return {?}
     */
    function (path) {
        var _this = this;
        /** @type {?} */
        var url = this._options.listFilesUrl;
        if (!this.remoteInvocationPromiseByPath.has(url) || this.remoteInvocationPromiseByPath.get(url) === null) {
            this.remoteInvocationPromiseByPath.set(url, new Promise(function (resolve, reject) {
                _this.fileUploadOptions.getToken().then(function (token) {
                    /** @type {?} */
                    var httpOptions = {
                        headers: new HttpHeaders({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        })
                    };
                    _this.http.post("" + url, { ruta: path }, httpOptions).subscribe(function (result) {
                        /** @type {?} */
                        var results = Object.setPrototypeOf(result, OperationResult.prototype);
                        _this.remoteInvocationPromiseByPath.set(url, null);
                        if (results.success) {
                            resolve(results.result);
                        }
                        else {
                            reject(results.message);
                        }
                    }, function (error) {
                        _this.remoteInvocationPromiseByPath.set(url, null);
                        reject(error);
                    });
                });
            }));
        }
        return this.remoteInvocationPromiseByPath.get(url);
    };
    /**
     * @param {?} response
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onFileUploaded = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        /** @type {?} */
        var result = JSON.parse(response);
        /** @type {?} */
        var results = Object.setPrototypeOf(result, OperationResult.prototype);
        if (results.success) {
            /** @type {?} */
            var imageDefinition_1 = {
                title: results.result.Title,
                url: results.result.Source
            };
            /** @type {?} */
            var newImages = (/** @type {?} */ (JSON.parse(JSON.stringify(this.imageListPicker.images))));
            newImages.push(imageDefinition_1);
            this.images = newImages;
            setTimeout(function () {
                _this.imageListPicker.setSelectedImage(imageDefinition_1);
            }, 0);
        }
    };
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
            return "<table class=\"table table-bordered table-striped\">\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
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
            _this.markdownValue = _this._editor.getValue();
        });
        this._editor.on("blur", function (e) {
            if (!_this._btnToolbarHasBeenClicked) {
                _this.blur.emit(e);
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
     * @return {?}
     */
    MarkdownEditorComponent.prototype.toolbarButtonMouseDown = /**
     * @return {?}
     */
    function () {
        this._btnToolbarHasBeenClicked = true;
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
            case 'Table':
                selectedText = "\n| ** " + (selectedText || initText) + " ** | **Column Header** | **Column Header** | **Column Header** |\n|--------------|-----------------------|-------------------|--------------------|\n| Text         | Yes                   | Yes               | Yes                |\n| Text         | Yes                   | Yes               | Yes                |\n| Text         | Yes                   | Yes               | Yes                |\n| Text         | Yes                   | Yes               | Yes                |";
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
    };
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.selectImage = /**
     * @return {?}
     */
    function () {
        this.getAllFiles();
        this.openModal(this.modalTemplate);
    };
    /**
     * @param {?} image
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onImageSelected = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
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
        selectedText = "![](" + image.url + ")";
        this._editor.session.replace(range, selectedText);
        if (!isSelected) {
            range.start.column += startSize;
            range.end.column = range.start.column + initText.length;
            this._editor.selection.setRange(range);
        }
        this.modalRef.close();
        this._editor.focus();
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MarkdownEditorComponent.prototype.openModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.modalRef = _this.modalService.open(content);
            _this.modalRef.result.then(function (result) {
                _this._btnToolbarHasBeenClicked = false;
                resolve(result);
            }, function (reason) {
                _this._btnToolbarHasBeenClicked = false;
                resolve(null);
            });
        });
    };
    /**
     * @return {?}
     */
    MarkdownEditorComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
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
            _this._btnToolbarHasBeenClicked = false;
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
            var e_2, _a;
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
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_2) throw e_2.error; }
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
                    template: "<div class=\"md-editor-container\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\n  [style.height]=\"height\" [style.width]=\"width\">\n  <div class=\"md-layout\">\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Bold.title\" (click)=\"insertContent('Bold')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Bold.hidden\">\n          <i [ngClass]=\"icons.Bold.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Italic.title\" (click)=\"insertContent('Italic')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Italic.hidden\">\n          <i [ngClass]=\"icons.Italic.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Heading.title\" (click)=\"insertContent('Heading')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Heading.hidden\">\n          <i [ngClass]=\"icons.Heading.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Refrence.title\" (click)=\"insertContent('Refrence')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Refrence.hidden\">\n          <i [ngClass]=\"icons.Refrence.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Link.title\" (click)=\"insertContent('Link')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Link.hidden\">\n          <i [ngClass]=\"icons.Link.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Image.title\" (click)=\"selectImage()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Image.hidden\">\n          <i [ngClass]=\"icons.Image.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ul.title\" (click)=\"insertContent('Ul')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ul.hidden\">\n          <i [ngClass]=\"icons.Ul.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ol.title\" (click)=\"insertContent('Ol')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ol.hidden\">\n          <i [ngClass]=\"icons.Ol.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Code.title\" (click)=\"insertContent('Code')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Code.hidden\">\n          <i [ngClass]=\"icons.Code.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Table.title\" (click)=\"insertContent('Table')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Table.hidden\">\n          <i [ngClass]=\"icons.Table.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\n          [attr.title]=\"showPreviewPanel ? icons.TogglePreview.titleToggle : icons.TogglePreview.title\" (click)=\"togglePreview()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.TogglePreview.hidden\">\n          <i class=\"{{showPreviewPanel? icons.TogglePreview.iconClassToggle : icons.TogglePreview.iconClass}}\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group pull-right hide-split\">\n        <button class=\"btn btn-sm btn-default {{isFullScreen? icons.Fullscreen.activeClass : '' }}\" [title]=\"isFullScreen? icons.Fullscreen.titleToggle : icons.Fullscreen.title\" type=\"button\" (click)=\"fullScreen()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Fullscreen.hidden\">\n          <i [ngClass]=\"icons.Fullscreen.iconClass\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"editor-container\">\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\n        (dragover)=\"onDragover($event)\">\n        <div class=\"drag-container\">\n          <div class=\"upload-loading\">\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\n          </div>\n        </div>\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\n        <div class=\"editor-panel\">\n          <div class=\"ace-editor\" #aceEditor></div>\n        </div>\n      </div>\n      <div [style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\">\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\"></div>\n      </div>\n    </div>\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\n      <div class=\"text-right length-view\">\n        {{ markdownValue?.length }} / {{ maxlength }}\n      </div>\n      <div class=\"resize-btn\"></div>\n    </div>\n  </div>\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\n</div>\n<ng-template #modalTemplate let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <ngx-image-list-picker #imageListPicker [images]=\"images\" [options]=\"fileUploadOptions\" (init)=\"onImagePickerInit($event)\" (imageSelected)=\"onImageSelected($event)\" (fileUploadSucceded)=\"onFileUploaded($event)\"></ngx-image-list-picker>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n",
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
        { type: DomSanitizer },
        { type: HttpClient },
        { type: NgbModal }
    ]; };
    MarkdownEditorComponent.propDecorators = {
        aceEditorContainer: [{ type: ViewChild, args: ['aceEditor',] }],
        modalTemplate: [{ type: ViewChild, args: ['modalTemplate',] }],
        hideToolbar: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        preRender: [{ type: Input }],
        upload: [{ type: Input }],
        blur: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaC1tZC1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvbWQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFFLGlCQUFpQixFQUF3QixhQUFhLEVBQWdELE1BQU0sZ0JBQWdCLENBQUM7QUFDdEksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXpELE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBbUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQU10Rjs7OztJQUFBO0lBVUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7Ozs7SUFQQyxrQ0FBd0I7O0lBR3hCLGtDQUF1Qjs7SUFHdkIsaUNBQWlCOztBQUduQjtJQWlYRSxpQ0FDZ0MsUUFBeUIsRUFDeEIsU0FBc0IsRUFDN0MsU0FBbUIsRUFDbkIsYUFBMkIsRUFDM0IsSUFBZ0IsRUFDaEIsWUFBc0I7UUFMQSx5QkFBQSxFQUFBLGdCQUF5QjtRQUN4QiwwQkFBQSxFQUFBLGFBQXFCLENBQUM7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUM3QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQVU7UUE5TWhCLGdCQUFXLEdBQVksS0FB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bXBvbmVudCwgVmlld0NoaWxkLCBmb3J3YXJkUmVmLCBSZW5kZXJlciwgQXR0cmlidXRlLCBJbnB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNZEVkaXRvck9wdGlvbiwgSWNvbk9wdGlvbnMsIERlZmF1bHRJY29uT3B0aW9ucyB9IGZyb20gJy4vbWQtZWRpdG9yLnR5cGVzJztcbmltcG9ydCB7IE5neEltYWdlTGlzdFBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25neC1pbWFnZS1saXN0LXBpY2tlcic7XG5pbXBvcnQgeyBJRmlsZVVwbG9hZE9wdGlvbnMsIElJbWFnZURlZmluaXRpb24gfSBmcm9tICduZ3gtaW1hZ2UtbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7TmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMsIE5nYk1vZGFsUmVmfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmRlY2xhcmUgbGV0IGFjZTogYW55O1xuZGVjbGFyZSBsZXQgbWFya2VkOiBhbnk7XG5kZWNsYXJlIGxldCBobGpzOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25SZXN1bHQ8VD4ge1xuXG4gIC8qIEZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBvcmNjZXNzIHN1Y2Vzcy4gKi9cbiAgcHVibGljIHN1Y2Nlc3M6IGJvb2xlYW47XG5cbiAgLyogVGhlIHJlc3VsdCBtZXNzYWdlLiAqL1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qIFRoZSByZXN1bHQgb2YgdGhlIHJlcXVlc3QuICovXG4gIHB1YmxpYyByZXN1bHQ6IFQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kLWVkaXRvcicsXG4gIHN0eWxlVXJsczogWycuL21kLWVkaXRvci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZC1lZGl0b3IuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWFya2Rvd25FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXJrZG93bkVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxuIH0pXG5leHBvcnQgY2xhc3MgTWFya2Rvd25FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBEZWZhdWx0SWNvbk9wdGlvbnMge1xuXG4gIGdldCBCT0xEX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkJvbGRcIjsgfVxuICBnZXQgSVRBTElDX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkl0YWxpY1wiOyB9XG4gIGdldCBIRUFESU5HX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkhlYWRpbmdcIjsgfVxuICBnZXQgUkVGUkVOQ0VfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiUmVmcmVuY2VcIjsgfVxuICBnZXQgTElOS19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJMaW5rXCI7IH1cbiAgZ2V0IElNQUdFX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkltYWdlXCI7IH1cbiAgZ2V0IFVMX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIlVsXCI7IH1cbiAgZ2V0IE9MX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIk9sXCI7IH1cbiAgZ2V0IENPREVfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29kZVwiOyB9XG4gIGdldCBUQUJMRV9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUYWJsZVwiOyB9XG4gIGdldCBUT0dHTEVfUFJFVklFV19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUb2dnbGVQcmV2aWV3XCI7IH1cbiAgZ2V0IEZVTExTQ1JFRU5fSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiRnVsbHNjcmVlblwiOyB9XG5cbiAgZ2V0IEJPTEQoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuQk9MRF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWJvbGRcIixcbiAgICAgdGl0bGU6IFwiQm9sZFwiXG4gICB9O1xuIH1cbiAgZ2V0IElUQUxJQygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5JVEFMSUNfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1pdGFsaWNcIixcbiAgICAgdGl0bGU6IFwiSXRhbGljXCJcbiAgIH07XG4gfVxuICBnZXQgSEVBRElORygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5IRUFESU5HX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaGVhZGVyXCIsXG4gICAgIHRpdGxlOiBcIkhlYWRpbmdcIlxuICAgfTtcbiB9XG4gIGdldCBSRUZSRU5DRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5SRUZSRU5DRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXF1b3RlLWxlZnRcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IExJTksoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuTElOS19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpbmtcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IElNQUdFKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLklNQUdFX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaW1hZ2VcIixcbiAgICAgdGl0bGU6IFwiSW1hZ2VcIlxuICAgfTtcbiB9XG4gIGdldCBVTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5VTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3QtdWxcIixcbiAgICAgdGl0bGU6IFwiVW5vcmRlcmVkIExpc3RcIlxuICAgfTtcbiB9XG4gIGdldCBPTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3Qtb2xcIixcbiAgICAgdGl0bGU6IFwiT3JkZXJlZCBMaXN0XCJcbiAgIH07XG4gfVxuICBnZXQgQ09ERSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWZpbGUtY29kZS1vXCIsXG4gICAgIHRpdGxlOiBcIkNvZGVcIlxuICAgfTtcbiB9XG4gIGdldCBUQUJMRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5UQUJMRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXRhYmxlXCIsXG4gICAgIHRpdGxlOiBcIlRhYmxlXCJcbiAgIH07XG4gfVxuICBnZXQgVE9HR0xFX1BSRVZJRVcoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVE9HR0xFX1BSRVZJRVdfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1leWVcIixcbiAgICAgaWNvbkNsYXNzVG9nZ2xlOiBcImZhIGZhLWV5ZS1zbGFzaFwiLFxuICAgICB0aXRsZTogXCJTaG93IFByZXZpZXdcIixcbiAgICAgdGl0bGVUb2dnbGU6IFwiSGlkZSBQcmV2aWV3XCJcbiAgIH07XG4gfVxuICBnZXQgRlVMTFNDUkVFTigpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5UT0dHTEVfUFJFVklFV19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWFycm93cy1hbHRcIixcbiAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlXCIsXG4gICAgIHRpdGxlOiBcIkZ1bGxzY3JlZW5cIixcbiAgICAgdGl0bGVUb2dnbGU6IFwiUmVzdG9yZVwiXG4gICB9O1xuIH1cblxuICBnZXQgQUxMX0lDT05TKCk6IHtbaWQ6IHN0cmluZ106IEljb25PcHRpb25zfSB7XG4gICAgbGV0IGFsbEljb25zOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30gPSB7fTtcbiAgICBhbGxJY29uc1t0aGlzLkJPTERfSURdID0gdGhpcy5CT0xEO1xuICAgIGFsbEljb25zW3RoaXMuSVRBTElDX0lEXSA9IHRoaXMuSVRBTElDO1xuICAgIGFsbEljb25zW3RoaXMuSEVBRElOR19JRF0gPSB0aGlzLkhFQURJTkc7XG4gICAgYWxsSWNvbnNbdGhpcy5SRUZSRU5DRV9JRF0gPSB0aGlzLlJFRlJFTkNFO1xuICAgIGFsbEljb25zW3RoaXMuTElOS19JRF0gPSB0aGlzLkxJTks7XG4gICAgYWxsSWNvbnNbdGhpcy5JTUFHRV9JRF0gPSB0aGlzLklNQUdFO1xuICAgIGFsbEljb25zW3RoaXMuVUxfSURdID0gdGhpcy5VTDtcbiAgICBhbGxJY29uc1t0aGlzLk9MX0lEXSA9IHRoaXMuT0w7XG4gICAgYWxsSWNvbnNbdGhpcy5DT0RFX0lEXSA9IHRoaXMuQ09ERTtcbiAgICBhbGxJY29uc1t0aGlzLlRBQkxFX0lEXSA9IHRoaXMuVEFCTEU7XG4gICAgYWxsSWNvbnNbdGhpcy5UT0dHTEVfUFJFVklFV19JRF0gPSB0aGlzLlRPR0dMRV9QUkVWSUVXO1xuICAgIGFsbEljb25zW3RoaXMuRlVMTFNDUkVFTl9JRF0gPSB0aGlzLkZVTExTQ1JFRU47XG4gICAgcmV0dXJuIGFsbEljb25zO1xuIH1cblxuICBnZXQgQUxMX0lDT05fSURTKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLkJPTERfSUQsXG4gICAgICB0aGlzLklUQUxJQ19JRCxcbiAgICAgIHRoaXMuSEVBRElOR19JRCxcbiAgICAgIHRoaXMuUkVGUkVOQ0VfSUQsXG4gICAgICB0aGlzLkxJTktfSUQsXG4gICAgICB0aGlzLklNQUdFX0lELFxuICAgICAgdGhpcy5VTF9JRCxcbiAgICAgIHRoaXMuT0xfSUQsXG4gICAgICB0aGlzLkNPREVfSUQsXG4gICAgICB0aGlzLlRBQkxFX0lELFxuICAgICAgdGhpcy5UT0dHTEVfUFJFVklFV19JRCxcbiAgICAgIHRoaXMuRlVMTFNDUkVFTl9JRFxuICAgIF07XG4gIH1cblxuICBAVmlld0NoaWxkKCdhY2VFZGl0b3InKSBwdWJsaWMgYWNlRWRpdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtb2RhbFRlbXBsYXRlJykgcHVibGljIG1vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlVG9vbGJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBzdHJpbmcgPSBcIjMwMHB4XCI7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gXCIxMDAlXCI7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcmVSZW5kZXI6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkOiBGdW5jdGlvbjtcbiAgQE91dHB1dCgpIHB1YmxpYyBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgfHwgJ2VkaXRvcic7XG4gIH1cblxuICBwdWJsaWMgaW1hZ2VzOiBBcnJheTxJSW1hZ2VEZWZpbml0aW9uPjtcblxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdlZGl0b3InICYmIHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdwcmV2aWV3JykpIHtcbiAgICAgIHZhbHVlID0gJ2VkaXRvcic7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSByZW1vdGUgaW52b2NhdGlvbiBwcm9taXNlIGJ5IHJlcXVlc3RlZCBwYXRoICovXG4gIHB1YmxpYyByZW1vdGVJbnZvY2F0aW9uUHJvbWlzZUJ5UGF0aCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPGFueT4+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBvcHRpb25zKCk6IE1kRWRpdG9yT3B0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucyB8fCB7fTtcbiAgfVxuICBwdWJsaWMgc2V0IG9wdGlvbnModmFsdWU6IE1kRWRpdG9yT3B0aW9uKSB7XG4gICAgY29uc3QgZGVmYXVsdEljb25PcHRpb25zOiBEZWZhdWx0SWNvbk9wdGlvbnMgPSB0aGlzO1xuICAgIHRoaXMuX2RlZmF1bHRPcHRpb24uaWNvbnMgPSBkZWZhdWx0SWNvbk9wdGlvbnMuQUxMX0lDT05TO1xuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuX2RlZmF1bHRPcHRpb24sIHt9LCB2YWx1ZSk7XG4gICAgdGhpcy5pY29ucyA9IGRlZmF1bHRJY29uT3B0aW9ucy5BTExfSUNPTlM7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaWNvbnMpIHtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9vcHRpb25zLmljb25zKSkge1xuICAgICAgICBpZihkZWZhdWx0SWNvbk9wdGlvbnMuQUxMX0lDT05fSURTLmluZGV4T2Yoa2V5KSE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuaWNvbnNba2V5XSA9IHRoaXMuX29wdGlvbnMuaWNvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZih2YWx1ZS51cGxvYWRGaWxlVXJsKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLnVybCA9IHZhbHVlLnVwbG9hZEZpbGVVcmw7XG4gICAgfVxuICAgIGlmKHZhbHVlLmdldFRva2VuKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLmdldFRva2VuID0gdmFsdWUuZ2V0VG9rZW47XG4gICAgfVxuICAgIGlmKHZhbHVlLnBhcmFtZXRlcnNUb0FkZCkge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy5wYXJhbWV0ZXJzVG9BZGQgPSB2YWx1ZS5wYXJhbWV0ZXJzVG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgaW1hZ2VMaXN0UGlja2VyOiBOZ3hJbWFnZUxpc3RQaWNrZXJDb21wb25lbnQ7XG5cbiAgZmlsZVVwbG9hZE9wdGlvbnM6IElGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAgICB1cmw6IFwiXCIsXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlOiAodmFsdWU/OiBzdHJpbmcpID0+IHZvaWQsIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwYXJhbWV0ZXJzVG9BZGQ6IG5ldyBNYXAoW1tcInBhdGhcIixcInVwbG9hZC90YXhvbm9taWEtZXF1aXBvLWJtdlwiXV0pXG4gIH07XG5cbiAgcHVibGljIGdldEFsbEZpbGVzKCkge1xuICAgIHRoaXMubGlzdEZpbGVzSW5CbG9iQnlQYXRoKHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMucGFyYW1ldGVyc1RvQWRkLmdldChcInBhdGhcIikpLnRoZW4oKHJlbW90ZUZpbGVzKSA9PiB7XG4gICAgICB0aGlzLmltYWdlcyA9IG5ldyBBcnJheTxJSW1hZ2VEZWZpbml0aW9uPigpO1xuICAgICAgaWYocmVtb3RlRmlsZXMgIT09IG51bGwpIHtcbiAgICAgICAgcmVtb3RlRmlsZXMuZm9yRWFjaChyZW1vdGVGaWxlID0+IHtcbiAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBkZWNvZGVVUklDb21wb25lbnQodGhpcy5nZXRGaWxlTmFtZShyZW1vdGVGaWxlKSksXG4gICAgICAgICAgICB1cmw6IHJlbW90ZUZpbGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZmlsZW5hbWUgb2YgYSB1cmxcbiAgICpcbiAgICogQHBhcmFtIHVybCB0aGUgdXJsIHRvIHJldmlld1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRGaWxlTmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCcvJykrMSk7XG4gIH1cblxuICBwdWJsaWMgb25JbWFnZVBpY2tlckluaXQoaW1hZ2VQaWNrZXJDb21wb25lbnQ6IE5neEltYWdlTGlzdFBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuaW1hZ2VMaXN0UGlja2VyID0gaW1hZ2VQaWNrZXJDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogTGlzdHMgYWxsIHRoZSBmaWxlcyBjb250YWluZWQgaW4gYSBwYXRoIG9mIHRoZSBibG9iLlxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCB0aGUgcGF0aCB0byBxdWVyeSBpbiB0aGUgcmVtb3RlIGJsb2IgY29udGFpbmVyXG4gICAqIEBwYXJhbSBxdWVyeUNyaXRlcmlhIHRoZSBxdWVyeSBjcml0ZXJpYSB0byB1c2UgdG8gZmV0Y2ggZGF0YSBmcm9tIHRoZSByZW1vdGUgc2VydmljZVxuICAgKi9cbiAgcHVibGljIGxpc3RGaWxlc0luQmxvYkJ5UGF0aChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLl9vcHRpb25zLmxpc3RGaWxlc1VybDtcbiAgICBpZiAoIXRoaXMucmVtb3RlSW52b2NhdGlvblByb21pc2VCeVBhdGguaGFzKHVybCkgfHwgdGhpcy5yZW1vdGVJbnZvY2F0aW9uUHJvbWlzZUJ5UGF0aC5nZXQodXJsKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdGVJbnZvY2F0aW9uUHJvbWlzZUJ5UGF0aC5zZXQodXJsLCBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KGAke3VybH1gLCB7IHJ1dGE6IHBhdGggfSwgaHR0cE9wdGlvbnMpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0czogT3BlcmF0aW9uUmVzdWx0PEFycmF5PHN0cmluZz4+ID0gT2JqZWN0LnNldFByb3RvdHlwZU9mKHJlc3VsdCwgT3BlcmF0aW9uUmVzdWx0LnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbW90ZUludm9jYXRpb25Qcm9taXNlQnlQYXRoLnNldCh1cmwsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgaWYocmVzdWx0cy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXN1bHRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdGVJbnZvY2F0aW9uUHJvbWlzZUJ5UGF0aC5zZXQodXJsLCBudWxsKTtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbW90ZUludm9jYXRpb25Qcm9taXNlQnlQYXRoLmdldCh1cmwpO1xuICB9XG5cbiAgcHVibGljIG9uRmlsZVVwbG9hZGVkKHJlc3BvbnNlOiBhbnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICBjb25zdCByZXN1bHRzOiBPcGVyYXRpb25SZXN1bHQ8e1RpdGxlOiBzdHJpbmcsIERlc2NyaXB0aW9uOiBzdHJpbmcsIE9yZGVyOiBudW1iZXIsIFNvdXJjZTogc3RyaW5nfT4gPSBPYmplY3Quc2V0UHJvdG90eXBlT2YocmVzdWx0LCBPcGVyYXRpb25SZXN1bHQucHJvdG90eXBlKTtcbiAgICBpZihyZXN1bHRzLnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGltYWdlRGVmaW5pdGlvbjogSUltYWdlRGVmaW5pdGlvbiA9ICB7XG4gICAgICAgIHRpdGxlOiByZXN1bHRzLnJlc3VsdC5UaXRsZSxcbiAgICAgICAgdXJsOiByZXN1bHRzLnJlc3VsdC5Tb3VyY2VcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdJbWFnZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuaW1hZ2VMaXN0UGlja2VyLmltYWdlcykpIGFzIEFycmF5PElJbWFnZURlZmluaXRpb24+O1xuICAgICAgbmV3SW1hZ2VzLnB1c2goaW1hZ2VEZWZpbml0aW9uKTtcbiAgICAgIHRoaXMuaW1hZ2VzID0gbmV3SW1hZ2VzO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW1hZ2VMaXN0UGlja2VyLnNldFNlbGVjdGVkSW1hZ2UoaW1hZ2VEZWZpbml0aW9uKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlZmF1bHRPcHRpb246IE1kRWRpdG9yT3B0aW9uID0ge1xuICAgIHNob3dCb3JkZXI6IHRydWUsXG4gICAgaWNvbnM6IHt9LFxuICAgIHNjcm9sbFBhc3RFbmQ6IDAsXG4gICAgZW5hYmxlUHJldmlld0NvbnRlbnRDbGljazogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBnZXRUb2tlbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHBhcmFtZXRlcnNUb0FkZDogbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICB9O1xuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgaWNvbnM6IHtbaWQ6IHN0cmluZ106IEljb25PcHRpb25zfSA9IHt9O1xuICBwdWJsaWMgc2hvd1ByZXZpZXdQYW5lbDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc0Z1bGxTY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHByZXZpZXdIdG1sOiBhbnk7XG4gIHB1YmxpYyBkcmFnb3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNVcGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IG1hcmtkb3duVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Rvd25WYWx1ZSB8fCAnJztcbiAgfVxuICBwdWJsaWMgc2V0IG1hcmtkb3duVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX21hcmtkb3duVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5wcmVSZW5kZXIgJiYgdGhpcy5wcmVSZW5kZXIgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgdmFsdWUgPSB0aGlzLnByZVJlbmRlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fcmVuZGVyTWFya1RpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLl9yZW5kZXJNYXJrVGltZW91dCk7XG4gICAgICB0aGlzLl9yZW5kZXJNYXJrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgaHRtbCA9IG1hcmtlZCh2YWx1ZSB8fCAnJywgdGhpcy5fbWFya2VkT3B0KTtcbiAgICAgICAgdGhpcy5wcmV2aWV3SHRtbCA9IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX21hcmtkb3duVmFsdWU6IGFueTtcblxuICBwcml2YXRlIF9lZGl0b3I6IGFueTtcbiAgcHJpdmF0ZSBfYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2VkaXRvclJlc2l6ZVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgX3JlbmRlck1hcmtUaW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgX21hcmtlZE9wdDogYW55O1xuXG4gIHByaXZhdGUgZ2V0IF9oYXNVcGxvYWRGdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWQgJiYgdGhpcy51cGxvYWQgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEF0dHJpYnV0ZSgncmVxdWlyZWQnKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBAQXR0cmlidXRlKCdtYXhsZW5ndGgnKSBwdWJsaWMgbWF4bGVuZ3RoOiBudW1iZXIgPSAtMSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgbWFya2VkUmVuZGVyID0gbmV3IG1hcmtlZC5SZW5kZXJlcigpO1xuICAgIG1hcmtlZFJlbmRlci5jb2RlID0gKGNvZGU6IGFueSwgbGFuZ3VhZ2U6IGFueSkgPT4ge1xuICAgICAgbGV0IHZhbGlkTGFuZyA9ICEhKGxhbmd1YWdlICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpKTtcbiAgICAgIGxldCBoaWdobGlnaHRlZCA9IHZhbGlkTGFuZyA/IGhsanMuaGlnaGxpZ2h0KGxhbmd1YWdlLCBjb2RlKS52YWx1ZSA6IGNvZGU7XG4gICAgICByZXR1cm4gYDxwcmUgc3R5bGU9XCJwYWRkaW5nOiAwOyBib3JkZXItcmFkaXVzOiAwO1wiPjxjb2RlIGNsYXNzPVwiaGxqcyAke2xhbmd1YWdlfVwiPiR7aGlnaGxpZ2h0ZWR9PC9jb2RlPjwvcHJlPmA7XG4gICAgfTtcbiAgICBtYXJrZWRSZW5kZXIudGFibGUgPSAoaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkXCI+XFxuPHRoZWFkPlxcbiR7aGVhZGVyfTwvdGhlYWQ+XFxuPHRib2R5PlxcbiR7Ym9keX08L3Rib2R5PlxcbjwvdGFibGU+XFxuYDtcbiAgICB9O1xuICAgIG1hcmtlZFJlbmRlci5saXN0aXRlbSA9ICh0ZXh0OiBhbnkpID0+IHtcbiAgICAgIGlmICgvXlxccypcXFtbeCBdXFxdXFxzKi8udGVzdCh0ZXh0KSkge1xuICAgICAgICB0ZXh0ID0gdGV4dFxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzKlxcWyBcXF1cXHMqLywgJzxpIGNsYXNzPVwiZmEgZmEtc3F1YXJlLW9cIiBzdHlsZT1cIm1hcmdpbjogMCAwLjJlbSAwLjI1ZW0gLTEuNmVtO1wiPjwvaT4gJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxccypcXFt4XFxdXFxzKi8sICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrLXNxdWFyZVwiIHN0eWxlPVwibWFyZ2luOiAwIDAuMmVtIDAuMjVlbSAtMS42ZW07XCI+PC9pPiAnKTtcbiAgICAgICAgcmV0dXJuIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOiBub25lO1wiPiR7dGV4dH08L2xpPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYDxsaT4ke3RleHR9PC9saT5gO1xuICAgICAgfVxuICAgIH07XG4gICAgbGV0IG1hcmtlZGpzT3B0ID0ge1xuICAgICAgcmVuZGVyZXI6IG1hcmtlZFJlbmRlcixcbiAgICAgIGhpZ2hsaWdodDogKGNvZGU6IGFueSkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlXG4gICAgfTtcbiAgICB0aGlzLl9tYXJrZWRPcHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMubWFya2VkanNPcHQsIG1hcmtlZGpzT3B0KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsZXQgZWRpdG9yRWxlbWVudCA9IHRoaXMuYWNlRWRpdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fZWRpdG9yID0gYWNlLmVkaXQoZWRpdG9yRWxlbWVudCk7XG4gICAgdGhpcy5fZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICAgIHRoaXMuX2VkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV3JhcE1vZGUodHJ1ZSk7XG4gICAgdGhpcy5fZWRpdG9yLmdldFNlc3Npb24oKS5zZXRNb2RlKFwiYWNlL21vZGUvbWFya2Rvd25cIik7XG4gICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHRoaXMubWFya2Rvd25WYWx1ZSB8fCAnJywgMSk7XG4gICAgdGhpcy5fZWRpdG9yLnNldE9wdGlvbignc2Nyb2xsUGFzdEVuZCcsIHRoaXMuX29wdGlvbnMuc2Nyb2xsUGFzdEVuZCB8fCAwKTtcblxuICAgIHRoaXMuX2VkaXRvci5vbihcImNoYW5nZVwiLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLm1hcmtkb3duVmFsdWUgPSB0aGlzLl9lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VkaXRvci5vbihcImJsdXJcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgaWYoIXRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCkge1xuICAgICAgICB0aGlzLmJsdXIuZW1pdChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VkaXRvciAmJiB0aGlzLl9lZGl0b3IuZGVzdHJveSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgQXJyYXk8YW55Pik6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5fZWRpdG9yLnNldFZhbHVlKHZhbHVlIHx8ICcnLCAxKTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgbGV0IHJlc3VsdDogYW55ID0gbnVsbDtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLm1hcmtkb3duVmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGxlbmd0aCA+IDAgJiYgdGhpcy5tYXJrZG93blZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB7IG1heGxlbmd0aDogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9vbGJhckJ1dHRvbk1vdXNlRG93bigpIHtcbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5zZXJ0Q29udGVudCh0eXBlOiBzdHJpbmcsIGN1c3RvbUNvbnRlbnQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLl9lZGl0b3IuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgbGV0IGlzU2VsZWN0ZWQgPSAhIXNlbGVjdGVkVGV4dDtcbiAgICBsZXQgc3RhcnRTaXplID0gMjtcbiAgICBsZXQgaW5pdFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIGxldCByYW5nZSA9IHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uZ2V0UmFuZ2UoKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0JvbGQnOlxuICAgICAgICBpbml0VGV4dCA9ICdCb2xkIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKioke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0qKmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSXRhbGljJzpcbiAgICAgICAgaW5pdFRleHQgPSAnSXRhbGljIFRleHQnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBgKiR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fSpgO1xuICAgICAgICBzdGFydFNpemUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hlYWRpbmcnOlxuICAgICAgICBpbml0VGV4dCA9ICdIZWFkaW5nJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCMgJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSZWZyZW5jZSc6XG4gICAgICAgIGluaXRUZXh0ID0gJ1JlZnJlbmNlJztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYD4gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdMaW5rJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYFtdKGh0dHA6Ly8pYDtcbiAgICAgICAgc3RhcnRTaXplID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdJbWFnZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAhW10oaHR0cDovLylgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1VsJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYC0gJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9YFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ09sJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYDEuICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWBcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWJsZSc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9YFxufCAqKiAke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0gKiogfCAqKkNvbHVtbiBIZWFkZXIqKiB8ICoqQ29sdW1uIEhlYWRlcioqIHwgKipDb2x1bW4gSGVhZGVyKiogfFxufC0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS18XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxcbnwgVGV4dCAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgfFxufCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxgO1xuICAgICAgICBzdGFydFNpemUgPSA2O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NvZGUnOlxuICAgICAgICBpbml0VGV4dCA9ICdTb3VyY2UgQ29kZSc7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IFwiYGBgbGFuZ3VhZ2VcXHJcXG5cIiArIChzZWxlY3RlZFRleHQgfHwgaW5pdFRleHQpICsgXCJcXHJcXG5gYGBcIjtcbiAgICAgICAgc3RhcnRTaXplID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDdXN0b20nOlxuICAgICAgICBzZWxlY3RlZFRleHQgPSBjdXN0b21Db250ZW50O1xuICAgICAgICBzdGFydFNpemUgPSAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5fZWRpdG9yLnNlc3Npb24ucmVwbGFjZShyYW5nZSwgc2VsZWN0ZWRUZXh0KTtcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgIHJhbmdlLnN0YXJ0LmNvbHVtbiArPSBzdGFydFNpemU7XG4gICAgICByYW5nZS5lbmQuY29sdW1uID0gcmFuZ2Uuc3RhcnQuY29sdW1uICsgaW5pdFRleHQubGVuZ3RoO1xuICAgICAgdGhpcy5fZWRpdG9yLnNlbGVjdGlvbi5zZXRSYW5nZShyYW5nZSk7XG4gICAgfVxuICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEltYWdlKCkge1xuICAgIHRoaXMuZ2V0QWxsRmlsZXMoKTtcbiAgICB0aGlzLm9wZW5Nb2RhbCh0aGlzLm1vZGFsVGVtcGxhdGUpO1xuICB9XG5cbiAgcHVibGljIG9uSW1hZ2VTZWxlY3RlZChpbWFnZTogSUltYWdlRGVmaW5pdGlvbikge1xuICAgIGlmICghdGhpcy5fZWRpdG9yKSByZXR1cm47XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IHRoaXMuX2VkaXRvci5nZXRTZWxlY3RlZFRleHQoKTtcbiAgICBsZXQgaXNTZWxlY3RlZCA9ICEhc2VsZWN0ZWRUZXh0O1xuICAgIGxldCBzdGFydFNpemUgPSAyO1xuICAgIGxldCBpbml0VGV4dDogc3RyaW5nID0gJyc7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5fZWRpdG9yLnNlbGVjdGlvbi5nZXRSYW5nZSgpO1xuICAgIHNlbGVjdGVkVGV4dCA9IFwiIVtdKFwiICsgaW1hZ2UudXJsICsgXCIpXCI7XG4gICAgdGhpcy5fZWRpdG9yLnNlc3Npb24ucmVwbGFjZShyYW5nZSwgc2VsZWN0ZWRUZXh0KTtcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgIHJhbmdlLnN0YXJ0LmNvbHVtbiArPSBzdGFydFNpemU7XG4gICAgICByYW5nZS5lbmQuY29sdW1uID0gcmFuZ2Uuc3RhcnQuY29sdW1uICsgaW5pdFRleHQubGVuZ3RoO1xuICAgICAgdGhpcy5fZWRpdG9yLnNlbGVjdGlvbi5zZXRSYW5nZShyYW5nZSk7XG4gICAgfVxuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuTW9kYWwoY29udGVudDogYW55KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZTogKHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQpO1xuICAgICAgdGhpcy5tb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIHRvZ2dsZVByZXZpZXcoKSB7XG4gICAgdGhpcy5zaG93UHJldmlld1BhbmVsID0gIXRoaXMuc2hvd1ByZXZpZXdQYW5lbDtcbiAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICB9XG5cbiAgcHJldmlld1BhbmVsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVQcmV2aWV3Q29udGVudENsaWNrICE9PSB0cnVlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9ICF0aGlzLmlzRnVsbFNjcmVlbjtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93WScsIHRoaXMuaXNGdWxsU2NyZWVuID8gJ2hpZGRlbicgOiAnYXV0bycpO1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBtZEVkaXRvclJlc2l6ZShzaXplOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICB9XG5cbiAgZWRpdG9yUmVzaXplKHRpbWVPdXQ6IG51bWJlciA9IDEwMCkge1xuICAgIGlmICghdGhpcy5fZWRpdG9yKSByZXR1cm5cbiAgICBpZiAodGhpcy5fZWRpdG9yUmVzaXplVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLl9lZGl0b3JSZXNpemVUaW1lcik7XG4gICAgdGhpcy5fZWRpdG9yUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2VkaXRvci5yZXNpemUoKTtcbiAgICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICAgICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gICAgfSwgdGltZU91dCk7XG4gIH1cblxuICBvbkRyYWdvdmVyKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24pIHJldHVybjtcbiAgICB0aGlzLmRyYWdvdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRHJvcChldnQ6IERyYWdFdmVudCkge1xuICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2hhc1VwbG9hZEZ1bmN0aW9uIHx8IHRoaXMuaXNVcGxvYWRpbmcpIHJldHVybjtcblxuICAgIGlmICghZXZ0LmRhdGFUcmFuc2Zlci5maWxlcyB8fCBldnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZChldnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICBsZXQgbXNnID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdGVtcE1zZyA9IGBbJHtpdGVtLm5hbWV9XSgke2l0ZW0udXJsfSlgO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaXNJbWcpIHtcbiAgICAgICAgICAgICAgdGVtcE1zZyA9IGAhJHt0ZW1wTXNnfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtc2cucHVzaCh0ZW1wTXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pbnNlcnRDb250ZW50KCdDdXN0b20nLCBtc2cuam9pbignXFxyXFxuJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCB1cGxvYWQgcmVzdWx0LiBQbGVhc2UgdXNpbmcgZm9sbG93IHRoaXMgdHlwZSBgVXBsb2FkUmVzdWx0YC4nKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkRyYWdsZWF2ZShldnQ6IERyYWdFdmVudCkge1xuICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2hhc1VwbG9hZEZ1bmN0aW9uKSByZXR1cm47XG4gICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICB9XG59XG4iXX0=