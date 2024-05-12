import { Component, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatButton } from '@angular/material/button'
import { IProducts } from '../../models/products'
import { Subscription } from 'rxjs'
import { ProductsService } from '../../services/products.service'
import { NgForOf } from '@angular/common'


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButton, NgForOf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: IProducts[] = []
  productsSubscription!: Subscription

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe()
  }


}
