import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ClientListComponent } from '../../client-list/client-list.component';



import { NotificationsComponent } from '../../notifications/notifications.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'client-list',    component: ClientListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'profile', component:UserProfileComponent},

];
