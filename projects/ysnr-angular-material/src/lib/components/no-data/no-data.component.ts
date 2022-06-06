import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ysnr-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoDataComponent implements OnInit {
  @Input() error: any;
  constructor() { }

  ngOnInit(): void {
  }

}
