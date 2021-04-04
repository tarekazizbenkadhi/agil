import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DetailsComponent } from './details/details.component';
import { KeycloackSecurityService } from './services/keycloack-security.service';

export function kcFactory(kcSecurity:KeycloackSecurityService)
{
return()=>kcSecurity.init();
}





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DetailsComponent,
  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloackSecurityService],useFactory:kcFactory,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
