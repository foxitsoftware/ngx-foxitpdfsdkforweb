import { Component, Input } from '@angular/core';
// import { licenseSN, licenseKey} from './license-key';
import * as UIExtension from './lib/UIExtension.full';

declare var window: any;
@Component({
  selector: 'foxit-webpdf',
  templateUrl: './index.html',
  styleUrls: ['./lib/UIExtension.css', "index.scss"]
})
export class FoxitWebPDFComponent {
  @Input() fileUrl:String;
  @Input() file:File;
  @Input() password:String;
  @Input() fileName:String;

  @Input() licenseSN:String;
  @Input() licenseKey:String;
  pdfui:any;
  constructor() {
  }

  ngOnInit(){
    window.UIExtension = UIExtension;
    var PDFUI = UIExtension.PDFUI;
    var pdfui = new PDFUI({
        viewerOptions: {
            libPath: './app/ngx-foxitwebpdf/lib/',
            jr: {
                licenseSN: this.licenseSN,
                licenseKey: this.licenseKey
            }
        },
        renderTo: '#ngx-foxit-pdf-ui',
        fragments: [],
        addons: [
            './app/ngx-foxitwebpdf/lib/uix-addons/file-property',
            './app/ngx-foxitwebpdf/lib/uix-addons/multi-media/',
            './app/ngx-foxitwebpdf/lib/uix-addons/password-protect/',
            './app/ngx-foxitwebpdf/lib/uix-addons/redaction/',
            './app/ngx-foxitwebpdf/lib/uix-addons/path-objects/',
            './app/ngx-foxitwebpdf/lib/uix-addons/print/',
            './app/ngx-foxitwebpdf/lib/uix-addons/text-object',
            './app/ngx-foxitwebpdf/lib/uix-addons/full-screen',
            './app/ngx-foxitwebpdf/lib/uix-addons/import-form',
            './app/ngx-foxitwebpdf/lib/uix-addons/export-form'
        ]
    });
    this.pdfui = pdfui;
    
    window.onresize = function () {
        pdfui.redraw();
    }
    if(this.fileUrl){
      if(!this.fileName){
        let pdfReg = new RegExp("[^/]+\.pdf");
        let match = pdfReg.exec(this.fileUrl);
        if(match){
          this.fileName = match[0];
        }
        this.fileName = this.fileUrl.substr()
      }
      pdfui.openPDFByHttpRangeRequest({
        range:{
            url:this.fileUrl,
        }
        },{
          password: this.password,
          fileName: this.fileName
        }
      )
    }else if(this.file){
      pdfui.openPDFByFile(this.file, {
        password: this.password,
        fileName: this.fileName
      })
    }
  }
  getPdfUi(){
    return this.pdfui;
  }
  openFile(){

  }
}