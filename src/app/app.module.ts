import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { ProductComponent } from './product/product.component';
import { DirectivesComponent } from './directive/directives.component';
import { PipDemoComponent } from './pip-demo/pip-demo.component';
import { HighLightDirective } from './directive/highlight.directives';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingDemoComponent,
    ProductComponent,
    DirectivesComponent,
    HighLightDirective,
    PipDemoComponent
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
