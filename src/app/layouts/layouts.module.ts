import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';



@NgModule({
  declarations: [
    
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MasterComponent
  ]
})
export class LayoutsModule { }
