import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadComponent } from './views/components/load/load.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { Page404Component } from './views/components/page404/page404.component';
import { FractionComponent } from './views/pages/fraction/fraction.component';
import { TheoryComponent } from './views/pages/theory/theory.component';


const routes: Routes = [
  {
    path: '',
        redirectTo: 'load',
        pathMatch: 'full'
  },
  {
    path: 'load',
    component: LoadComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'terms',
      component: TermsComponent
  },
  {
      path: 'fraction',
      component: FractionComponent
  },
  {
      path: 'theory',
      component: TheoryComponent
  },
  {
      path: 'page404',
      component: Page404Component
  },
  {
      path: '**',
      component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
