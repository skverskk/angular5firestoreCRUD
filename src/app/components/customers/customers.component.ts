import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:Customer[];
  

  constructor( private customerService : CustomerService ) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(  customers => {
    //  console.log(customers);
    this.customers = customers;
    });
  }

}
