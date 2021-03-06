// Imports Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

// Imports PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';

// Import Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { HeaderComponent } from './views/components/header/header.component';
import { Page404Component } from './views/components/page404/page404.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { FractionComponent } from './views/pages/fraction/fraction.component';
import { TheoryComponent } from './views/pages/theory/theory.component';
import { LoadComponent } from './views/components/load/load.component';
import { OperationsComponent } from './views/pages/operations/operations.component';
import { DevelopmentComponent } from './views/pages/development/development.component';
import { MultComponent } from './views/pages/mult/mult.component';
import { DivComponent } from './views/pages/div/div.component';
import { PlusComponent } from './views/pages/plus/plus.component';
import { SubtractionComponent } from './views/pages/subtraction/subtraction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    Page404Component,
    AboutComponent,
    ContactComponent,
    TermsComponent,
    FractionComponent,
    TheoryComponent,
    LoadComponent,
    OperationsComponent,
    DevelopmentComponent,
    MultComponent,
    DivComponent,
    PlusComponent,
    SubtractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
