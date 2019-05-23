import { Component, ViewChild, forwardRef, Renderer, Attribute, Input, ElementRef, EventEmitter, Output, TemplateRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MdEditorOption, IconOptions, DefaultIconOptions } from './md-editor.types';
import { NgxImageListPickerComponent } from 'ngx-image-list-picker';
import { IFileUploadOptions, IImageDefinition } from 'ngx-image-list-picker';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

declare let ace: any;
declare let marked: any;
declare let hljs: any;

export class OperationResult<T> {

  /* Flag that indicates if the porccess sucess. */
  public success: boolean;

  /* The result message. */
  public message: string;

  /* The result of the request. */
  public result: T;
}

@Component({
  selector: 'md-editor',
  styleUrls: ['./md-editor.scss'],
  templateUrl: './md-editor.html',
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
  ]
 })
export class MarkdownEditorComponent implements ControlValueAccessor, Validator, DefaultIconOptions {

  get BOLD_ID(): string { return "Bold"; }
  get ITALIC_ID(): string { return "Italic"; }
  get HEADING_ID(): string { return "Heading"; }
  get REFRENCE_ID(): string { return "Refrence"; }
  get LINK_ID(): string { return "Link"; }
  get IMAGE_ID(): string { return "Image"; }
  get UL_ID(): string { return "Ul"; }
  get OL_ID(): string { return "Ol"; }
  get CODE_ID(): string { return "Code"; }
  get TABLE_ID(): string { return "Table"; }
  get TOGGLE_PREVIEW_ID(): string { return "TogglePreview"; }
  get FULLSCREEN_ID(): string { return "Fullscreen"; }

  get BOLD(): IconOptions {
   return {
     id: this.BOLD_ID,
     hidden: false,
     iconClass: "fa fa-bold",
     title: "Bold"
   };
 }
  get ITALIC(): IconOptions {
   return {
     id: this.ITALIC_ID,
     hidden: false,
     iconClass: "fa fa-italic",
     title: "Italic"
   };
 }
  get HEADING(): IconOptions {
   return {
     id: this.HEADING_ID,
     hidden: false,
     iconClass: "fa fa-header",
     title: "Heading"
   };
 }
  get REFRENCE(): IconOptions {
   return {
     id: this.REFRENCE_ID,
     hidden: false,
     iconClass: "fa fa-quote-left",
     title: "Link"
   };
 }
  get LINK(): IconOptions {
   return {
     id: this.LINK_ID,
     hidden: false,
     iconClass: "fa fa-link",
     title: "Link"
   };
 }
  get IMAGE(): IconOptions {
   return {
     id: this.IMAGE_ID,
     hidden: false,
     iconClass: "fa fa-image",
     title: "Image"
   };
 }
  get UL(): IconOptions {
   return {
     id: this.UL_ID,
     hidden: false,
     iconClass: "fa fa-list-ul",
     title: "Unordered List"
   };
 }
  get OL(): IconOptions {
   return {
     id: this.OL_ID,
     hidden: false,
     iconClass: "fa fa-list-ol",
     title: "Ordered List"
   };
 }
  get CODE(): IconOptions {
   return {
     id: this.OL_ID,
     hidden: false,
     iconClass: "fa fa-file-code-o",
     title: "Code"
   };
 }
  get TABLE(): IconOptions {
   return {
     id: this.TABLE_ID,
     hidden: false,
     iconClass: "fa fa-table",
     title: "Table"
   };
 }
  get TOGGLE_PREVIEW(): IconOptions {
   return {
     id: this.TOGGLE_PREVIEW_ID,
     hidden: false,
     iconClass: "fa fa-eye",
     iconClassToggle: "fa fa-eye-slash",
     title: "Show Preview",
     titleToggle: "Hide Preview"
   };
 }
  get FULLSCREEN(): IconOptions {
   return {
     id: this.TOGGLE_PREVIEW_ID,
     hidden: false,
     iconClass: "fa fa-arrows-alt",
     activeClass: "active",
     title: "Fullscreen",
     titleToggle: "Restore"
   };
 }

  get ALL_ICONS(): {[id: string]: IconOptions} {
    let allIcons: {[id: string]: IconOptions} = {};
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

  get ALL_ICON_IDS(): Array<string> {
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

  @ViewChild('aceEditor') public aceEditorContainer: ElementRef;
  @ViewChild('modalTemplate') public modalTemplate: TemplateRef<any>;
  @Input() public hideToolbar: boolean = false;
  @Input() public height: string = "357px";
  @Input() public width: string = "100%";
  @Input() public preRender: Function;
  @Input() public upload: Function;
  @Output() public blur = new EventEmitter<any>();

  public screenHeight: number = window.innerHeight;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenHeight = window.innerHeight;
  }

  @Input()
  public get mode(): string {
    return this._mode || 'editor';
  }

  public images: Array<IImageDefinition>;

  public set mode(value: string) {
    if (!value || (value.toLowerCase() !== 'editor' && value.toLowerCase() !== 'preview')) {
      value = 'editor';
    }
    this._mode = value;
  }
  private _mode: string;

  /** The remote invocation promise by requested path */
  public remoteInvocationPromiseByPath = new Map<string, Promise<any>>();

  @Input()
  public get options(): MdEditorOption {
    return this._options || {};
  }
  public set options(value: MdEditorOption) {
    const defaultIconOptions: DefaultIconOptions = this;
    this._defaultOption.icons = defaultIconOptions.ALL_ICONS;
    this._options = Object.assign(this._defaultOption, {}, value);
    this.icons = defaultIconOptions.ALL_ICONS;
    if (this._options.icons) {
      for (let key of Object.keys(this._options.icons)) {
        if(defaultIconOptions.ALL_ICON_IDS.indexOf(key)!== -1) {
          this.icons[key] = this._options.icons[key];
        }
      }
    }
    if(value.uploadFileUrl) {
      this.fileUploadOptions.uploadFileUrl = value.uploadFileUrl;
    }
    if(value.listFilesUrl) {
      this.fileUploadOptions.listFilesUrl = value.listFilesUrl;
    }
    if(value.isVideoList) {
      this.fileUploadOptions.isVideoList = value.isVideoList;
    }
    if(value.getToken) {
      this.fileUploadOptions.getToken = value.getToken;
    }
    if(value.parametersToAdd) {
      this.fileUploadOptions.parametersToAdd = value.parametersToAdd;
    }
  }

  private modalRef: NgbModalRef;

  imageListPicker: NgxImageListPickerComponent;

  fileUploadOptions: IFileUploadOptions = {
    listFilesUrl: "",
    uploadFileUrl: "",
    isVideoList: "",
    getToken: () => {
      return new Promise<string>((resolve: (value?: string) => void, reject: (reason?: any) => void) => {
        resolve("");
      });
    },
    parametersToAdd: new Map([["path","upload/taxonomia-equipo-bmv"]])
  };

  private _defaultOption: MdEditorOption = {
    showBorder: true,
    icons: {},
    scrollPastEnd: 0,
    enablePreviewContentClick: false,
    resizable: false,
    getToken: () => {
      return new Promise<string>((resolve: (value?: string) => void, reject: (reason?: any) => void) => {
        resolve("");
      });
    },
    parametersToAdd: new Map<string, string>()
  };
  private _options: any = {};

  public icons: {[id: string]: IconOptions} = {};
  public showPreviewPanel: boolean = true;
  public isFullScreen: boolean = false;
  public previewHtml: any;
  public dragover: boolean = false;
  public isUploading: boolean = false;

  public get markdownValue(): any {
    return this._markdownValue || '';
  }
  public set markdownValue(value: any) {
    this._markdownValue = value;
    this._onChange(value);

    if (this.preRender && this.preRender instanceof Function) {
      value = this.preRender(value);
    }
    if (value !== null && value !== undefined) {
      if (this._renderMarkTimeout) clearTimeout(this._renderMarkTimeout);
      this._renderMarkTimeout = setTimeout(() => {
        let html = marked(value || '', this._markedOpt);
        this.previewHtml = this._domSanitizer.bypassSecurityTrustHtml(html);
      }, 100);
    }
  }
  private _markdownValue: any;

  private _editor: any;
  private _btnToolbarHasBeenClicked: boolean = false;
  private _editorResizeTimer: any;
  private _renderMarkTimeout: any;
  private _markedOpt: any;

  private get _hasUploadFunction(): boolean {
    return this.upload && this.upload instanceof Function;
  }

  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  constructor(
    @Attribute('required') public required: boolean = false,
    @Attribute('maxlength') public maxlength: number = -1,
    private _renderer: Renderer,
    private _domSanitizer: DomSanitizer,
    private http: HttpClient,
    private modalService: NgbModal) {

  }

  ngOnInit() {
    let markedRender = new marked.Renderer();
    markedRender.code = (code: any, language: any) => {
      let validLang = !!(language && hljs.getLanguage(language));
      let highlighted = validLang ? hljs.highlight(language, code).value : code;
      return `<pre style="padding: 0; border-radius: 0;"><code class="hljs ${language}">${highlighted}</code></pre>`;
    };
    markedRender.table = (header: string, body: string) => {
      return `<table class="table table-bordered table-striped">\n<thead>\n${header}</thead>\n<tbody>\n${body}</tbody>\n</table>\n`;
    };
    markedRender.listitem = (text: any) => {
      if (/^\s*\[[x ]\]\s*/.test(text)) {
        text = text
          .replace(/^\s*\[ \]\s*/, '<i class="fa fa-square-o" style="margin: 0 0.2em 0.25em -1.6em;"></i> ')
          .replace(/^\s*\[x\]\s*/, '<i class="fa fa-check-square" style="margin: 0 0.2em 0.25em -1.6em;"></i> ');
        return `<li style="list-style: none;">${text}</li>`;
      } else {
        return `<li>${text}</li>`;
      }
    };
    let markedjsOpt = {
      renderer: markedRender,
      highlight: (code: any) => hljs.highlightAuto(code).value
    };
    this._markedOpt = Object.assign({}, this.options.markedjsOpt, markedjsOpt);
  }

  ngAfterViewInit() {
    let editorElement = this.aceEditorContainer.nativeElement;
    this._editor = ace.edit(editorElement);
    this._editor.$blockScrolling = Infinity;
    this._editor.getSession().setUseWrapMode(true);
    this._editor.getSession().setMode("ace/mode/markdown");
    this._editor.setValue(this.markdownValue || '', 1);
    this._editor.setOption('scrollPastEnd', this._options.scrollPastEnd || 0);

    this._editor.on("change", (e: any) => {
      this.markdownValue = this._editor.getValue();
    });

    this._editor.on("blur", (e: any) => {
      if(!this._btnToolbarHasBeenClicked) {
        if(this.isFullScreen) {
          this.isFullScreen = !this.isFullScreen;
          this._renderer.setElementStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
          this.editorResize();
        }
        this.blur.emit(e);
      }
    });
  }

  ngOnDestroy() {
    this._editor && this._editor.destroy();
  }

  writeValue(value: any | Array<any>): void {
    setTimeout(() => {
      this.markdownValue = value;
      if (typeof value !== 'undefined' && this._editor) {
        this._editor.setValue(value || '', 1);
      }
    }, 1);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  validate(c: AbstractControl): ValidationErrors {
    let result: any = null;
    if (this.required && this.markdownValue.length === 0) {
      result = { required: true };
    }
    if (this.maxlength > 0 && this.markdownValue.length > this.maxlength) {
      result = { maxlength: true };
    }
    return result;
  }

  toolbarButtonMouseDown() {
    this._btnToolbarHasBeenClicked = true;
  }

  insertContent(type: string, customContent?: string) {
    if (!this._editor) return;
    let selectedText = this._editor.getSelectedText();
    let isSelected = !!selectedText;
    let startSize = 2;
    let initText: string = '';
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
        selectedText = `- ${selectedText || initText}`
        break;
      case 'Ol':
        selectedText = `1. ${selectedText || initText}`
        startSize = 3;
        break;
      case 'Table':
        selectedText =`
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

  public selectImage() {
    this.openModal(this.modalTemplate);
  }

  public onFileSelected(image: IImageDefinition) {
    if (!this._editor) return;
    let selectedText = this._editor.getSelectedText();
    let isSelected = !!selectedText;
    let startSize = 2;
    let initText: string = '';
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

  public openModal(content: any): Promise<string> {
    return new Promise<string>((resolve: (value?: string) => void, reject: (reason?: any) => void) => {
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

  focus() {
    this._editor.focus();
  }

  togglePreview() {
    this.showPreviewPanel = !this.showPreviewPanel;
    this.editorResize();
  }

  processClickToolbar() {
    this._btnToolbarHasBeenClicked = false;
  }

  previewPanelClick(event: Event) {
    this._btnToolbarHasBeenClicked = false;
    if (this.options.enablePreviewContentClick !== true) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  fullScreen() {
    this.isFullScreen = !this.isFullScreen;
    this._renderer.setElementStyle(document.body, 'overflowY', this.isFullScreen ? 'hidden' : 'auto');
    this.editorResize();
  }

  mdEditorResize(size: any) {
    this.editorResize();
  }

  editorResize(timeOut: number = 100) {
    if (!this._editor) return
    if (this._editorResizeTimer) clearTimeout(this._editorResizeTimer);
    this._editorResizeTimer = setTimeout(() => {
      this._editor.resize();
      this._editor.focus();
      this._btnToolbarHasBeenClicked = false;
    }, timeOut);
  }

  onDragover(evt: DragEvent) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    if (!this._hasUploadFunction) return;
    this.dragover = true;
  }

  onDrop(evt: DragEvent) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    if (!this._hasUploadFunction || this.isUploading) return;

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
          let msg = [];
          for (let item of data) {
            let tempMsg = `[${item.name}](${item.url})`;
            if (item.isImg) {
              tempMsg = `!${tempMsg}`;
            }
            msg.push(tempMsg);
          }
          this.insertContent('Custom', msg.join('\r\n'));
        } else {
          console.warn('Invalid upload result. Please using follow this type `UploadResult`.')
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

  onDragleave(evt: DragEvent) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    if (!this._hasUploadFunction) return;
    this.dragover = false;
  }
}
