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
                }
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
        selectedText = '<img src="' + image.url + '" width="100%"></img>';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaC1tZC1lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvbWQtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl6RCxPQUFPLEVBQWUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBbUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQU10Rjs7OztJQUFBO0lBVUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7Ozs7SUFQQyxrQ0FBd0I7O0lBR3hCLGtDQUF1Qjs7SUFHdkIsaUNBQWlCOztBQUduQjtJQWlURSxpQ0FDZ0MsUUFBeUIsRUFDeEIsU0FBc0IsRUFDN0MsU0FBbUIsRUFDbkIsYUFBMkIsRUFDM0IsSUFBZ0IsRUFDaEIsWUFBc0I7UUFMQSx5QkFBQSxFQUFBLGdCQUF5QjtRQUN4QiwwQkFBQSxFQUFBLGFBQXFCLENBQUM7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUM3QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQVU7UUE5SWhCLGdCQUFXLEdBQVksS0FB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RDs7SUFDdkQsNENBQXFEOzs7OztJQUNyRCw0Q0FBMkI7Ozs7O0lBQzNCLGdEQUFtQzs7Ozs7SUFDbkMsdUNBQXdCOzs7OztJQUN4QiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiwgUmVuZGVyZXIsIEF0dHJpYnV0ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNZEVkaXRvck9wdGlvbiwgSWNvbk9wdGlvbnMsIERlZmF1bHRJY29uT3B0aW9ucyB9IGZyb20gJy4vbWQtZWRpdG9yLnR5cGVzJztcbmltcG9ydCB7IE5neEltYWdlTGlzdFBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25neC1pbWFnZS1saXN0LXBpY2tlcic7XG5pbXBvcnQgeyBJRmlsZVVwbG9hZE9wdGlvbnMsIElJbWFnZURlZmluaXRpb24gfSBmcm9tICduZ3gtaW1hZ2UtbGlzdC1waWNrZXInO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7TmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMsIE5nYk1vZGFsUmVmfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmRlY2xhcmUgbGV0IGFjZTogYW55O1xuZGVjbGFyZSBsZXQgbWFya2VkOiBhbnk7XG5kZWNsYXJlIGxldCBobGpzOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25SZXN1bHQ8VD4ge1xuXG4gIC8qIEZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBvcmNjZXNzIHN1Y2Vzcy4gKi9cbiAgcHVibGljIHN1Y2Nlc3M6IGJvb2xlYW47XG5cbiAgLyogVGhlIHJlc3VsdCBtZXNzYWdlLiAqL1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qIFRoZSByZXN1bHQgb2YgdGhlIHJlcXVlc3QuICovXG4gIHB1YmxpYyByZXN1bHQ6IFQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kLWVkaXRvcicsXG4gIHN0eWxlVXJsczogWycuL21kLWVkaXRvci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9tZC1lZGl0b3IuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWFya2Rvd25FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXJrZG93bkVkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxuIH0pXG5leHBvcnQgY2xhc3MgTWFya2Rvd25FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBEZWZhdWx0SWNvbk9wdGlvbnMge1xuXG4gIGdldCBCT0xEX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkJvbGRcIjsgfVxuICBnZXQgSVRBTElDX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkl0YWxpY1wiOyB9XG4gIGdldCBIRUFESU5HX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkhlYWRpbmdcIjsgfVxuICBnZXQgUkVGUkVOQ0VfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiUmVmcmVuY2VcIjsgfVxuICBnZXQgTElOS19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJMaW5rXCI7IH1cbiAgZ2V0IElNQUdFX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIkltYWdlXCI7IH1cbiAgZ2V0IFVMX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIlVsXCI7IH1cbiAgZ2V0IE9MX0lEKCk6IHN0cmluZyB7IHJldHVybiBcIk9sXCI7IH1cbiAgZ2V0IENPREVfSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29kZVwiOyB9XG4gIGdldCBUQUJMRV9JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUYWJsZVwiOyB9XG4gIGdldCBUT0dHTEVfUFJFVklFV19JRCgpOiBzdHJpbmcgeyByZXR1cm4gXCJUb2dnbGVQcmV2aWV3XCI7IH1cbiAgZ2V0IEZVTExTQ1JFRU5fSUQoKTogc3RyaW5nIHsgcmV0dXJuIFwiRnVsbHNjcmVlblwiOyB9XG5cbiAgZ2V0IEJPTEQoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuQk9MRF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWJvbGRcIixcbiAgICAgdGl0bGU6IFwiQm9sZFwiXG4gICB9O1xuIH1cbiAgZ2V0IElUQUxJQygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5JVEFMSUNfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1pdGFsaWNcIixcbiAgICAgdGl0bGU6IFwiSXRhbGljXCJcbiAgIH07XG4gfVxuICBnZXQgSEVBRElORygpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5IRUFESU5HX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaGVhZGVyXCIsXG4gICAgIHRpdGxlOiBcIkhlYWRpbmdcIlxuICAgfTtcbiB9XG4gIGdldCBSRUZSRU5DRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5SRUZSRU5DRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXF1b3RlLWxlZnRcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IExJTksoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuTElOS19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpbmtcIixcbiAgICAgdGl0bGU6IFwiTGlua1wiXG4gICB9O1xuIH1cbiAgZ2V0IElNQUdFKCk6IEljb25PcHRpb25zIHtcbiAgIHJldHVybiB7XG4gICAgIGlkOiB0aGlzLklNQUdFX0lELFxuICAgICBoaWRkZW46IGZhbHNlLFxuICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtaW1hZ2VcIixcbiAgICAgdGl0bGU6IFwiSW1hZ2VcIlxuICAgfTtcbiB9XG4gIGdldCBVTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5VTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3QtdWxcIixcbiAgICAgdGl0bGU6IFwiVW5vcmRlcmVkIExpc3RcIlxuICAgfTtcbiB9XG4gIGdldCBPTCgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWxpc3Qtb2xcIixcbiAgICAgdGl0bGU6IFwiT3JkZXJlZCBMaXN0XCJcbiAgIH07XG4gfVxuICBnZXQgQ09ERSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5PTF9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWZpbGUtY29kZS1vXCIsXG4gICAgIHRpdGxlOiBcIkNvZGVcIlxuICAgfTtcbiB9XG4gIGdldCBUQUJMRSgpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5UQUJMRV9JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXRhYmxlXCIsXG4gICAgIHRpdGxlOiBcIlRhYmxlXCJcbiAgIH07XG4gfVxuICBnZXQgVE9HR0xFX1BSRVZJRVcoKTogSWNvbk9wdGlvbnMge1xuICAgcmV0dXJuIHtcbiAgICAgaWQ6IHRoaXMuVE9HR0xFX1BSRVZJRVdfSUQsXG4gICAgIGhpZGRlbjogZmFsc2UsXG4gICAgIGljb25DbGFzczogXCJmYSBmYS1leWVcIixcbiAgICAgaWNvbkNsYXNzVG9nZ2xlOiBcImZhIGZhLWV5ZS1zbGFzaFwiLFxuICAgICB0aXRsZTogXCJTaG93IFByZXZpZXdcIixcbiAgICAgdGl0bGVUb2dnbGU6IFwiSGlkZSBQcmV2aWV3XCJcbiAgIH07XG4gfVxuICBnZXQgRlVMTFNDUkVFTigpOiBJY29uT3B0aW9ucyB7XG4gICByZXR1cm4ge1xuICAgICBpZDogdGhpcy5UT0dHTEVfUFJFVklFV19JRCxcbiAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWFycm93cy1hbHRcIixcbiAgICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlXCIsXG4gICAgIHRpdGxlOiBcIkZ1bGxzY3JlZW5cIixcbiAgICAgdGl0bGVUb2dnbGU6IFwiUmVzdG9yZVwiXG4gICB9O1xuIH1cblxuICBnZXQgQUxMX0lDT05TKCk6IHtbaWQ6IHN0cmluZ106IEljb25PcHRpb25zfSB7XG4gICAgbGV0IGFsbEljb25zOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30gPSB7fTtcbiAgICBhbGxJY29uc1t0aGlzLkJPTERfSURdID0gdGhpcy5CT0xEO1xuICAgIGFsbEljb25zW3RoaXMuSVRBTElDX0lEXSA9IHRoaXMuSVRBTElDO1xuICAgIGFsbEljb25zW3RoaXMuSEVBRElOR19JRF0gPSB0aGlzLkhFQURJTkc7XG4gICAgYWxsSWNvbnNbdGhpcy5SRUZSRU5DRV9JRF0gPSB0aGlzLlJFRlJFTkNFO1xuICAgIGFsbEljb25zW3RoaXMuTElOS19JRF0gPSB0aGlzLkxJTks7XG4gICAgYWxsSWNvbnNbdGhpcy5JTUFHRV9JRF0gPSB0aGlzLklNQUdFO1xuICAgIGFsbEljb25zW3RoaXMuVUxfSURdID0gdGhpcy5VTDtcbiAgICBhbGxJY29uc1t0aGlzLk9MX0lEXSA9IHRoaXMuT0w7XG4gICAgYWxsSWNvbnNbdGhpcy5DT0RFX0lEXSA9IHRoaXMuQ09ERTtcbiAgICBhbGxJY29uc1t0aGlzLlRBQkxFX0lEXSA9IHRoaXMuVEFCTEU7XG4gICAgYWxsSWNvbnNbdGhpcy5UT0dHTEVfUFJFVklFV19JRF0gPSB0aGlzLlRPR0dMRV9QUkVWSUVXO1xuICAgIGFsbEljb25zW3RoaXMuRlVMTFNDUkVFTl9JRF0gPSB0aGlzLkZVTExTQ1JFRU47XG4gICAgcmV0dXJuIGFsbEljb25zO1xuIH1cblxuICBnZXQgQUxMX0lDT05fSURTKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLkJPTERfSUQsXG4gICAgICB0aGlzLklUQUxJQ19JRCxcbiAgICAgIHRoaXMuSEVBRElOR19JRCxcbiAgICAgIHRoaXMuUkVGUkVOQ0VfSUQsXG4gICAgICB0aGlzLkxJTktfSUQsXG4gICAgICB0aGlzLklNQUdFX0lELFxuICAgICAgdGhpcy5VTF9JRCxcbiAgICAgIHRoaXMuT0xfSUQsXG4gICAgICB0aGlzLkNPREVfSUQsXG4gICAgICB0aGlzLlRBQkxFX0lELFxuICAgICAgdGhpcy5UT0dHTEVfUFJFVklFV19JRCxcbiAgICAgIHRoaXMuRlVMTFNDUkVFTl9JRFxuICAgIF07XG4gIH1cblxuICBAVmlld0NoaWxkKCdhY2VFZGl0b3InKSBwdWJsaWMgYWNlRWRpdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtb2RhbFRlbXBsYXRlJykgcHVibGljIG1vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlVG9vbGJhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBzdHJpbmcgPSBcIjM1N3B4XCI7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gXCIxMDAlXCI7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcmVSZW5kZXI6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkOiBGdW5jdGlvbjtcbiAgQE91dHB1dCgpIHB1YmxpYyBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIHNjcmVlbkhlaWdodDogbnVtYmVyID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudD8pIHtcbiAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSB8fCAnZWRpdG9yJztcbiAgfVxuXG4gIHB1YmxpYyBpbWFnZXM6IEFycmF5PElJbWFnZURlZmluaXRpb24+O1xuXG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAodmFsdWUudG9Mb3dlckNhc2UoKSAhPT0gJ2VkaXRvcicgJiYgdmFsdWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ByZXZpZXcnKSkge1xuICAgICAgdmFsdWUgPSAnZWRpdG9yJztcbiAgICB9XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX21vZGU6IHN0cmluZztcblxuICAvKiogVGhlIHJlbW90ZSBpbnZvY2F0aW9uIHByb21pc2UgYnkgcmVxdWVzdGVkIHBhdGggKi9cbiAgcHVibGljIHJlbW90ZUludm9jYXRpb25Qcm9taXNlQnlQYXRoID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8YW55Pj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTogTWRFZGl0b3JPcHRpb24ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zIHx8IHt9O1xuICB9XG4gIHB1YmxpYyBzZXQgb3B0aW9ucyh2YWx1ZTogTWRFZGl0b3JPcHRpb24pIHtcbiAgICBjb25zdCBkZWZhdWx0SWNvbk9wdGlvbnM6IERlZmF1bHRJY29uT3B0aW9ucyA9IHRoaXM7XG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbi5pY29ucyA9IGRlZmF1bHRJY29uT3B0aW9ucy5BTExfSUNPTlM7XG4gICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5fZGVmYXVsdE9wdGlvbiwge30sIHZhbHVlKTtcbiAgICB0aGlzLmljb25zID0gZGVmYXVsdEljb25PcHRpb25zLkFMTF9JQ09OUztcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pY29ucykge1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX29wdGlvbnMuaWNvbnMpKSB7XG4gICAgICAgIGlmKGRlZmF1bHRJY29uT3B0aW9ucy5BTExfSUNPTl9JRFMuaW5kZXhPZihrZXkpIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5pY29uc1trZXldID0gdGhpcy5fb3B0aW9ucy5pY29uc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHZhbHVlLnVwbG9hZEZpbGVVcmwpIHtcbiAgICAgIHRoaXMuZmlsZVVwbG9hZE9wdGlvbnMudXBsb2FkRmlsZVVybCA9IHZhbHVlLnVwbG9hZEZpbGVVcmw7XG4gICAgfVxuICAgIGlmKHZhbHVlLmxpc3RGaWxlc1VybCkge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy5saXN0RmlsZXNVcmwgPSB2YWx1ZS5saXN0RmlsZXNVcmw7XG4gICAgfVxuICAgIGlmKHZhbHVlLmlzVmlkZW9MaXN0KSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLmlzVmlkZW9MaXN0ID0gdmFsdWUuaXNWaWRlb0xpc3Q7XG4gICAgfVxuICAgIGlmKHZhbHVlLmdldFRva2VuKSB7XG4gICAgICB0aGlzLmZpbGVVcGxvYWRPcHRpb25zLmdldFRva2VuID0gdmFsdWUuZ2V0VG9rZW47XG4gICAgfVxuICAgIGlmKHZhbHVlLnBhcmFtZXRlcnNUb0FkZCkge1xuICAgICAgdGhpcy5maWxlVXBsb2FkT3B0aW9ucy5wYXJhbWV0ZXJzVG9BZGQgPSB2YWx1ZS5wYXJhbWV0ZXJzVG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgaW1hZ2VMaXN0UGlja2VyOiBOZ3hJbWFnZUxpc3RQaWNrZXJDb21wb25lbnQ7XG5cbiAgZmlsZVVwbG9hZE9wdGlvbnM6IElGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAgICBsaXN0RmlsZXNVcmw6IFwiXCIsXG4gICAgdXBsb2FkRmlsZVVybDogXCJcIixcbiAgICBpc1ZpZGVvTGlzdDogXCJcIixcbiAgICBnZXRUb2tlbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHBhcmFtZXRlcnNUb0FkZDogbmV3IE1hcChbW1wicGF0aFwiLFwidXBsb2FkL3RheG9ub21pYS1lcXVpcG8tYm12XCJdXSlcbiAgfTtcblxuICBwcml2YXRlIF9kZWZhdWx0T3B0aW9uOiBNZEVkaXRvck9wdGlvbiA9IHtcbiAgICBzaG93Qm9yZGVyOiB0cnVlLFxuICAgIGljb25zOiB7fSxcbiAgICBzY3JvbGxQYXN0RW5kOiAwLFxuICAgIGVuYWJsZVByZXZpZXdDb250ZW50Q2xpY2s6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlOiAodmFsdWU/OiBzdHJpbmcpID0+IHZvaWQsIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwYXJhbWV0ZXJzVG9BZGQ6IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KClcbiAgfTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgcHVibGljIGljb25zOiB7W2lkOiBzdHJpbmddOiBJY29uT3B0aW9uc30gPSB7fTtcbiAgcHVibGljIHNob3dQcmV2aWV3UGFuZWw6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNGdWxsU2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwcmV2aWV3SHRtbDogYW55O1xuICBwdWJsaWMgZHJhZ292ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzVXBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBtYXJrZG93blZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtkb3duVmFsdWUgfHwgJyc7XG4gIH1cbiAgcHVibGljIHNldCBtYXJrZG93blZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9tYXJrZG93blZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMucHJlUmVuZGVyICYmIHRoaXMucHJlUmVuZGVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcmVSZW5kZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX3JlbmRlck1hcmtUaW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy5fcmVuZGVyTWFya1RpbWVvdXQpO1xuICAgICAgdGhpcy5fcmVuZGVyTWFya1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGh0bWwgPSBtYXJrZWQodmFsdWUgfHwgJycsIHRoaXMuX21hcmtlZE9wdCk7XG4gICAgICAgIHRoaXMucHJldmlld0h0bWwgPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9tYXJrZG93blZhbHVlOiBhbnk7XG5cbiAgcHJpdmF0ZSBfZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgX2J0blRvb2xiYXJIYXNCZWVuQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9lZGl0b3JSZXNpemVUaW1lcjogYW55O1xuICBwcml2YXRlIF9yZW5kZXJNYXJrVGltZW91dDogYW55O1xuICBwcml2YXRlIF9tYXJrZWRPcHQ6IGFueTtcblxuICBwcml2YXRlIGdldCBfaGFzVXBsb2FkRnVuY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkICYmIHRoaXMudXBsb2FkIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2UsXG4gICAgQEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykgcHVibGljIG1heGxlbmd0aDogbnVtYmVyID0gLTEsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG1hcmtlZFJlbmRlciA9IG5ldyBtYXJrZWQuUmVuZGVyZXIoKTtcbiAgICBtYXJrZWRSZW5kZXIuY29kZSA9IChjb2RlOiBhbnksIGxhbmd1YWdlOiBhbnkpID0+IHtcbiAgICAgIGxldCB2YWxpZExhbmcgPSAhIShsYW5ndWFnZSAmJiBobGpzLmdldExhbmd1YWdlKGxhbmd1YWdlKSk7XG4gICAgICBsZXQgaGlnaGxpZ2h0ZWQgPSB2YWxpZExhbmcgPyBobGpzLmhpZ2hsaWdodChsYW5ndWFnZSwgY29kZSkudmFsdWUgOiBjb2RlO1xuICAgICAgcmV0dXJuIGA8cHJlIHN0eWxlPVwicGFkZGluZzogMDsgYm9yZGVyLXJhZGl1czogMDtcIj48Y29kZSBjbGFzcz1cImhsanMgJHtsYW5ndWFnZX1cIj4ke2hpZ2hsaWdodGVkfTwvY29kZT48L3ByZT5gO1xuICAgIH07XG4gICAgbWFya2VkUmVuZGVyLnRhYmxlID0gKGhlYWRlcjogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZFwiPlxcbjx0aGVhZD5cXG4ke2hlYWRlcn08L3RoZWFkPlxcbjx0Ym9keT5cXG4ke2JvZHl9PC90Ym9keT5cXG48L3RhYmxlPlxcbmA7XG4gICAgfTtcbiAgICBtYXJrZWRSZW5kZXIubGlzdGl0ZW0gPSAodGV4dDogYW55KSA9PiB7XG4gICAgICBpZiAoL15cXHMqXFxbW3ggXVxcXVxccyovLnRlc3QodGV4dCkpIHtcbiAgICAgICAgdGV4dCA9IHRleHRcbiAgICAgICAgICAucmVwbGFjZSgvXlxccypcXFsgXFxdXFxzKi8sICc8aSBjbGFzcz1cImZhIGZhLXNxdWFyZS1vXCIgc3R5bGU9XCJtYXJnaW46IDAgMC4yZW0gMC4yNWVtIC0xLjZlbTtcIj48L2k+ICcpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXHMqXFxbeFxcXVxccyovLCAnPGkgY2xhc3M9XCJmYSBmYS1jaGVjay1zcXVhcmVcIiBzdHlsZT1cIm1hcmdpbjogMCAwLjJlbSAwLjI1ZW0gLTEuNmVtO1wiPjwvaT4gJyk7XG4gICAgICAgIHJldHVybiBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZTogbm9uZTtcIj4ke3RleHR9PC9saT5gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGA8bGk+JHt0ZXh0fTwvbGk+YDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBtYXJrZWRqc09wdCA9IHtcbiAgICAgIHJlbmRlcmVyOiBtYXJrZWRSZW5kZXIsXG4gICAgICBoaWdobGlnaHQ6IChjb2RlOiBhbnkpID0+IGhsanMuaGlnaGxpZ2h0QXV0byhjb2RlKS52YWx1ZVxuICAgIH07XG4gICAgdGhpcy5fbWFya2VkT3B0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLm1hcmtlZGpzT3B0LCBtYXJrZWRqc09wdCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGVkaXRvckVsZW1lbnQgPSB0aGlzLmFjZUVkaXRvckNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2VkaXRvciA9IGFjZS5lZGl0KGVkaXRvckVsZW1lbnQpO1xuICAgIHRoaXMuX2VkaXRvci4kYmxvY2tTY3JvbGxpbmcgPSBJbmZpbml0eTtcbiAgICB0aGlzLl9lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldFVzZVdyYXBNb2RlKHRydWUpO1xuICAgIHRoaXMuX2VkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShcImFjZS9tb2RlL21hcmtkb3duXCIpO1xuICAgIHRoaXMuX2VkaXRvci5zZXRWYWx1ZSh0aGlzLm1hcmtkb3duVmFsdWUgfHwgJycsIDEpO1xuICAgIHRoaXMuX2VkaXRvci5zZXRPcHRpb24oJ3Njcm9sbFBhc3RFbmQnLCB0aGlzLl9vcHRpb25zLnNjcm9sbFBhc3RFbmQgfHwgMCk7XG5cbiAgICB0aGlzLl9lZGl0b3Iub24oXCJjaGFuZ2VcIiwgKGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy5tYXJrZG93blZhbHVlID0gdGhpcy5fZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9lZGl0b3Iub24oXCJibHVyXCIsIChlOiBhbnkpID0+IHtcbiAgICAgIGlmKCF0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQpIHtcbiAgICAgICAgaWYodGhpcy5pc0Z1bGxTY3JlZW4pIHtcbiAgICAgICAgICB0aGlzLmlzRnVsbFNjcmVlbiA9ICF0aGlzLmlzRnVsbFNjcmVlbjtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93WScsIHRoaXMuaXNGdWxsU2NyZWVuID8gJ2hpZGRlbicgOiAnYXV0bycpO1xuICAgICAgICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ibHVyLmVtaXQoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lZGl0b3IgJiYgdGhpcy5fZWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IEFycmF5PGFueT4pOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWFya2Rvd25WYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZWRpdG9yKSB7XG4gICAgICAgIHRoaXMuX2VkaXRvci5zZXRWYWx1ZSh2YWx1ZSB8fCAnJywgMSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGxldCByZXN1bHQ6IGFueSA9IG51bGw7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5tYXJrZG93blZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhsZW5ndGggPiAwICYmIHRoaXMubWFya2Rvd25WYWx1ZS5sZW5ndGggPiB0aGlzLm1heGxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0geyBtYXhsZW5ndGg6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvb2xiYXJCdXR0b25Nb3VzZURvd24oKSB7XG4gICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGluc2VydENvbnRlbnQodHlwZTogc3RyaW5nLCBjdXN0b21Db250ZW50Pzogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gdGhpcy5fZWRpdG9yLmdldFNlbGVjdGVkVGV4dCgpO1xuICAgIGxldCBpc1NlbGVjdGVkID0gISFzZWxlY3RlZFRleHQ7XG4gICAgbGV0IHN0YXJ0U2l6ZSA9IDI7XG4gICAgbGV0IGluaXRUZXh0OiBzdHJpbmcgPSAnJztcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLl9lZGl0b3Iuc2VsZWN0aW9uLmdldFJhbmdlKCk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdCb2xkJzpcbiAgICAgICAgaW5pdFRleHQgPSAnQm9sZCBUZXh0JztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCoqJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9KipgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0l0YWxpYyc6XG4gICAgICAgIGluaXRUZXh0ID0gJ0l0YWxpYyBUZXh0JztcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gYCoke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH0qYDtcbiAgICAgICAgc3RhcnRTaXplID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdIZWFkaW5nJzpcbiAgICAgICAgaW5pdFRleHQgPSAnSGVhZGluZyc7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAjICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUmVmcmVuY2UnOlxuICAgICAgICBpbml0VGV4dCA9ICdSZWZyZW5jZSc7XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGA+ICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTGluayc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGBbXShodHRwOi8vKWA7XG4gICAgICAgIHN0YXJ0U2l6ZSA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSW1hZ2UnOlxuICAgICAgICBzZWxlY3RlZFRleHQgPSBgIVtdKGh0dHA6Ly8pYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVbCc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAtICR7c2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0fWBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdPbCc6XG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGAxLiAke3NlbGVjdGVkVGV4dCB8fCBpbml0VGV4dH1gXG4gICAgICAgIHN0YXJ0U2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVGFibGUnOlxuICAgICAgICBzZWxlY3RlZFRleHQgPWBcbnwgKiogJHtzZWxlY3RlZFRleHQgfHwgaW5pdFRleHR9ICoqIHwgKipDb2x1bW4gSGVhZGVyKiogfCAqKkNvbHVtbiBIZWFkZXIqKiB8ICoqQ29sdW1uIEhlYWRlcioqIHxcbnwtLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tfFxufCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8XG58IFRleHQgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgIHxcbnwgVGV4dCAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgICAgIHwgWWVzICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgfFxufCBUZXh0ICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICAgICAgfCBZZXMgICAgICAgICAgICAgICB8IFllcyAgICAgICAgICAgICAgICB8YDtcbiAgICAgICAgc3RhcnRTaXplID0gNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDb2RlJzpcbiAgICAgICAgaW5pdFRleHQgPSAnU291cmNlIENvZGUnO1xuICAgICAgICBzZWxlY3RlZFRleHQgPSBcImBgYGxhbmd1YWdlXFxyXFxuXCIgKyAoc2VsZWN0ZWRUZXh0IHx8IGluaXRUZXh0KSArIFwiXFxyXFxuYGBgXCI7XG4gICAgICAgIHN0YXJ0U2l6ZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ3VzdG9tJzpcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gY3VzdG9tQ29udGVudDtcbiAgICAgICAgc3RhcnRTaXplID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX2VkaXRvci5zZXNzaW9uLnJlcGxhY2UocmFuZ2UsIHNlbGVjdGVkVGV4dCk7XG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICByYW5nZS5zdGFydC5jb2x1bW4gKz0gc3RhcnRTaXplO1xuICAgICAgcmFuZ2UuZW5kLmNvbHVtbiA9IHJhbmdlLnN0YXJ0LmNvbHVtbiArIGluaXRUZXh0Lmxlbmd0aDtcbiAgICAgIHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uc2V0UmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9lZGl0b3IuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RJbWFnZSgpIHtcbiAgICB0aGlzLm9wZW5Nb2RhbCh0aGlzLm1vZGFsVGVtcGxhdGUpO1xuICB9XG5cbiAgcHVibGljIG9uRmlsZVNlbGVjdGVkKGltYWdlOiBJSW1hZ2VEZWZpbml0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gdGhpcy5fZWRpdG9yLmdldFNlbGVjdGVkVGV4dCgpO1xuICAgIGxldCBpc1NlbGVjdGVkID0gISFzZWxlY3RlZFRleHQ7XG4gICAgbGV0IHN0YXJ0U2l6ZSA9IDI7XG4gICAgbGV0IGluaXRUZXh0OiBzdHJpbmcgPSAnJztcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLl9lZGl0b3Iuc2VsZWN0aW9uLmdldFJhbmdlKCk7XG4gICAgc2VsZWN0ZWRUZXh0ID0gJzxpbWcgc3JjPVwiJyArIGltYWdlLnVybCArICdcIiB3aWR0aD1cIjEwMCVcIj48L2ltZz4nO1xuICAgIHRoaXMuX2VkaXRvci5zZXNzaW9uLnJlcGxhY2UocmFuZ2UsIHNlbGVjdGVkVGV4dCk7XG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICByYW5nZS5zdGFydC5jb2x1bW4gKz0gc3RhcnRTaXplO1xuICAgICAgcmFuZ2UuZW5kLmNvbHVtbiA9IHJhbmdlLnN0YXJ0LmNvbHVtbiArIGluaXRUZXh0Lmxlbmd0aDtcbiAgICAgIHRoaXMuX2VkaXRvci5zZWxlY3Rpb24uc2V0UmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gICAgdGhpcy5fZWRpdG9yLmZvY3VzKCk7XG4gIH1cblxuICBwdWJsaWMgb3Blbk1vZGFsKGNvbnRlbnQ6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZCwgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb250ZW50KTtcbiAgICAgIHRoaXMubW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWRpdG9yLmZvY3VzKCk7XG4gIH1cblxuICB0b2dnbGVQcmV2aWV3KCkge1xuICAgIHRoaXMuc2hvd1ByZXZpZXdQYW5lbCA9ICF0aGlzLnNob3dQcmV2aWV3UGFuZWw7XG4gICAgdGhpcy5lZGl0b3JSZXNpemUoKTtcbiAgfVxuXG4gIHByb2Nlc3NDbGlja1Rvb2xiYXIoKSB7XG4gICAgdGhpcy5fYnRuVG9vbGJhckhhc0JlZW5DbGlja2VkID0gZmFsc2U7XG4gIH1cblxuICBwcmV2aWV3UGFuZWxDbGljayhldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZVByZXZpZXdDb250ZW50Q2xpY2sgIT09IHRydWUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdWxsU2NyZWVuKCkge1xuICAgIHRoaXMuaXNGdWxsU2NyZWVuID0gIXRoaXMuaXNGdWxsU2NyZWVuO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3dZJywgdGhpcy5pc0Z1bGxTY3JlZW4gPyAnaGlkZGVuJyA6ICdhdXRvJyk7XG4gICAgdGhpcy5lZGl0b3JSZXNpemUoKTtcbiAgfVxuXG4gIG1kRWRpdG9yUmVzaXplKHNpemU6IGFueSkge1xuICAgIHRoaXMuZWRpdG9yUmVzaXplKCk7XG4gIH1cblxuICBlZGl0b3JSZXNpemUodGltZU91dDogbnVtYmVyID0gMTAwKSB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVyblxuICAgIGlmICh0aGlzLl9lZGl0b3JSZXNpemVUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX2VkaXRvclJlc2l6ZVRpbWVyKTtcbiAgICB0aGlzLl9lZGl0b3JSZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZWRpdG9yLnJlc2l6ZSgpO1xuICAgICAgdGhpcy5fZWRpdG9yLmZvY3VzKCk7XG4gICAgICB0aGlzLl9idG5Ub29sYmFySGFzQmVlbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB9LCB0aW1lT3V0KTtcbiAgfVxuXG4gIG9uRHJhZ292ZXIoZXZ0OiBEcmFnRXZlbnQpIHtcbiAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLl9oYXNVcGxvYWRGdW5jdGlvbikgcmV0dXJuO1xuICAgIHRoaXMuZHJhZ292ZXIgPSB0cnVlO1xuICB9XG5cbiAgb25Ecm9wKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24gfHwgdGhpcy5pc1VwbG9hZGluZykgcmV0dXJuO1xuXG4gICAgaWYgKCFldnQuZGF0YVRyYW5zZmVyLmZpbGVzIHx8IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkKGV2dC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgIGxldCBtc2cgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wTXNnID0gYFske2l0ZW0ubmFtZX1dKCR7aXRlbS51cmx9KWA7XG4gICAgICAgICAgICBpZiAoaXRlbS5pc0ltZykge1xuICAgICAgICAgICAgICB0ZW1wTXNnID0gYCEke3RlbXBNc2d9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1zZy5wdXNoKHRlbXBNc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmluc2VydENvbnRlbnQoJ0N1c3RvbScsIG1zZy5qb2luKCdcXHJcXG4nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHVwbG9hZCByZXN1bHQuIFBsZWFzZSB1c2luZyBmb2xsb3cgdGhpcyB0eXBlIGBVcGxvYWRSZXN1bHRgLicpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uRHJhZ2xlYXZlKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5faGFzVXBsb2FkRnVuY3Rpb24pIHJldHVybjtcbiAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==