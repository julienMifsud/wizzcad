import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth/auth.guard';
import { LoginGuard } from '@core/guards/login/login.guard';
const routes: Routes = [
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  {
    path: 'login',
    canActivateChild: [LoginGuard],
    loadChildren: () =>
      import('@core/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'content',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('@pages/user-content/user-content.module').then(
        (m) => m.UserContentModule
      ),
  },
  {
    path: '**',
    redirectTo: 'content',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
