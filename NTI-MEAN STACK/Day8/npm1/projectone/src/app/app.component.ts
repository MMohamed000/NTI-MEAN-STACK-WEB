import { Component } from '@angular/core';
import { CardSectionComponent } from './componants/card-section/card-section.component';
import { FooterComponent } from './componants/footer/footer.component';
import { MainSectionComponent } from './componants/main-section/main-section.component';
import { NavbarComponent } from './componants/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,MainSectionComponent,CardSectionComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
}
