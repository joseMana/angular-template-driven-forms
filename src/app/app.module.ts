import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './features/component/directives-demo/directives-demo.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { Highlight2Directive } from './shared/directives/highlight2.directive';
import { IsAuthorizedDirective } from './shared/directives/is-authorized.directive';
import { FormsDemoComponent } from './features/component/forms-demo/forms-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HighlightDirective,
    Highlight2Directive,
    IsAuthorizedDirective,
    FormsDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
