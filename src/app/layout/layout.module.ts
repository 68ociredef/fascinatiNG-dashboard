import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BzIconModule, BzLayoutModule, BzMenuModule } from 'fascinating';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';


const COMPONENTS = [
  LayoutComponent, 
  HeaderComponent, 
  FooterComponent, 
  SidebarLeftComponent, 
  SidebarRightComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BzLayoutModule,
    BzMenuModule,
    BzIconModule
  ],
  exports:[LayoutComponent]
})
export class LayoutModule { }
