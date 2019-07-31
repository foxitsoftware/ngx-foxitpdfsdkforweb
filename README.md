# ngx-foxitpdfsdkforweb
## Install
npm install ngx-foxitpdfsdkforweb --save

## Setup
1 modify your angular.json
```
"assets": [
  ...,
  {"glob": "**/*", "input": "./node_modules/ngx-foxitpdfsdkforweb/lib", "output": "/node_modules/ngx-foxitpdfsdkforweb/lib"}
],
```

2 modify your tsconfig.json
```
"files": [
  ...
  "node_modules/ngx-foxitpdfsdkforweb/foxitWebPDFComponent.ts"
],
```

3 add FoxitWebPDFComponent to app NgModule.
```
import { FoxitWebPDFComponent } from 'ngx-foxitpdfsdkforweb';

@NgModule({
  declarations: [
    ...
    FoxitWebPDFComponent,
  ],
  ...
})
```


## Use
1 You can add the tag <foxit-webpdf></foxit-webpdf> in the template and set attribute fileUrl. The style position MUST be absolute.
```
<foxit-webpdf #foxitWebPDF style="position: absolute;width:600px;height:800px;" licenseSN="{{licenseSN}}" licenseKey="{{licenseKey}}" fileUrl="{{fileUrl}}"></foxit-webpdf> 
```
### Attribute
* licenseSN 
* licenseKey
* fileUrl
* password

2 You can also open pdf in the typescript code.
### Template
```
<input type="file" (change)="openPDF($event)"/>

<foxit-webpdf #foxitWebPDF style="position: absolute;width:600px;height:800px;" licenseSN="{{licenseSN}}" licenseKey="{{licenseKey}}"></foxit-webpdf> 
```

### Component
```
import { Component, Input, ViewChild } from '@angular/core';
import { licenseSN, licenseKey} from './license-key';
import { FoxitWebPDFComponent } from 'ngx-foxitpdfsdkforweb';

export class AppComponent {
  @ViewChild('foxitWebPDF', {static: false}) foxitWebPDF:FoxitWebPDFComponent; 
  licenseSN = licenseSN;
  licenseKey = licenseKey;


  openPDF($event){
    const fileSelected: File = $event.target.files[0];
    this.foxitWebPDF.openFile(fileSelected);
  }

  openPDFByUrl(url:string){
    this.foxitWebPDF.openPDFByHttpRangeRequest(url);
  }
}


```