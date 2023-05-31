import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  model: Order = new Order("", "", 0, "");
   
  constructor() {}

  onSubmit(): void{
  console.log(this.model);
 
}
}
export class Order {
  constructor(
      public firstname: string,
      public lastname: string,
      public password: number,
      public contact: string
  ) {}

}
