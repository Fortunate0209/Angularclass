import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-display-groceries',
  standalone: true,
  imports: [],
  templateUrl: './display-groceries.component.html',
  styleUrl: './display-groceries.component.css'
})
export class DisplayGroceriesComponent {
  constructor(
    public route: ActivatedRoute,
    public productService: ProductServiceService
  ){}

  public users:any = [];

  ngOnInit() :void{ //called on onload of the component
    // console.log(this.route.snapshot.paramMap.get('product-name'));

    this.productService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
      
    })

  }
  

}
