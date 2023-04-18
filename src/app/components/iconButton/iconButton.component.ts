import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome/public_api';
import {faUser, IconDefinition, fas} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'icon-button',
  templateUrl: './iconButton.component.html',
  styleUrls: ['./iconButton.component.css'],
})
export class IconButtonComponent {
  private allIcons: Array<string> = Object.keys(fas);
  iconName = fas['faAd'];

  clickButton(): void {
     setTimeout(() => {
      let index = Math.floor(Math.random() * (this.allIcons.length - 1 - 1) + 1);
      this.iconName = fas[this.allIcons[index]];
    }, 3000)
  }

  get icon(): IconDefinition {
    return this.iconName
  }
}
