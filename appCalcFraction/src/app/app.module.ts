// Imports Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
    LoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
