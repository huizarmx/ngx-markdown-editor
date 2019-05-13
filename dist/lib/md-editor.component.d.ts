import { Renderer, ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MdEditorOption, IconOptions, DefaultIconOptions } from './md-editor.types';
import { NgxImageListPickerComponent } from 'ngx-image-list-picker';
import { IFileUploadOptions, IImageDefinition } from 'ngx-image-list-picker';
import { HttpClient } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export declare class OperationResult<T> {
    success: boolean;
    message: string;
    result: T;
}
export declare class MarkdownEditorComponent implements ControlValueAccessor, Validator, DefaultIconOptions {
    required: boolean;
    maxlength: number;
    private _renderer;
    private _domSanitizer;
    private http;
    private modalService;
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
    modalTemplate: TemplateRef<any>;
    hideToolbar: boolean;
    height: string;
    width: string;
    preRender: Function;
    upload: Function;
    blur: EventEmitter<any>;
    mode: string;
    images: Array<IImageDefinition>;
    private _mode;
    /** The remote invocation promise by requested path */
    remoteInvocationPromiseByPath: Map<string, Promise<any>>;
    options: MdEditorOption;
    private modalRef;
    imageListPicker: NgxImageListPickerComponent;
    fileUploadOptions: IFileUploadOptions;
    getAllFiles(): void;
    /**
     * Gets the filename of a url
     *
     * @param url the url to review
     */
    private getFileName;
    onImagePickerInit(imagePickerComponent: NgxImageListPickerComponent): void;
    /**
     * Lists all the files contained in a path of the blob.
     *
     * @param path the path to query in the remote blob container
     * @param queryCriteria the query criteria to use to fetch data from the remote service
     */
    listFilesInBlobByPath(path: string): Promise<Array<string>>;
    onFileUploaded(response: any): void;
    private _defaultOption;
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
    private readonly _hasUploadFunction;
    private _onChange;
    private _onTouched;
    constructor(required: boolean, maxlength: number, _renderer: Renderer, _domSanitizer: DomSanitizer, http: HttpClient, modalService: NgbModal);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any | Array<any>): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    validate(c: AbstractControl): ValidationErrors;
    toolbarButtonMouseDown(): void;
    insertContent(type: string, customContent?: string): void;
    selectImage(): void;
    onImageSelected(image: IImageDefinition): void;
    openModal(content: any): Promise<string>;
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
