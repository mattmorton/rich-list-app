import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RichListComponent } from './rich-list/rich-list.component';
import { RichListItemComponent } from './rich-list-item/rich-list-item.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    RichListComponent,
    RichListItemComponent,
  ],
  exports: [
    AppComponent,
    RichListComponent,
    RichListItemComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
