import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { RestaurantsComponent } from './restaurants/restaurants.component'
import { MenuComponent } from './menu/menu.component'
import { OrderComponent } from './order/order.component'
import { ShipperComponent } from './shipper/shipper.component'

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'shipper', component: ShipperComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}