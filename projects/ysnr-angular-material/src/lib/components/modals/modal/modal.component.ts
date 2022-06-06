import { Component, Inject, OnInit } from '@angular/core';
import { IndoCommonService } from 'src/common/services';
import { YSNRHttpClient } from 'ysnr-ng';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalInit } from '../modal.init';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'winggy-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  initdata = new ModalInit();

  constructor(
    public commonService: IndoCommonService,
    private http: YSNRHttpClient,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {}
  ) {}

  ngOnInit(): void {
    this.initdata.cloneData = _.cloneDeep(this.data.data);
  }

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.initdata.cloneData, event.previousIndex, event.currentIndex);
  }

  save() {
    this.data.data = [...this.initdata.cloneData];
    this.commonService.closeAll();
  }
}
