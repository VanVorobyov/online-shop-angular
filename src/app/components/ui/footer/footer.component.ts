import { Component } from '@angular/core'
import { MatIcon } from '@angular/material/icon'
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    MatToolbarRow,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
