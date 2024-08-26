import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ProductsComponent } from './products/products.component';
import { PagenotfundComponent } from './pagenotfund/pagenotfund.component';
import { DisplayGroceriesComponent } from './display-groceries/display-groceries.component';
import { UserComponent } from './user/user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BehaviourparentComponent } from './behaviourparent/behaviourparent.component';
import { TemRivenFormComponent } from './tem-riven-form/tem-riven-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';
import { ReactivedashboardComponent } from './reactivedashboard/reactivedashboard.component';
import { reactiveguardGuard } from './guards/reactiveguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { EventemitterComponent } from './eventemitter/eventemitter.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent },
    {path:'angularm', component:AngularmaterialComponent},
    {path: 'nav', component:NavComponent},
    {path: 'eventemitter', component:EventemitterComponent},
    {path: 'template', component:TemRivenFormComponent},
    {path: 'reactive', component:ReactiveformComponent},
    {path: 'reactivesignin', component:ReactivesigninComponent},
    {path: 'reactivedashboard/:id', component:ReactivedashboardComponent, canActivate:[reactiveguardGuard]},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'user', component:UserComponent},
    {path: 'contact', component:ContactsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}, // redirect
    {path:'parent', component:BehaviourparentComponent},
    {path:'products', children: [
        {path: '', component:ProductsComponent},
        {path: 'groceries', children:[
            {path:'', component:GroceriesComponent},
            {path:':product-name', component:DisplayGroceriesComponent}, // parameterized or dynamic route
        ]},
        {path: 'appliances', component:AppliancesComponent},
        {path: 'clothes', component:ClothesComponent}
    ]},

    {path:'**', component: PagenotfundComponent}
];
