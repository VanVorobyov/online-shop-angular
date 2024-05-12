import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button'


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
