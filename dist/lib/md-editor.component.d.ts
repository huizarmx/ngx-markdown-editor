import { Renderer, ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MdEditorOption, IconOptions, DefaultIconOptions } from './md-editor.types';
export declare class MarkdownEditorComponent implements ControlValueAccessor, Validator, DefaultIconOptions {
    required: boolean;
    maxlength: number;
    private _renderer;
    private _domSanitizer;
    readonly BOLD_ID: string;
    readonly ITALIC_ID: string;
    readonly HEADING_ID: string;
    readonly REFRENCE_ID: string;
    readonly LINK_ID: string;
    readonly IMAGE_ID: string;
    readonly UL_ID: string;
    readonly OL_ID: string;
    readonly CODE_ID: string;
    readonly TABLE_ID: string;
    readonly TOGGLE_PREVIEW_ID: string;
    readonly FULLSCREEN_ID: string;
    readonly BOLD: IconOptions;
    readonly ITALIC: IconOptions;
    readonly HEADING: IconOptions;
    readonly REFRENCE: IconOptions;
    readonly LINK: IconOptions;
    readonly IMAGE: IconOptions;
    readonly UL: IconOptions;
    readonly OL: IconOptions;
    readonly CODE: IconOptions;
    readonly TABLE: IconOptions;
    readonly TOGGLE_PREVIEW: IconOptions;
    readonly FULLSCREEN: IconOptions;
    readonly ALL_ICONS: {
        [id: string]: IconOptions;
    };
    readonly ALL_ICON_IDS: Array<string>;
    aceEditorContainer: ElementRef;
    hideToolbar: boolean;
    height: string;
    width: string;
    preRender: Function;
    upload: Function;
    blur: EventEmitter<any>;
    mode: string;
    private _mode;
    options: MdEditorOption;
    private _options;
    icons: {
        [id: string]: IconOptions;
    };
    showPreviewPanel: boolean;
    isFullScreen: boolean;
    previewHtml: any;
    dragover: boolean;
    isUploading: boolean;
    markdownValue: any;
    private _markdownValue;
    private _editor;
    private _btnToolbarHasBeenClicked;
    private _editorResizeTimer;
    private _renderMarkTimeout;
    private _markedOpt;
    private _defaultOption;
    private readonly _hasUploadFunction;
    private _onChange;
    private _onTouched;
    constructor(required: boolean, maxlength: number, _renderer: Renderer, _domSanitizer: DomSanitizer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any | Array<any>): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    validate(c: AbstractControl): ValidationErrors;
    toolbarButtonMouseDown(): void;
    insertContent(type: string, customContent?: string): void;
    focus(): void;
    togglePreview(): void;
    previewPanelClick(event: Event): void;
    fullScreen(): void;
    mdEditorResize(size: any): void;
    editorResize(timeOut?: number): void;
    onDragover(evt: DragEvent): void;
    onDrop(evt: DragEvent): void;
    onDragleave(evt: DragEvent): void;
}