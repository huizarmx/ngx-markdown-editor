import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownEditorComponent } from './lib/md-editor.component';
import { MarkdownEditorResizeSensorComponent } from './lib/resize-sensor/resize-sensor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export { MarkdownEditorComponent } from './lib/md-editor.component';
export { MarkdownEditorResizeSensorComponent } from './lib/resize-sensor/resize-sensor.component';
export { MdEditorOption, UploadResult, MarkedjsOption } from './lib/md-editor.types';
import { NgxImageListPickerModule } from "ngx-image-list-picker";

@NgModule({
  declarations: [
    MarkdownEditorComponent,
    MarkdownEditorResizeSensorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxImageListPickerModule
  ],
  exports: [
    MarkdownEditorComponent,
    MarkdownEditorResizeSensorComponent
  ]
})
export class LMarkdownEditorModule { }
