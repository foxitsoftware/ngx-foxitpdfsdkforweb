import { Component, Input } from '@angular/core';
import * as UIExtension from './lib/UIExtension.full';

declare var window: any;
@Component({
  selector: 'foxit-webpdf',
  templateUrl: './index.html',
  styleUrls: ['./lib/UIExtension.css', "index.scss"]
})
export class FoxitWebPDFComponent {
  @Input() fileUrl:string;
  @Input() password:string;
  @Input() fileName:string;

  @Input() licenseSN:string;
  @Input() licenseKey:string;
  @Input() fontPath:string = 'https://font.connectedpdf.com/webfonts/';
  pdfui:any;
  constructor() {
  }

  ngOnInit(){
    window.UIExtension = UIExtension;
    var PDFUI = UIExtension.PDFUI;
    var pdfui = new PDFUI({
        viewerOptions: {
            libPath: './node_modules/ngx-foxitpdfsdkforweb/lib/',
            jr: {
                licenseSN: this.licenseSN,
                licenseKey: this.licenseKey,
                fontPath: this.fontPath,
            }
        },
        renderTo: '#ngx-foxit-pdf-ui',
        fragments: [],
        addons: [
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/file-property',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/multi-media/',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/password-protect/',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/redaction/',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/path-objects/',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/print/',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/text-object',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/full-screen',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/import-form',
            './node_modules/ngx-foxitpdfsdkforweb/lib/uix-addons/export-form'
        ]
    });
    this.pdfui = pdfui;
    window.pdfui = pdfui;
    window.onresize = function () {
        pdfui.redraw();
    }
    if(this.fileUrl){
      this.openPDFByHttpRangeRequest(this.fileUrl, this.password, this.fileName);
    }
  }
  getPdfUi(){
    return this.pdfui;
  }
  openFile(file:File, password:string = "", fileName:string = ""){
    if(!fileName){
      fileName = file.name;
    }
    this.pdfui.openPDFByFile(file, {
      password: password,
      fileName: fileName
    })
  }
  openPDFByHttpRangeRequest(fileUrl:string, password:string = "", fileName:string = ""){
    if(!fileName){
      let pdfReg = new RegExp("[^/]+\.pdf");
      let match = pdfReg.exec(this.fileUrl);
      if(match){
        fileName = match[0];
      }
    }
    this.pdfui.openPDFByHttpRangeRequest({
      range:{
          url:fileUrl,
      }
      },{
        password: password,
        fileName: fileName
      }
    )
  }
}