import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularStarterPageComponent } from './pages/angular-starter-page/angular-starter-page.component';
import { AngularStarterPageModule } from './pages/angular-starter-page/angular-starter-page.module';
import { ExampleEditPageComponent } from './pages/example-edit-page/example-edit-page.component';
import { ExampleEditPageModule } from './pages/example-edit-page/example-edit-page.module';

const routes: Routes = [
  { component: ExampleEditPageComponent, path: 'examples/edit' },
  { component: AngularStarterPageComponent, path: 'examples/angular-starter' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, AngularStarterPageModule, ExampleEditPageModule],
})
export class ExamplesRoutingModule {}
