import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptHttpClientModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { MenuComponent } from './menu/menu.component'
import { OrderComponent } from './order/order.component'
import { ShipperComponent } from './shipper/shipper.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule
  ],
  declarations: [
    AppComponent,
    RestaurantsComponent,
    MenuComponent,
    OrderComponent,
    ShipperComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}