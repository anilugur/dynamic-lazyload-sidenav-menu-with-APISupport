import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutModule } from './About/about.module';
import { CareerModule } from './Career/career.module';
import { ThanksModule } from './Thanks/thanks.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'aboutMR', loadChildren: () => AboutModule 
  },
  { path: 'careerMR', loadChildren: () => CareerModule },
  { path: 'thanksMR', loadChildren: () => ThanksModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
