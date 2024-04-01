import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errormessage',
  standalone: true,
  imports: [],
  templateUrl: './errormessage.component.html',
  styleUrl: './errormessage.component.css'
})

export class ErrormessageComponent {
  @Input() message: string = 'Something went wrong';

}
