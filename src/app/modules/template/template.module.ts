import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [ContainerComponent],
  declarations: [
    ContainerComponent, 
    HeaderComponent, 
    MainComponent, 
    FooterComponent]
})
export class TemplateModule { }
