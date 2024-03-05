// Import necessary modules and components from Angular
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// Import your components, services, etc.
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MainComponent } from './main/main.component';

// The @NgModule decorator is used to define the metadata for the module
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    // Declare your components here
    AppComponent,HeaderComponent,FooterComponent,MainComponent
  ],
  imports: [
    // Import other Angular modules here
    BrowserModule,AlertModule
  ],
  providers: [
    // Add your services here (if any)
  ],
  bootstrap: [
    // Define the component that should be the root of your application
    AppComponent,
  ]
})
export class AppModule { }
