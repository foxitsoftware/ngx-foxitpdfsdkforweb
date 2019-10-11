# @foxitsoftware/angular-foxitpdfsdkforweb
This is Foxit pdf web sdk for Angular.

## Install
npm install @foxitsoftware/angular-foxitpdfsdkforweb --save

## Setup
1 Modify your angular.json
```
"assets": [
  ...,
  {"glob": "**/*", "input": "./node_modules/@foxitsoftware/angular-foxitpdfsdkforweb/lib", "output": "/node_modules/@foxitsoftware/angular-foxitpdfsdkforweb/lib"}
],
```

2 Modify your tsconfig.json
```
"files": [
  ...
  "node_modules/@foxitsoftware/angular-foxitpdfsdkforweb/foxitWebPDFComponent.ts"
],
```

3 Add FoxitWebPDFComponent to app NgModule.
```
import { FoxitWebPDFComponent } from '@foxitsoftware/angular-foxitpdfsdkforweb';

@NgModule({
  declarations: [
    ...
    FoxitWebPDFComponent,
  ],
  ...
})
```
4 Copy license-key.js to folder src/app and import.
```
import { licenseSN, licenseKey} from './license-key';
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
import { FoxitWebPDFComponent } from '@foxitsoftware/angular-foxitpdfsdkforweb';

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