import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent, NoDataComponent } from '../components';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YSNRMaterialModule } from './material.module';
import { YSNRPrimeNGModule } from './primeng.module';
import { YSNRCommonService, YSNRHttpClient } from '../services';

const YSNREntryComponents: any = []

const YSNRComponents: any = [
  ErrorComponent,
  NoDataComponent,
  YSNREntryComponents
];

const YSNRModules: any = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  YSNRMaterialModule,
  YSNRPrimeNGModule
];
const YSNRServices: any = [
  YSNRCommonService,
  YSNRHttpClient
];

const Guards: any = []

@NgModule({
  declarations: [
    YSNRComponents
  ],
  entryComponents: [
    YSNREntryComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    YSNRModules
  ],
  exports: [
    YSNRModules,
    YSNRComponents
  ]
})

export class YSNRCommonModule {
  static forRoot(): ModuleWithProviders<YSNRCommonModule> {
    return {
      ngModule: YSNRCommonModule,
      providers: [
        YSNRServices,
        Guards
      ]
    };
  }
}
