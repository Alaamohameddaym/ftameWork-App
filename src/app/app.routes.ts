import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FramestartComponent } from './framestart/framestart.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'' , redirectTo:'framestart' , pathMatch:'full'},
    {path:'about' , component:AboutComponent},
    {path:'portfolio' , component:PortfolioComponent},
    {path:'contact' , component:ContactComponent},
    {path:'framestart' , component:FramestartComponent}
];
