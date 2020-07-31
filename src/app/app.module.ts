import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ElementListComponent } from './element-list/element-list.component';
import { FilterIdPipe } from './pipes/filter-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    FilterIdPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }