import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Router } from '@angular/router';

// alert
import Swal from 'sweetalert2'

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, IftaLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){};

  handleLogin(){   
    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: 'Logged In Successfully!',        
      confirmButtonText: 'ok'
    }).then((result)=>{        
        this.router.navigate(['/userDashboard'])
    })
  }


  bg = "images/bg.jpg";
  bg_3 = "images/bg-3.jpg";
  thrsl = "images/logo2.png";
  it = "images/it.png";

  value1: string | undefined;
  value2: string | undefined;
}
