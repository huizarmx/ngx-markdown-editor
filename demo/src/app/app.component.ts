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
        resolve("eyJraWQiOiJFT0NmZFgwM3Y0Rmw1aThwTFl6ejE0enBScTNQYVk0V3EwSWNNMXRRekx3IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlZ5TjU2WUx0SDlhNTBsalVMTGo3Q1U3eVRvVEtNYnRrQ25zdTZnTFcyclEiLCJpc3MiOiJodHRwczovL2Rldi01NzIyMDQub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTU1NzcxMDE2OCwiZXhwIjoxNTU3Nzk2NTY4LCJjaWQiOiIwb2FqcmIxYmh1ck9Sb05QbzBoNyIsInVpZCI6IjAwdWZuODdtazJpazgzdzQ4MGg3Iiwic2NwIjpbInByb2ZpbGUiLCJvcGVuaWQiLCJlbWFpbCJdLCJzdWIiOiJqdWFuLm1leGljYUAyaHNvZnR3YXJlLmNvbS5teCJ9.t_29Ugc6peV2kaICRP8Jlqq3k8BUa5AC-w4u3-0eZWW6oJ3mSbtjzki_oKdT2SZmTx78a3lAw5snGYRchOcKGIbgXPMT8AAQAHNz3dkWddxPcPwaVo-oox71zYuxnT99eLWqiVNok2URPJJIVj6yjKmSdncXgH-ge4tSRIKB0xVuFjIvmnMdyKCdkyEQTiDEOlWfG5ssGTR2UgkY5WxfUlty9pXxJ95EbJMtFm_oWMEeBGcWxn9D_c3qauSBv4JjF0iE8US5JZtVNFXD4R9CpNs8UmxC7jpl5l5wT5XwNG_w8p_jGVUkrzD-GMg8dYkNLCrtd8uwUqwDUPbUXJ0BOQ");
      });
    },
    listFilesUrl: "http://localhost:7071/api/GetPathFiles?code=SPE3UbPwC5frGvOaiajZz3LeJAPJ9/pJtkGs1RdPg3P2YE0n0G1hFw==",
    uploadFileUrl: "https://admin-rest-web20190408042814.azurewebsites.net/api/FileUpload?code=D9frRBd4N362FDk6DunWWoQDcaSjeEouCzIC4OzaIozawIWe7mHVWQ==",
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
