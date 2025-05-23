import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// data
import data from './data.json';

// icon --
import { LucideAngularModule, Pen, LogOut  } from 'lucide-angular';

// alert, component
import Swal from 'sweetalert2'
import { EditPopupComponent } from "../../components/edit-popup/edit-popup.component";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';;
import { FluidModule } from 'primeng/fluid';


@Component({
  selector: 'app-user-dashboard',
  imports: [FormsModule ,NgFor, NgIf, LucideAngularModule, EditPopupComponent, ButtonModule, InputTextModule, DatePickerModule, FluidModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {
  readonly Pen = Pen;
  readonly LogOut  = LogOut ;
  thrsl = 'images/logo2.png';


  constructor(private router: Router) {}
  selectedItem: any = null;
  showPopup = false;

  openPopup(item: any) {
    this.selectedItem = item;
    this.showPopup = true;
    document.body.style.overflow = 'hidden';  
  }

  closePopup() {
    this.selectedItem = null;
    this.showPopup = false;
      document.body.style.overflow = 'auto';
  }



  handleLogOut() {
    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: 'Logged Out Successfully!',
      confirmButtonText: 'ok',
    }).then((result) => {
      this.router.navigate(['/login']);
    });
  }

  

  itemsPerPage = 7;
  currentPage = 1;
  fulldata = data;

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.fulldata.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.fulldata.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
