import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleFormComponent } from './example-form.component';

@NgModule({
  declarations: [ExampleFormComponent],
  imports: [CommonModule],
  exports: [ExampleFormComponent],
})
export class ExampleFormModule {}
