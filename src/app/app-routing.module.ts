import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MerchComponent } from './merch/merch.component';


const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "merch", component: MerchComponent
  },
  {
    path: "blogpage", component: BlogpageComponent
  },
  {
    path: "cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
