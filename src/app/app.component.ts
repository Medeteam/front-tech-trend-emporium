import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent_1 as HeaderComponent_1 } from "./components/employee-header/eheader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent ,FooterComponent, HeaderComponent_1],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
