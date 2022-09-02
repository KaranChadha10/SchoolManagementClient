import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from '../app/layouts/layouts.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'admin',
    component: LayoutsComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    /*canActivate: [AuthGuard],*/
    /*data: {clientTypes: [ClientType.BusinessOwner] },*/
  },
  {
    path: 'teacher',
    component: LayoutsComponent,
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'student',
    component: LayoutsComponent,
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    // canActivate: [AuthGuard]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
