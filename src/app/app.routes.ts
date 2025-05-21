import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './pages/super-admin-dashboard/super-admin-dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {path:'', redirectTo:"login", pathMatch:"full"},
    {path:'login', component:LoginComponent},
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'superAdmin-dashboard', component:SuperAdminDashboardComponent},
    {path:'user-dashboard', component:UserDashboardComponent},
];
