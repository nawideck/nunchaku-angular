import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
