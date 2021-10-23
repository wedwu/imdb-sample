import _ from 'lodash';
import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

/**
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 * todo:
 *
 **/

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.sass']
})
export class IconComponent implements OnInit {
  ngIf: any;
  tooltipLoc: any;

  @Input() type: string;
  @Input() isActive: boolean;
  @Input() classNamesNotActive: string;
  @Input() classNamesActive: string;
  @Input() iconValue: any;
  @Input() click: any;
  @Input() text: string;
  @Input() textAlign: string;
  @Input() tooltip: string;
  @Input() tooltiptext: any;
  @Input() tooltipLocation: string;
  @Input() showToolTip: boolean;
  @Input() marginAdjuster: boolean;

  constructor() {}
  ngOnInit() {

    this.iconValue = this.isActive ? this.iconValue : '';
    this.tooltipLoc = this.tooltiptext !== '' ? `tooltiptext tooltip-${this.tooltipLocation}` : ``;

    // console.log(`-------------`);
    // console.log(`this.showToolTip: ${this.showToolTip}`);
    // console.log(`-------------`);
    // console.log(`this.marginAdjuster: ${this.marginAdjuster}`);
    // console.log(`this.type: ${this.type}`);
    // console.log(`this.isActive: ${this.isActive}`);
    // console.log(`this.classNamesNotActive: ${this.classNamesNotActive}`);
    // console.log(`this.classNamesActive: ${this.classNamesActive}`);
    // console.log(`this.iconValue: ${this.iconValue}`);
    // console.log(`(click)="refreshData()": ${this.click}`);
    // console.log(`this.text: ${this.text}`);
    // console.log(`this.textAlign: ${this.textAlign}`);
    // console.log(`this.tooltiptext !== null: ${this.tooltiptext !== null}`);
    // console.log(`this.tooltip: ${this.tooltip}`);
    // console.log(`this.tooltiptext: ${this.tooltiptext}`);
    // console.log(`this.tooltipLoc: ${this.tooltipLoc}`);
    // console.log(`this.tooltipLocation: ${this.tooltipLocation}`);
    // console.log(`-------------`);

  }

}
