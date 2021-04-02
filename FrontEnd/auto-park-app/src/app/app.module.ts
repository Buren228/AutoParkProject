import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule, Routes } from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DispetcherMenuComponent } from './dispatcher-menu/dispetcher-menu.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { RoutesComponent } from './routes/routes.component';
import { EmployeeComponent } from './data-base/Components/employee/employee.component';
import { BusesComponent } from './data-base/Components/buses/buses.component';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

// описание основной маршрутизации
const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'amenu', component: AdminMenuComponent},
  {path: 'dmenu', component: DispetcherMenuComponent},
  {path: 'routes', component: RoutesComponent},
  {path: 'db', component: DataBaseComponent},
  {path: 'emp', component: EmployeeComponent},
  {path: 'buses', component: BusesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MenuComponent,
    AdminMenuComponent,
    DispetcherMenuComponent,
    DataBaseComponent,
    RoutesComponent,
    EmployeeComponent,
    BusesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
