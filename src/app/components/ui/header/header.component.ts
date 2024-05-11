import { Component } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIcon } from '@angular/material/icon'
import { RouterLink } from '@angular/router'
import { NavbarComponent } from '../navbar/navbar.component'


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIcon, RouterLink, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
