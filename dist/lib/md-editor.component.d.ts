import { Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MdEditorOption } from './md-editor.types';
export declare class MarkdownEditorComponent implements ControlValueAccessor, Validator {
    required: boolean;
    maxlength: number;
    private _renderer;
    private _domSanitizer;
    aceEditorContainer: ElementRef;
    hideToolbar: boolean;
    height: string;
    preRender: Function;
    upload: Function;
    blur: Function;
    mode: string;
    private _mode;
    options: MdEditorOption;
    private _options;
    hideIcons: any;
    showPreviewPanel: boolean;
    isFullScreen: boolean;
    previewHtml: any;
    dragover: boolean;
    isUploading: boolean;
    markdownValue: any;
    private _markdownValue;
    private _editor;
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
    insertContent(type: string, customContent?: string): void;
    togglePreview(): void;
    previewPanelClick(event: Event): void;
    fullScreen(): void;
    mdEditorResize(size: any): void;
    editorResize(timeOut?: number): void;
    onDragover(evt: DragEvent): void;
    onDrop(evt: DragEvent): void;
    onDragleave(evt: DragEvent): void;
}
