import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetSelectionComponent } from './asset-selection/asset-selection.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { IncomeComponent } from './income/income.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetSelectionComponent,
    ContributionsComponent,
    IncomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
