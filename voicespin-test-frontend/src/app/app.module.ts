import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PlanetsTableComponent } from './components/planets-table/planets-table.component';
import { NumberWrapperPipe } from './pipes/number-wrapper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PlanetsTableComponent,
    NumberWrapperPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
