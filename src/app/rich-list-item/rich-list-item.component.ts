import { Component, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-rich-list-item',
  templateUrl: './rich-list-item.component.html',
  styleUrls: ['./rich-list-item.component.css']
})
export class RichListItemComponent {

  @Input() person: Person;
  @Input() currency: any;
  public currencyString: string;

  constructor() {}

  formatReadableNetWorthString() {
    const convertedValue = this.person.netWorth * this.currency.conversion;
    const readableCurrencyString = convertedValue.toLocaleString();
    return `${this.currency.prefix} ${readableCurrencyString}`;
  }

}
