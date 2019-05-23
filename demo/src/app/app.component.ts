import { Component } from '@angular/core';
import { UploadResult, MdEditorOption } from './../../../src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public options: MdEditorOption = {
    enablePreviewContentClick: false,
    resizable: true,
    getToken: () => {
      return new Promise<string>((resolve: (value?: string) => void, reject: (reason?: any) => void) => {
        resolve("eyJraWQiOiJFT0NmZFgwM3Y0Rmw1aThwTFl6ejE0enBScTNQYVk0V3EwSWNNMXRRekx3IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULk9QbnFsOFlMMzk3UnNaUXhnamdvUFo5RGVPWnp2Z3pFRjU4WnJrZEtVY2ciLCJpc3MiOiJodHRwczovL2Rldi01NzIyMDQub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTU1Nzc5NzYwOSwiZXhwIjoxNTU3ODg0MDA5LCJjaWQiOiIwb2FqcmIxYmh1ck9Sb05QbzBoNyIsInVpZCI6IjAwdWZuODdtazJpazgzdzQ4MGg3Iiwic2NwIjpbIm9wZW5pZCIsImVtYWlsIiwicHJvZmlsZSJdLCJzdWIiOiJqdWFuLm1leGljYUAyaHNvZnR3YXJlLmNvbS5teCJ9.ET3MvnPCOsKQpDDLnSvz-DNWe6xaKp3T-XsgzCKpkWNW640kYk0tTcKYyTiW5S1HQ3czCQb-81oStrGTvVhRjUp0LfdpmLIFez9jUq6vKDqHSEWPdlxPFvksIO4XRuMLD0uZHbeiqmYsyO8hdBtnYWjdFBcE53s0KsX5rxbceU_7ZhhQNYcwn28A7zhuyghFOFynk6BzRiJjU7OHwT1Q0qU9olbmXUS4F6nVYrtjyw37qbR611q_gLtNXGJ276VD_27iCX25GRgpIROFOiCBPKVi59kuuBEhAodbVgi9AdsHIbh3LmqdkMCnzfJzfKka14b-wAF_WyNomutUkQdshg");
      });
    },
    uploadFileUrl: 'https://admin-rest-web20190408042814.azurewebsites.net/api/FileUpload?code=D9frRBd4N362FDk6DunWWoQDcaSjeEouCzIC4OzaIozawIWe7mHVWQ==',
    listFilesUrl: 'https://admin-rest-web20190408042814.azurewebsites.net/api/GetPathFiles?code=SPE3UbPwC5frGvOaiajZz3LeJAPJ9/pJtkGs1RdPg3P2YE0n0G1hFw==',
    isVideoList: "false",
    parametersToAdd: new Map([['path','upload/taxonomia-equipo-bmv']])
  };
  public content: string;
  public mode: string = 'editor';

  ngOnInit() {
    let contentArr = ['# Hello, Markdown Editor!'];
    contentArr.push('```javascript ');
    contentArr.push('function Test() {');
    contentArr.push('	console.log("Test");');
    contentArr.push('}');
    contentArr.push('```');
    contentArr.push(' Name | Type');
    contentArr.push(' ---- | ----');
    contentArr.push(' A | Test');
    contentArr.push('![](http://lon-yang.github.io/markdown-editor/favicon.ico)');
    contentArr.push('');
    contentArr.push('- [ ] Taks A');
    contentArr.push('- [x] Taks B');
    contentArr.push('');
    contentArr.push('[Link](https://www.google.com)');
    contentArr.push('');
    this.content = contentArr.join('\r\n');
  }

  changeMode() {
    if (this.mode === 'editor') {
      this.mode = 'preview';
    } else {
      this.mode = 'editor';
    }
  }

  togglePreviewClick() {
    this.options.enablePreviewContentClick = !this.options.enablePreviewContentClick;
    this.options = Object.assign({}, this.options);
  }

  toggleResizeAble() {
    this.options.resizable = !this.options.resizable;
    this.options = Object.assign({}, this.options);
  }

  onBlur() {
    console.log("blur!");
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result: Array<UploadResult> = [];
        for (let file of files) {
          result.push({
            name: file.name,
            url: `https://avatars3.githubusercontent.com/${file.name}`,
            isImg: file.type.indexOf('image') !== -1
          })
        }
        resolve(result);
      }, 3000);
    });
  }
}
