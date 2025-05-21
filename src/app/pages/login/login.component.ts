import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, IftaLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  bg = "images/bg.jpg";
  bg_3 = "images/bg-3.jpg";
  thrsl = "images/logo2.png";

  value1: string | undefined;
  value2: string | undefined;
}
