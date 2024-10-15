import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth/core/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const mainRoutes: Routes = [
  { 
    path: "auth", 
    component: AuthComponent,
    loadChildren: () => import("./auth/auth.module").then( m => m.AuthModule )
  },
  { 
    path: "",
    canActivate: [ authGuard ],
    loadChildren: () => import("./layout/layout.module").then( m => m.LayoutModule ),
    component: LayoutComponent,
    
  },
  
];


export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
