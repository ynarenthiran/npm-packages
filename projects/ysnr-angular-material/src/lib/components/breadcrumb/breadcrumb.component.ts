import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ysnr-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbData: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
