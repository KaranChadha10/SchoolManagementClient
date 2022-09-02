import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LayoutsComponent } from '../app/layouts/layouts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    BrowserAnimationsModule,
    LayoutsModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

    /*ModalModule.forRoot(),*/
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    //MatStepperModule,
    //Ng2SearchPipeModule,
    //NgxPaginationModule,
    //NgxEchartsModule,
  ],
  providers: [
    //BusinessService,
    //ClientService,
    //GlobalDataService,
    FormBuilder,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
