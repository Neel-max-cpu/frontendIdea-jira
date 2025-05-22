import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// data
import data from './data.json';

// icon --
import { LucideAngularModule, Pen, LogOut  } from 'lucide-angular';
import { Router } from '@angular/router';

// alert
import Swal from 'sweetalert2'
import { EditPopupComponent } from "../../components/edit-popup/edit-popup.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [NgFor, NgIf, LucideAngularModule, EditPopupComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {
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

  readonly Pen = Pen;
  readonly LogOut  = LogOut ;
  thrsl = 'images/logo2.png';

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
