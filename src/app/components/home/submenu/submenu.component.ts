import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  @Input() itemsSub;

  isShow = [];

  constructor() {
  }

  ngOnInit() {
  }

  showSubmenu(item: any, ind: number, event) {

    event.stopPropagation();

    if (item.type === 'Group') {

      this.isShow[ind] = !this.isShow[ind];

    }
  }
}
