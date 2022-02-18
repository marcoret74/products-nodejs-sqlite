import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
