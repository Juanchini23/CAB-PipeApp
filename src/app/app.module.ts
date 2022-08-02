import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// cambiar el local de la app
import localAr from '@angular/common/locales/es-AR';
import localBr from '@angular/common/locales/br';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localAr);
registerLocaleData(localBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
    AppRouterModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
