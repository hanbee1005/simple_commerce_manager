import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// 직접 생성한 모듈
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ScmMainModule } from './scm-main/scm-main.module';

import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        /* Angular Modules */
        BrowserModule,
        FormsModule,
        /* App Modules */
        ProductModule,
        CategoryModule,
        ScmMainModule,
        /* App Routing Module */
        AppRoutingModule,
        /* 3rd Modules */
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
