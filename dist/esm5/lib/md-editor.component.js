/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, forwardRef, Renderer, Attribute, Input, ElementRef, EventEmitter, Output, TemplateRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from "@angular/common/http";
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
    /**
     * @param {?=} event
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onResize = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.screenHeight = window.innerHeight;
    };
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
                if (_this.isFullScreen) {
                    _this.isFullScreen = !_this.isFullScreen;
                    _this._renderer.setElementStyle(document.body, 'overflowY', _this.isFullScreen ? 'hidden' : 'auto');
                    _this.editorResize();
                    _this.blur.emit(e);
                }
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
        this.openModal(this.modalTemplate);
    };
    /**
     * @param {?} image
     * @return {?}
     */
    MarkdownEditorComponent.prototype.onFileSelected = /**
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
     * @return {?}
     */
    MarkdownEditorComponent.prototype.processClickToolbar = /**
     * @return {?}
     */
    function () {
        this._btnToolbarHasBeenClicked = false;
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
        this._btnToolbarHasBeenClicked = false;
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
                    template: "<div class=\"md-editor-container\" [class.fullscreen]=\"isFullScreen\" [class.md-editor-resizable]=\"options?.resizable\"\n  [style.height]=\"height\" [style.width]=\"width\">\n  <div class=\"md-layout\">\n    <div class=\"tool-bar\" *ngIf=\"!hideToolbar && mode != 'preview'\" (mousedown)=\"toolbarButtonMouseDown()\" (click)=\"processClickToolbar()\">\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Bold.title\" (click)=\"insertContent('Bold')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Bold.hidden\">\n          <i [ngClass]=\"icons.Bold.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Italic.title\" (click)=\"insertContent('Italic')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Italic.hidden\">\n          <i [ngClass]=\"icons.Italic.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Heading.title\" (click)=\"insertContent('Heading')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Heading.hidden\">\n          <i [ngClass]=\"icons.Heading.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Refrence.title\" (click)=\"insertContent('Refrence')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Refrence.hidden\">\n          <i [ngClass]=\"icons.Refrence.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Link.title\" (click)=\"insertContent('Link')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Link.hidden\">\n          <i [ngClass]=\"icons.Link.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Image.title\" (click)=\"selectImage()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Image.hidden\">\n          <i [ngClass]=\"icons.Image.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ul.title\" (click)=\"insertContent('Ul')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ul.hidden\">\n          <i [ngClass]=\"icons.Ul.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Ol.title\" (click)=\"insertContent('Ol')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Ol.hidden\">\n          <i [ngClass]=\"icons.Ol.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Code.title\" (click)=\"insertContent('Code')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Code.hidden\">\n          <i [ngClass]=\"icons.Code.iconClass\"></i>\n        </button>\n        <button class=\"btn btn-sm btn-default\" type=\"button\" [title]=\"icons.Table.title\" (click)=\"insertContent('Table')\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Table.hidden\">\n          <i [ngClass]=\"icons.Table.iconClass\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-sm btn-default\" type=\"button\"\n          [attr.title]=\"showPreviewPanel ? icons.TogglePreview.titleToggle : icons.TogglePreview.title\" (click)=\"togglePreview()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.TogglePreview.hidden\">\n          <i class=\"{{showPreviewPanel? icons.TogglePreview.iconClassToggle : icons.TogglePreview.iconClass}}\"></i>\n        </button>\n      </div>\n      <div class=\"btn-group pull-right hide-split\">\n        <button class=\"btn btn-sm btn-default {{isFullScreen? icons.Fullscreen.activeClass : '' }}\" [title]=\"isFullScreen? icons.Fullscreen.titleToggle : icons.Fullscreen.title\" type=\"button\" (click)=\"fullScreen()\" (mousedown)=\"toolbarButtonMouseDown()\"\n          *ngIf=\"!icons.Fullscreen.hidden\">\n          <i [ngClass]=\"icons.Fullscreen.iconClass\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"editor-container\">\n      <div [class.dragover]=\"dragover\" [style.display]=\"mode == 'preview' ? 'none' : null\"\n        (dragover)=\"onDragover($event)\">\n        <div class=\"drag-container\">\n          <div class=\"upload-loading\">\n            <i class=\"fa fa-upload\" *ngIf=\"!isUploading\"></i>\n            <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"isUploading\"></i>\n            <div class=\"text\">{{ isUploading ? 'Uploading' : 'Drag it here' }}</div>\n          </div>\n        </div>\n        <div class=\"drag-container drag-container-mask\" (drop)=\"onDrop($event)\" (dragleave)=\"onDragleave($event)\"></div>\n        <div class=\"editor-panel\">\n          <div class=\"ace-editor\" #aceEditor></div>\n        </div>\n      </div>\n      <div [style.display]=\"showPreviewPanel ? 'block' : 'none'\" (click)=\"previewPanelClick($event)\" (mousedown)=\"toolbarButtonMouseDown()\">\n        <div class=\"preview-panel\" [innerHtml]=\"previewHtml\" [style.height]=\"isFullScreen ? (screenHeight - 57) + 'px' : height + 'px'\"></div>\n      </div>\n    </div>\n    <div class=\"md-footer\" *ngIf=\"maxlength > 0 && mode != 'preview'\">\n      <div class=\"text-right length-view\">\n        {{ markdownValue?.length }} / {{ maxlength }}\n      </div>\n      <div class=\"resize-btn\"></div>\n    </div>\n  </div>\n  <md-editor-resize-sensor *ngIf=\"options?.resizable\" (resize)=\"mdEditorResize($event)\"></md-editor-resize-sensor>\n</div>\n<ng-template #modalTemplate let-modal>\n  <ngx-file-list-picker #imageListPicker [options]=\"fileUploadOptions\" (fileSelected)=\"onFileSelected($event)\" ></ngx-file-list-picker>\n</ng-template>\n",
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
                    styles: [".md-editor-container{position:relative;height:100%;margin-bottom:15px;border:1px solid rgba(0,0,0,.1)}.md-editor-container.fullscreen{margin:0;position:fixed;border:0;top:0;left:0;width:100%!important;height:100%!important;z-index:1000}.md-editor-container.md-editor-resizable:not(.fullscreen){resize:both;overflow:auto;display:inline-block;width:100%}.md-editor-container.md-editor-resizable:not(.fullscreen) .md-footer{z-index:-1}.md-editor-container .md-layout{height:100%;display:flex;flex-direction:column}.md-editor-container .md-layout .tool-bar{background-color:#f5f5f5;border-bottom:1px solid rgba(0,0,0,.1)}.md-editor-container .md-layout .tool-bar .btn-group{padding:6px}.md-editor-container .md-layout .tool-bar .btn-group:first-child>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn-group>.btn:first-child::before{content:' ';background-color:#a9a9a9;width:1px;height:24px;left:-9px;top:2px;position:absolute}.md-editor-container .md-layout .tool-bar .btn-group.hide-split>.btn:first-child::before{display:none}.md-editor-container .md-layout .tool-bar .btn{margin-bottom:0}.md-editor-container .md-layout .editor-container{flex:1;display:flex}.md-editor-container .md-layout .editor-container>div{flex:1}.md-editor-container .md-layout .editor-container>div .drag-container{display:none}.md-editor-container .md-layout .editor-container>div.dragover{position:relative}.md-editor-container .md-layout .editor-container>div.dragover .drag-container{display:block;position:absolute;left:0;top:0;right:0;bottom:0;z-index:10;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:50px;color:#fff}.md-editor-container .md-layout .editor-container>div.dragover .drag-container.drag-container-mask{background-color:transparent;z-index:11}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading{display:flex;flex-direction:column;align-items:center}.md-editor-container .md-layout .editor-container>div.dragover .drag-container .upload-loading .text{font-size:20px;margin-top:10px}.md-editor-container .md-layout .editor-container .editor-panel{height:100%}.md-editor-container .md-layout .editor-container .editor-panel .ace-editor{height:100%;min-height:100%}.md-editor-container .md-layout .preview-panel{border-left:1px solid rgba(0,0,0,.1);background-color:#fff;padding:10px;overflow-y:auto}.md-editor-container .md-layout .md-footer{background-color:#f0f0f0;border-top:1px solid rgba(0,0,0,.1);display:flex;align-items:center}.md-editor-container .md-layout .md-footer .length-view{flex:1;padding:4px 2px 0;font-size:12px;line-height:16px}.md-editor-container .md-layout .md-footer .resize-btn{width:17px}"]
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
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaC1tZC1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvbWQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl6RCxPQUFPLEVBQWUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBbUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQU10Rjs7OztJQUFBO0lBVUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7Ozs7SUFQQyxrQ0FBd0I7O0lBR3hCLGtDQUF1Qjs7SUFHdkIsaUNBQWlCOztBQUduQjtJQWlURSxpQ0FDZ0MsUUFBeUIsRUFDeEIsU0FBc0IsRUFDN0MsU0FBbUIsRUFDbkIsYUFBMkIsRUFDM0IsSUFBZ0IsRUFDaEIsWUFBc0I7UUFMQSx5QkFBQSxFQUFBLGdCQUF5QjtRQUN4QiwwQkFBQSxFQUFBLGFBQXFCLENBQUM7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUM3QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQVU7UUE5SWhCLGdCQUFXLEdBQVksS0FB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O0lBQ3ZELDRDQUFxRDs7Ozs7SUFDckQsNENBQTJCOzs7OztJQUMzQixnREFBbUM7Ozs7O0lBQ25DLHVDQUF3Qjs7Ozs7SUFDeEIsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYsIFJlbmRlcmVyLCBBdHRyaWJ1dGUsIElucHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVGVtcGxhdGVSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWRFZGl0b3JPcHRpb24sIEljb25PcHRpb25zLCBEZWZhdWx0SWNvbk9wdGlvbnMgfSBmcm9tICcuL21kLWVkaXRvci50eXBlcyc7XG5pbXBvcnQgeyBOZ3hJbWFnZUxpc3RQaWNrZXJDb21wb25lbnQgfSBmcm9tICduZ3gtaW1hZ2UtbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgSUZpbGVVcGxvYWRPcHRpb25zLCBJSW1hZ2VEZWZpbml0aW9uIH0gZnJvbSAnbmd4LWltYWdlLWxpc3QtcGlja2VyJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge05nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zLCBOZ2JNb2RhbFJlZn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5kZWNsYXJlIGxldCBhY2U6IGFueTtcbmRlY2xhcmUgbGV0IG1hcmtlZDogYW55O1xuZGVjbGFyZSBsZXQgaGxqczogYW55O1xuXG5leHBvcnQgY2xhc3MgT3BlcmF0aW9uUmVzdWx0PFQ+IHtcblxuICAvKiBGbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwb3JjY2VzcyBzdWNlc3MuICovXG4gIHB1YmxpYyBzdWNjZXNzOiBib29sZWFuO1xuXG4gIC8qIFRoZSByZXN1bHQgbWVzc2FnZS4gKi9cbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcblxuICAvKiBUaGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LiAqL1xuICBwdWJsaWMgcmVzdWx0OiBUO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZC1lZGl0b3InLFxuICBzdHlsZVVybHM6IFsnLi9tZC1lZGl0b3Iuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbWQtZWRpdG9yLmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hcmtkb3duRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWFya2Rvd25FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbiB9KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciwgRGVmYXVsdEljb25PcHRpb25zIHtcblxuICBnZXQgQk9MRF9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJCb2xkXCI7IH1cbiAgZ2V0IElUQUxJQ19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJJdGFsaWNcIjsgfVxuICBnZXQgSEVBRElOR19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJIZWFkaW5nXCI7IH1cbiAgZ2V0IFJFRlJFTkNFX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIlJlZnJlbmNlXCI7IH1cbiAgZ2V0IExJTktfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiTGlua1wiOyB9XG4gIGdldCBJTUFHRV9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJJbWFnZVwiOyB9XG4gIGdldCBVTF9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJVbFwiOyB9XG4gIGdldCBPTF9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJPbFwiOyB9XG4gIGdldCBDT0RFX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkNvZGVcIjsgfVxuICBnZXQgVEFCTEVfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiVGFibGVcIjsgfVxuICBnZXQgVE9HR0xFX1BSRVZJRVdfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiVG9nZ2xlUHJldmlld1wiOyB9XG4gIGdldCBGVUxMU0NSRUVOX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkZ1bGxzY3JlZW5cIjsgfVxuXG4gIGdldCBCT0xEKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLkJPTERfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1ib2xkXCIsXG4gICAgIHRpdGxlOiBcIkJvbGRcIlxuICAgfTtcbiB9XG4gIGdldCBJVEFMSUMoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuSVRBTElDX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaXRhbGljXCIsXG4gICAgIHRpdGxlOiBcIkl0YWxpY1wiXG4gICB9O1xuIH1cbiAgZ2V0IEhFQURJTkcoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuSEVBRElOR19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWhlYWRlclwiLFxuICAgICB0aXRsZTogXCJIZWFkaW5nXCJcbiAgIH07XG4gfVxuICBnZXQgUkVGUkVOQ0UoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuUkVGUkVOQ0VfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1xdW90ZS1sZWZ0XCIsXG4gICAgIHRpdGxlOiBcIkxpbmtcIlxuICAgfTtcbiB9XG4gIGdldCBMSU5LKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLkxJTktfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1saW5rXCIsXG4gICAgIHRpdGxlOiBcIkxpbmtcIlxuICAgfTtcbiB9XG4gIGdldCBJTUFHRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5JTUFHRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWltYWdlXCIsXG4gICAgIHRpdGxlOiBcIkltYWdlXCJcbiAgIH07XG4gfVxuICBnZXQgVUwoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVUxfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1saXN0LXVsXCIsXG4gICAgIHRpdGxlOiBcIlVub3JkZXJlZCBMaXN0XCJcbiAgIH07XG4gfVxuICBnZXQgT0woKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuT0xfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1saXN0LW9sXCIsXG4gICAgIHRpdGxlOiBcIk9yZGVyZWQgTGlzdFwiXG4gICB9O1xuIH1cbiAgZ2V0IENPREUoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuT0xfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1maWxlLWNvZGUtb1wiLFxuICAgICB0aXRsZTogXCJDb2RlXCJcbiAgIH07XG4gfVxuICBnZXQgVEFCTEUoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVEFCTEVfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS10YWJsZVwiLFxuICAgICB0aXRsZTogXCJUYWJsZVwiXG4gICB9O1xuIH1cbiAgZ2V0IFRPR0dMRV9QUkVWSUVXKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLlRPR0dMRV9QUkVWSUVXX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtZXllXCIsXG4gICAgIGljb25DbGFzc1RvZ2dsZTogXCJmYSBmYS1leWUtc2xhc2hcIixcbiAgICAgdGl0bGU6IFwiU2hvdyBQcmV2aWV3XCIsXG4gICAgIHRpdGxlVG9nZ2xlOiBcIkhpZGUgUHJldmlld1wiXG4gICB9O1xuIH1cbiAgZ2V0IEZVTExTQ1JFRU4oKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVE9HR0xFX1BSRVZJRVdfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1hcnJvd3MtYWx0XCIsXG4gICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZVwiLFxuICAgICB0aXRsZTogXCJGdWxsc2NyZWVuXCIsXG4gICAgIHRpdGxlVG9nZ2xlOiBcIlJlc3RvcmVcIlxuICAgfTtcbiB9XG5cbiAgZ2V0IEFMTF9JQ09OUygpOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30ge1xuICAgIGxldCBhbGxJY29uczoge1tpZDogc3RyaW5nXTogSWNvbk9wdGlvbnN9ID0ge307XG4gICAgYWxsSWNvbnNbdGhpcy5CT0xEX0lEXSA9IHRoaXMuQk9MRDtcbiAgICBhbGxJY29uc1t0aGlzLklUQUxJQ19JRF0gPSB0aGlzLklUQUxJQztcbiAgICBhbGxJY29uc1t0aGlzLkhFQURJTkdfSURdID0gdGhpcy5IRUFESU5HO1xuICAgIGFsbEljb25zW3RoaXMuUkVGUkVOQ0VfSURdID0gdGhpcy5SRUZSRU5DRTtcbiAgICBhbGxJY29uc1t0aGlzLkxJTktfSURdID0gdGhpcy5MSU5LO1xuICAgIGFsbEljb25zW3RoaXMuSU1BR0VfSURdID0gdGhpcy5JTUFHRTtcbiAgICBhbGxJY29uc1t0aGlzLlVMX0lEXSA9IHRoaXMuVUw7XG4gICAgYWxsSWNvbnNbdGhpcy5PTF9JRF0gPSB0aGlzLk9MO1xuICAgIGFsbEljb25zW3RoaXMuQ09ERV9JRF0gPSB0aGlzLkNPREU7XG4gICAgYWxsSWNvbnNbdGhpcy5UQUJMRV9JRF0gPSB0aGlzLlRBQkxFO1xuICAgIGFsbEljb25zW3RoaXMuVE9HR0xFX1BSRVZJRVdfSURdID0gdGhpcy5UT0dHTEVfUFJFVklFVztcbiAgICBhbGxJY29uc1t0aGlzLkZVTExTQ1JFRU5fSURdID0gdGhpcy5GVUxMU0NSRUVOO1xuICAgIHJldHVybiBhbGxJY29ucztcbiB9XG5cbiAgZ2V0IEFMTF9JQ09OX0lEUygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5CT0xEX0lELFxuICAgICAgdGhpcy5JVEFMSUNfSUQsXG4gICAgICB0aGlzLkhFQURJTkdfSUQsXG4gICAgICB0aGlzLlJFRlJFTkNFX0lELFxuICAgICAgdGhpcy5MSU5LX0lELFxuICAgICAgdGhpcy5JTUFHRV9JRCxcbiAgICAgIHRoaXMuVUxfSUQsXG4gICAgICB0aGlzLk9MX0lELFxuICAgICAgdGhpcy5DT0RFX0lELFxuICAgICAgdGhpcy5UQUJMRV9JRCxcbiAgICAgIHRoaXMuVE9HR0xFX1BSRVZJRVdfSUQsXG4gICAgICB0aGlzLkZVTExTQ1JFRU5fSURcbiAgICBdO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnYWNlRWRpdG9yJykgcHVibGljIGFjZUVkaXRvckNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbW9kYWxUZW1wbGF0ZScpIHB1YmxpYyBtb2RhbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBwdWJsaWMgaGlkZVRvb2xiYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogc3RyaW5nID0gXCIzNTdweFwiO1xuICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IHN0cmluZyA9IFwiMTAwJVwiO1xuICBASW5wdXQoKSBwdWJsaWMgcHJlUmVuZGVyOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZDogRnVuY3Rpb247XG4gIEBPdXRwdXQoKSBwdWJsaWMgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBzY3JlZW5IZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQ/KSB7XG4gICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgfHwgJ2VkaXRvcic7XG4gIH1cblxuICBwdWJsaWMgaW1hZ2VzOiBBcnJheTxJSW1hZ2VEZWZpbml0aW9uPjtcblxuICBwdWJsaWMgc2V0IG1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUgfHwgKHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdlZGl0b3InICYmIHZhbHVlLnRvTG93ZXJDYXNlKCkgIT09ICdwcmV2aWV3JykpIHtcbiAgICAgIHZhbHVlID0gJ2VkaXRvcic7XG4gICAgfVxuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9tb2RlOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSByZW1vdGUgaW52b2NhdGlvbiBwcm9taXNlIGJ5IHJlcXVlc3RlZCBwYXRoICovXG4gIHB1YmxpYyByZW1vdGVJbnZvY2F0aW9uUHJvbWlzZUJ5UGF0aCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPGFueT4+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBvcHRpb25zKCk6IE1kRWRpdG9yT3B0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucyB8fCB7fTtcbiAgfVxuICBwdWJsaWMgc2V0IG9wdGlvbnModmFsdWU6IE1kRWRpdG9yT3B0aW9uKSB7XG4gICAgY29uc3QgZGVmYXVsdEljb25PcHRpb25zOiBEZWZhdWx0SWNvbk9wdGlvbnMgPSB0aGlzO1xuICAgIHRoaXMuX2RlZmF1bHRPcHRpb24uaWNvbnMgPSBkZWZhdWx0SWNvbk9wdGlvbnMuQUxMX0lDT05TO1xuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuX2RlZmF1bHRPcHRpb24sIHt9LCB2YWx1ZSk7XG4gICAgdGhpcy5pY29ucyA9IGRlZmF1bHRJY29uT3B0aW9ucy5BTExfSUNPTlM7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaWNvbnMpIHtcbiAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9vcHRpb25zLmljb25zKSkge1xuICAgICAgICBpZihkZWZhdWx0SWNvbk9wdGlvbnMuQUxMX0lDT05fSURTLmluZGV4T2Yoa2V5KSE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuaWNvbnNba2V5XSA9IHRoaXMuX29wdGlvbnMuaWNvbnNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZih2YWx1ZS51cGxvYWRGaWxlVXJsKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLnVwbG9hZEZpbGVVcmwgPSB2YWx1ZS51cGxvYWRGaWxlVXJsO1xuICAgIH1cbiAgICBpZih2YWx1ZS5saXN0RmlsZXNVcmwpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMubGlzdEZpbGVzVXJsID0gdmFsdWUubGlzdEZpbGVzVXJsO1xuICAgIH1cbiAgICBpZih2YWx1ZS5pc1ZpZGVvTGlzdCkge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy5pc1ZpZGVvTGlzdCA9IHZhbHVlLmlzVmlkZW9MaXN0O1xuICAgIH1cbiAgICBpZih2YWx1ZS5nZXRUb2tlbikge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy5nZXRUb2tlbiA9IHZhbHVlLmdldFRva2VuO1xuICAgIH1cbiAgICBpZih2YWx1ZS5wYXJhbWV0ZXJzVG9BZGQpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMucGFyYW1ldGVyc1RvQWRkID0gdmFsdWUucGFyYW1ldGVyc1RvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gIGltYWdlTGlzdFBpY2tlcjogTmd4SW1hZ2VMaXN0UGlja2VyQ29tcG9uZW50O1xuXG4gIGZpbGVVcGxvYWRPcHRpb25zOiBJRmlsZVVwbG9hZE9wdGlvbnMgPSB7XG4gICAgbGlzdEZpbGVzVXJsOiBcIlwiLFxuICAgIHVwbG9hZEZpbGVVcmw6IFwiXCIsXG4gICAgaXNWaWRlb0xpc3Q6IFwiXCIsXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlOiAodmFsdWU/OiBzdHJpbmcpID0+IHZvaWQsIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwYXJhbWV0ZXJzVG9BZGQ6IG5ldyBNYXAoW1tcInBhdGhcIixcInVwbG9hZC90YXhvbm9taWEtZXF1aXBvLWJtdlwiXV0pXG4gIH07XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbjogTWRFZGl0b3JPcHRpb24gPSB7XG4gICAgc2hvd0JvcmRlcjogdHJ1ZSxcbiAgICBpY29uczoge30sXG4gICAgc2Nyb2xsUGFzdEVuZDogMCxcbiAgICBlbmFibGVQcmV2aWV3Q29udGVudENsaWNrOiBmYWxzZSxcbiAgICByZXNpemFibGU6IGZhbHNlLFxuICAgIGdldFRva2VuOiAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZTogKHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcGFyYW1ldGVyc1RvQWRkOiBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIH07XG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBpY29uczoge1tpZDogc3RyaW5nXTogSWNvbk9wdGlvbnN9ID0ge307XG4gIHB1YmxpYyBzaG93UHJldmlld1BhbmVsOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGlzRnVsbFNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcHJldmlld0h0bWw6IGFueTtcbiAgcHVibGljIGRyYWdvdmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc1VwbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgbWFya2Rvd25WYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZG93blZhbHVlIHx8ICcnO1xuICB9XG4gIHB1YmxpYyBzZXQgbWFya2Rvd25WYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbWFya2Rvd25WYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcblxuICAgIGlmICh0aGlzLnByZVJlbmRlciAmJiB0aGlzLnByZVJlbmRlciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJlUmVuZGVyKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9yZW5kZXJNYXJrVGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuX3JlbmRlck1hcmtUaW1lb3V0KTtcbiAgICAgIHRoaXMuX3JlbmRlck1hcmtUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBodG1sID0gbWFya2VkKHZhbHVlIHx8ICcnLCB0aGlzLl9tYXJrZWRPcHQpO1xuICAgICAgICB0aGlzLnByZXZpZXdIdG1sID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbWFya2Rvd25WYWx1ZTogYW55O1xuXG4gIHByaXZhdGUgX2VkaXRvcjogYW55O1xuICBwcml2YXRlIF9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZWRpdG9yUmVzaXplVGltZXI6IGFueTtcbiAgcHJpdmF0ZSBfcmVuZGVyTWFya1RpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSBfbWFya2VkT3B0OiBhbnk7XG5cbiAgcHJpdmF0ZSBnZXQgX2hhc1VwbG9hZEZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZCAmJiB0aGlzLnVwbG9hZCBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAQXR0cmlidXRlKCdyZXF1aXJlZCcpIHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIEBBdHRyaWJ1dGUoJ21heGxlbmd0aCcpIHB1YmxpYyBtYXhsZW5ndGg6IG51bWJlciA9IC0xLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbiAgICBwcml2YXRlIF9kb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBtYXJrZWRSZW5kZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKCk7XG4gICAgbWFya2VkUmVuZGVyLmNvZGUgPSAoY29kZTogYW55LCBsYW5ndWFnZTogYW55KSA9PiB7XG4gICAgICBsZXQgdmFsaWRMYW5nID0gISEobGFuZ3VhZ2UgJiYgaGxqcy5nZXRMYW5ndWFnZShsYW5ndWFnZSkpO1xuICAgICAgbGV0IGhpZ2hsaWdodGVkID0gdmFsaWRMYW5nID8gaGxqcy5oaWdobGlnaHQobGFuZ3VhZ2UsIGNvZGUpLnZhbHVlIDogY29kZTtcbiAgICAgIHJldHVybiBgPHByZSBzdHlsZT1cInBhZGRpbmc6IDA7IGJvcmRlci1yYWRpdXM6IDA7XCI+PGNvZGUgY2xhc3M9XCJobGpzICR7bGFuZ3VhZ2V9XCI+JHtoaWdobGlnaHRlZH08L2NvZGU+PC9wcmU+YDtcbiAgICB9O1xuICAgIG1hcmtlZFJlbmRlci50YWJsZSA9IChoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gYDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWRcIj5cXG48dGhlYWQ+XFxuJHtoZWFkZXJ9PC90aGVhZD5cXG48dGJvZHk+XFxuJHtib2R5fTwvdGJvZHk+XFxuPC90YWJsZT5cXG5gO1xuICAgIH07XG4gICAgbWFya2VkUmVuZGVyLmxpc3RpdGVtID0gKHRleHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKC9eXFxzKlxcW1t4IF1cXF1cXHMqLy50ZXN0KHRleHQpKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0XG4gICAgICAgICAgLnJlcGxhY2UoL15cXHMqXFxbIFxcXVxccyovLCAnPGkgY2xhc3M9XCJmYSBmYS1zcXVhcmUtb1wiIHN0eWxlPVwibWFyZ2luOiAwIDAuMmVtIDAuMjVlbSAtMS42ZW07XCI+PC9pPiAnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFxzKlxcW3hcXF1cXHMqLywgJzxpIGNsYXNzPVwiZmEgZmEtY2hlY2stc3F1YXJlXCIgc3R5bGU9XCJtYXJnaW46IDAgMC4yZW0gMC4yNWVtIC0xLjZlbTtcIj48L2k+ICcpO1xuICAgICAgICByZXR1cm4gYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+JHt0ZXh0fTwvbGk+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgPGxpPiR7dGV4dH08L2xpPmA7XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgbWFya2VkanNPcHQgPSB7XG4gICAgICByZW5kZXJlcjogbWFya2VkUmVuZGVyLFxuICAgICAgaGlnaGxpZ2h0OiAoY29kZTogYW55KSA9PiBobGpzLmhpZ2hsaWdodEF1dG8oY29kZSkudmFsdWVcbiAgICB9O1xuICAgIHRoaXMuX21hcmtlZE9wdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5tYXJrZWRqc09wdCwgbWFya2VkanNPcHQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGxldCBlZGl0b3JFbGVtZW50ID0gdGhpcy5hY2VFZGl0b3JDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9lZGl0b3IgPSBhY2UuZWRpdChlZGl0b3JFbGVtZW50KTtcbiAgICB0aGlzLl9lZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHk7XG4gICAgdGhpcy5fZWRpdG9yLmdldFNlc3Npb24oKS5zZXRVc2VXcmFwTW9kZSh0cnVlKTtcbiAgICB0aGlzLl9lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoXCJhY2UvbW9kZS9tYXJrZG93blwiKTtcbiAgICB0aGlzLl9lZGl0b3Iuc2V0VmFsdWUodGhpcy5tYXJrZG93blZhbHVlIHx8ICcnLCAxKTtcbiAgICB0aGlzLl9lZGl0b3Iuc2V0T3B0aW9uKCdzY3JvbGxQYXN0RW5kJywgdGhpcy5fb3B0aW9ucy5zY3JvbGxQYXN0RW5kIHx8IDApO1xuXG4gICAgdGhpcy5fZWRpdG9yLm9uKFwiY2hhbmdlXCIsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMubWFya2Rvd25WYWx1ZSA9IHRoaXMuX2VkaXRvci5nZXRWYWx1ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZWRpdG9yLm9uKFwiYmx1clwiLCAoZTogYW55KSA9PiB7XG4gICAgICBpZighdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkKSB7XG4gICAgICAgIGlmKHRoaXMuaXNGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgdGhpcy5pc0Z1bGxTY3JlZW4gPSAhdGhpcy5pc0Z1bGxTY3JlZW47XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvd1knLCB0aGlzLmlzRnVsbFNjcmVlbiA/ICdoaWRkZW4nIDogJ2F1dG8nKTtcbiAgICAgICAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICAgICAgICAgIHRoaXMuYmx1ci5lbWl0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lZGl0b3IgJiYgdGhpcy5fZWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IEFycmF5PGFueT4pOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWFya2Rvd25WYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZWRpdG9yKSB7XG4gICAgICAgIHRoaXMuX2VkaXRvci5zZXRWYWx1ZSh2YWx1ZSB8fCAnJywgMSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGxldCByZXN1bHQ6IGFueSA9IG51bGw7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5tYXJrZG93blZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhsZW5ndGggPiAwICYmIHRoaXMubWFya2Rvd25WYWx1ZS5sZW5ndGggPiB0aGlzLm1heGxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0geyBtYXhsZW5ndGg6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvb2xiYXJCdXR0b25Nb3VzZURvd24oKSB7XG4gICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGluc2VydENvbnRlbnQodHlwZTogc3RyaW5nLCBjdXN0b21Db250ZW50Pzogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gdGhpcy5fZWRpdG9yLmdldFNlbGVjdGVkVGV4dCgpO1xuICAgIGxldCBpc1NlbGVjdGVkID0gISFzZWxlY3RlZFRleHQ7XG4gICAgbGV0IHN0YXJ0U2l6ZSA9IDI7XG4gICAgbGV0IGluaXRUZXh0OiBzdHJpbmcgPSAnJztcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLl9lZGl0b3Iuc2VsZWN0aW9uLmdldFJhbmdlKCk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdCb2xkJzpcbiAgICAgICAgaW5pdFRleHQgPSAnQm9sZCBUZXh0JztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCoqJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9KipgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0l0YWxpYyc6XG4gICAgICAgIGluaXRUZXh0ID0gJ0l0YWxpYyBUZXh0JztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCoke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0qYDtcbiAgICAgICAgc3RhcnRTaXplID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdIZWFkaW5nJzpcbiAgICAgICAgaW5pdFRleHQgPSAnSGVhZGluZyc7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAjICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUmVmcmVuY2UnOlxuICAgICAgICBpbml0VGV4dCA9ICdSZWZyZW5jZSc7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGA+ICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTGluayc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGBbXShodHRwOi8vKWA7XG4gICAgICAgIHN0YXJ0U2l6ZSA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSW1hZ2UnOlxuICAgICAgICBzZWxlY3RlZFRleHQgPSBgIVtdKGh0dHA6Ly8pYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVbCc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAtICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdPbCc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAxLiAke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH1gXG4gICAgICAgIHN0YXJ0U2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVGFibGUnOlxuICAgICAgICBzZWxlY3RlZFRleHQgPWBcbnwgKiogJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9ICoqIHwgKipDb2x1bW4gSGVhZGVyKiogfCAqKkNvbHVtbiBIZWFkZXIqKiB8ICoqQ29sdW1uIEhlYWRlcioqIHxcbnwtLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tfFxufCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxcbnwgVGV4dCAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgfFxufCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8YDtcbiAgICAgICAgc3RhcnRTaXplID0gNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDb2RlJzpcbiAgICAgICAgaW5pdFRleHQgPSAnU291cmNlIENvZGUnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBcImBgYGxhbmd1YWdlXFxyXFxuXCIgKyAoc2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0KSArIFwiXFxyXFxuYGBgXCI7XG4gICAgICAgIHN0YXJ0U2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ3VzdG9tJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gY3VzdG9tQ29udGVudDtcbiAgICAgICAgc3RhcnRTaXplID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX2VkaXRvci5zZXNzaW9uLnJlcGxhY2UocmFuZ2UsIHNlbGVjdGVkVGV4dCk7XG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICByYW5nZS5zdGFydC5jb2x1bW4gKz0gc3RhcnRTaXplO1xuICAgICAgcmFuZ2UuZW5kLmNvbHVtbiA9IHJhbmdlLnN0YXJ0LmNvbHVtbiArIGluaXRUZXh0Lmxlbmd0aDtcbiAgICAgIHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uc2V0UmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RJbWFnZSgpIHtcbiAgICB0aGlzLm9wZW5Nb2RhbCh0aGlzLm1vZGFsVGVtcGxhdGUpO1xuICB9XG5cbiAgcHVibGljIG9uRmlsZVNlbGVjdGVkKGltYWdlOiBJSW1hZ2VEZWZpbml0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gdGhpcy5fZWRpdG9yLmdldFNlbGVjdGVkVGV4dCgpO1xuICAgIGxldCBpc1NlbGVjdGVkID0gISFzZWxlY3RlZFRleHQ7XG4gICAgbGV0IHN0YXJ0U2l6ZSA9IDI7XG4gICAgbGV0IGluaXRUZXh0OiBzdHJpbmcgPSAnJztcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLl9lZGl0b3Iuc2VsZWN0aW9uLmdldFJhbmdlKCk7XG4gICAgc2VsZWN0ZWRUZXh0ID0gXCIhW10oXCIgKyBpbWFnZS51cmwgKyBcIilcIjtcbiAgICB0aGlzLl9lZGl0b3Iuc2Vzc2lvbi5yZXBsYWNlKHJhbmdlLCBzZWxlY3RlZFRleHQpO1xuICAgIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgcmFuZ2Uuc3RhcnQuY29sdW1uICs9IHN0YXJ0U2l6ZTtcbiAgICAgIHJhbmdlLmVuZC5jb2x1bW4gPSByYW5nZS5zdGFydC5jb2x1bW4gKyBpbml0VGV4dC5sZW5ndGg7XG4gICAgICB0aGlzLl9lZGl0b3Iuc2VsZWN0aW9uLnNldFJhbmdlKHJhbmdlKTtcbiAgICB9XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZSgpO1xuICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIG9wZW5Nb2RhbChjb250ZW50OiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlOiAodmFsdWU/OiBzdHJpbmcpID0+IHZvaWQsIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCk7XG4gICAgICB0aGlzLm1vZGFsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgdG9nZ2xlUHJldmlldygpIHtcbiAgICB0aGlzLnNob3dQcmV2aWV3UGFuZWwgPSAhdGhpcy5zaG93UHJldmlld1BhbmVsO1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBwcm9jZXNzQ2xpY2tUb29sYmFyKCkge1xuICAgIHRoaXMuX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJldmlld1BhbmVsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVQcmV2aWV3Q29udGVudENsaWNrICE9PSB0cnVlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9ICF0aGlzLmlzRnVsbFNjcmVlbjtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93WScsIHRoaXMuaXNGdWxsU2NyZWVuID8gJ2hpZGRlbicgOiAnYXV0bycpO1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBtZEVkaXRvclJlc2l6ZShzaXplOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRvclJlc2l6ZSgpO1xuICB9XG5cbiAgZWRpdG9yUmVzaXplKHRpbWVPdXQ6IG51bWJlciA9IDEwMCkge1xuICAgIGlmICghdGhpcy5fZWRpdG9yKSByZXR1cm5cbiAgICBpZiAodGhpcy5fZWRpdG9yUmVzaXplVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLl9lZGl0b3JSZXNpemVUaW1lcik7XG4gICAgdGhpcy5fZWRpdG9yUmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2VkaXRvci5yZXNpemUoKTtcbiAgICAgIHRoaXMuX2VkaXRvci5mb2N1cygpO1xuICAgICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gICAgfSwgdGltZU91dCk7XG4gIH1cblxuICBvbkRyYWdvdmVyKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24pIHJldHVybjtcbiAgICB0aGlzLmRyYWdvdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRHJvcChldnQ6IERyYWdFdmVudCkge1xuICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2hhc1VwbG9hZEZ1bmN0aW9uIHx8IHRoaXMuaXNVcGxvYWRpbmcpIHJldHVybjtcblxuICAgIGlmICghZXZ0LmRhdGFUcmFuc2Zlci5maWxlcyB8fCBldnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZChldnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICBsZXQgbXNnID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdGVtcE1zZyA9IGBbJHtpdGVtLm5hbWV9XSgke2l0ZW0udXJsfSlgO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaXNJbWcpIHtcbiAgICAgICAgICAgICAgdGVtcE1zZyA9IGAhJHt0ZW1wTXNnfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtc2cucHVzaCh0ZW1wTXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pbnNlcnRDb250ZW50KCdDdXN0b20nLCBtc2cuam9pbignXFxyXFxuJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCB1cGxvYWQgcmVzdWx0LiBQbGVhc2UgdXNpbmcgZm9sbG93IHRoaXMgdHlwZSBgVXBsb2FkUmVzdWx0YC4nKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkRyYWdsZWF2ZShldnQ6IERyYWdFdmVudCkge1xuICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX2hhc1VwbG9hZEZ1bmN0aW9uKSByZXR1cm47XG4gICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICB9XG59XG4iXX0=