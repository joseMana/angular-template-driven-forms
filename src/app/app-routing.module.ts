import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './features/component/directives-demo/directives-demo.component';
import { FormsDemoComponent } from './features/component/forms-demo/forms-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/custom-directives', pathMatch: 'full' },
  { path: 'custom-directives', component: DirectivesDemoComponent },
  { path: 'forms', component: FormsDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
