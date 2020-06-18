import { CommunityComponent } from './pages/community/community.component';
import { AuthGuard } from './../../cores/auth.gard';
import { AdminModerationComponent } from './pages/admin-moderation/admin-moderation.component';
import { UserWorkshopListComponent } from './pages/user-workshop/user-workshop-list/user-workshop-list.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkshopListComponent } from './pages/admin-workshop/workshop-list/workshop-list.component';


import { ProductComponent } from './pages/product/product.component';
import { UserRole } from './../../shared/enum/user-role.enum';

const connectedRoutes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.USER] }
  },
  {
    path: 'workshops',
    component: WorkshopListComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
  {
    path: 'planning',
    component: PlanningComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN, UserRole.KULTEUR] }
  },
  {
    path: 'user-workshop',
    component: UserWorkshopListComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.USER, UserRole.KULTEUR] }
  },
  {
    path: 'admin-workshop',
    component: WorkshopListComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
  {
    path: 'moderation',
    component: AdminModerationComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN] }
  },
  {
    path: 'communaute',
    component: CommunityComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.ADMIN, UserRole.KULTEUR, UserRole.USER] }
  },
  {
    path: 'produits',
    component: ProductComponent,
    canActivate: [AuthGuard],
    data: { role: [UserRole.USER, UserRole.ADMIN] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(connectedRoutes)],
  exports: [RouterModule]
})
export class ConnectedRoutingModule { }
