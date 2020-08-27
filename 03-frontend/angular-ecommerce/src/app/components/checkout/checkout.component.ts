import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  //Declare our form group
  checkoutFormGroup: FormGroup;
  
  //inject the form builder
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    //Build the form
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName:[''],
        lastName: [''],
        email: ['']
      })
    });

  }

}
