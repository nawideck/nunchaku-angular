import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleEditPageComponent } from './example-edit-page.component';
import { ExampleFormModule } from '../../components/example-form/example-form.module';

@NgModule({
  declarations: [ExampleEditPageComponent],
  imports: [CommonModule, ExampleFormModule],
  exports: [ExampleEditPageComponent],
})
export class ExampleEditPageModule {}
