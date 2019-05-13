/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownEditorComponent } from './lib/md-editor.component';
import { MarkdownEditorResizeSensorComponent } from './lib/resize-sensor/resize-sensor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export { MarkdownEditorComponent } from './lib/md-editor.component';
export { MarkdownEditorResizeSensorComponent } from './lib/resize-sensor/resize-sensor.component';
import { NgxImageListPickerModule } from "ngx-image-list-picker";
export class LMarkdownEditorModule {
}
LMarkdownEditorModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaC1tZC1lZGl0b3IvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWxHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBbUJqRSxNQUFNLE9BQU8scUJBQXFCOzs7WUFqQmpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2QixtQ0FBbUM7aUJBQ3BDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixTQUFTO29CQUNULHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsbUNBQW1DO2lCQUNwQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE1hcmtkb3duRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvbWQtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXJrZG93bkVkaXRvclJlc2l6ZVNlbnNvckNvbXBvbmVudCB9IGZyb20gJy4vbGliL3Jlc2l6ZS1zZW5zb3IvcmVzaXplLXNlbnNvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuZXhwb3J0IHsgTWFya2Rvd25FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2xpYi9tZC1lZGl0b3IuY29tcG9uZW50JztcbmV4cG9ydCB7IE1hcmtkb3duRWRpdG9yUmVzaXplU2Vuc29yQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvcmVzaXplLXNlbnNvci9yZXNpemUtc2Vuc29yLmNvbXBvbmVudCc7XG5leHBvcnQgeyBNZEVkaXRvck9wdGlvbiwgVXBsb2FkUmVzdWx0LCBNYXJrZWRqc09wdGlvbiB9IGZyb20gJy4vbGliL21kLWVkaXRvci50eXBlcyc7XG5pbXBvcnQgeyBOZ3hJbWFnZUxpc3RQaWNrZXJNb2R1bGUgfSBmcm9tIFwibmd4LWltYWdlLWxpc3QtcGlja2VyXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hcmtkb3duRWRpdG9yQ29tcG9uZW50LFxuICAgIE1hcmtkb3duRWRpdG9yUmVzaXplU2Vuc29yQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgTmd4SW1hZ2VMaXN0UGlja2VyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXJrZG93bkVkaXRvckNvbXBvbmVudCxcbiAgICBNYXJrZG93bkVkaXRvclJlc2l6ZVNlbnNvckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExNYXJrZG93bkVkaXRvck1vZHVsZSB7IH1cbiJdfQ==