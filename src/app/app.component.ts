import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './models/login';
import { Register } from './models/register';
import { JwtAuth } from './models/jwtAuth';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'big-ecommerce';
  loginDto = new Login();
  registerDto = new Register();
  jwtDto = new JwtAuth();

  constructor(private authService: AuthenticationService){}

  register(registerDto: Register){
    this.authService.register(registerDto).subscribe();
  }

  login(loginDto: Register){
    this.authService.login(loginDto).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.token)
    })
  }

  Weather(){
    this.authService.getData().subscribe((weather: any) =>{
      console.log(weather);
    })
  }
}
