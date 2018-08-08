import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { List } from '../list';
import * as _ from 'lodash';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rich-list',
  templateUrl: './rich-list.component.html',
  styleUrls: ['./rich-list.component.css']
})
export class RichListComponent implements OnInit {

  // list variables
  public originalList: any = [];
  public filteredList: any = [];
  public displayList: any = [];
  public searchList: any = [];
  public filterForm: any;

  // static options and value
  public currencySelectionOptions: any = [
    { prefix: 'USD', conversion: 1.00 },
    { prefix: 'AUD', conversion: 0.78 },
    { prefix: 'Euro', conversion: 0.92 }
  ];
  public orderSelectionOptions: any = [
    'Rank',
    'Age',
    'Name'
  ];
  public title: string;
  public subtitle: string;
  public description: string;
  public reference: string;

  // filter model values
  public countrySelectionOptions: any = [];
  public searchTerm: string;
  public selectedCountry: string;
  public selectedOrder: string;
  public selectedCurrency: string;

  constructor(
    public dataService: DataService,
    public fb: FormBuilder
  ) {
    this.setInitialFilterStates();
    this.buildFilterForm();
  }

  ngOnInit() {
    this.getData();

  }

  setInitialFilterStates() {
    this.searchTerm = '';
    this.selectedCountry = 'Show All';
    this.selectedOrder = 'Rank';
    this.selectedCurrency = _.find(this.currencySelectionOptions, ['prefix', 'USD']);
  }

  buildFilterForm() {
    this.filterForm = this.fb.group({
      search: [''],
      country: [this.selectedCountry],
      order: [this.selectedOrder],
      currency: [this.selectedCurrency]
    });
  }

  getData() {
    this.dataService.getRichList().subscribe((data: List) => {
      this.setDisplayProperties(data);
      this.displayList = this.originalList;
    });
  }

  setDisplayProperties(data: List) {
    this.title = data.pageTitleH1;
    this.subtitle = data.pageTitleH2;
    this.description = data.description;
    this.reference = data.referenceLink;
    this.originalList = data.celebrityList;
    this.setCountryOptions();
  }

  reduceCountryOptions() {
    return this.countrySelectionOptions = this.originalList.map(person => person.country)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  orderCountryOptionsAlphabetically() {
    return this.countrySelectionOptions.sort((a, b) => a.localeCompare(b));
  }

  concatCountryOptionsToShowAll() {
    return this.countrySelectionOptions = ['Show All'].concat(this.countrySelectionOptions);
  }

  setCountryOptions() {
    this.reduceCountryOptions();
    this.orderCountryOptionsAlphabetically();
    this.concatCountryOptionsToShowAll();
  }

  searchDisplayListBySearchTerm() {
    this.filteredList.filter((person) => {
      return Object.keys(person).map((key) => {
        const valueToString = _.lowerCase(person[key].toString());
        if (valueToString.indexOf(_.lowerCase(this.searchTerm)) > -1) {
          this.searchList.push(person);
        }
      });
    });
  }

  async setDisplayListToSearchList() {
    if (this.searchTerm === '') {
      this.displayList = this.filteredList;
      this.filteredList = [];
      return;
    }
    if (this.filteredList.length === 0) {
      this.filteredList = this.displayList;
    }
    this.searchList = [];
    await this.searchDisplayListBySearchTerm();
    this.displayList = this.searchList;
  }

  setDisplayItemsByCountryFilter() {
    if (this.selectedCountry === 'Show All') {
      return this.displayList = this.originalList;
    }
    this.displayList = this.originalList.filter(person => _.lowerCase(person.country) === _.lowerCase(this.selectedCountry));
  }

  setDisplayItemsByOrder() {
    this.displayList = _.orderBy(this.displayList, [_.lowerCase(this.selectedOrder)], ['asc']);
  }

  setDisplayItemsByOrderDirection() {
    this.displayList = this.displayList.reverse();
  }

  clearFilters() {
    this.setInitialFilterStates();
    this.displayList = this.originalList;
  }

  renderRecordsFound() {
    return this.displayList.length > 0;
  }

}
