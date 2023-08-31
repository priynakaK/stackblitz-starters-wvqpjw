import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [AppComponent, HttpClientModule, HttpClient],
  template: `    
    <app-app></app-app>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
