import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


// components -
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';;
import { FluidModule } from 'primeng/fluid';


interface Status {
  name: string;
  code: string;
}

interface People {
  name: string;
  code: string;
}

@Component({
  selector: 'app-edit-popup',
  standalone: true, 
  imports: [FormsModule,Select,FluidModule,DatePickerModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent implements OnInit {
  @Input() item:any;
  @Output() close = new EventEmitter<void>();


  // status
  statuses : Status[] | undefined;
  selectedStatus: Status | undefined;
  // reassign task
  peoples : People[] | undefined;
  selectedPeople: People | undefined;
  
  ngOnInit() {
    this.statuses = [
      { name: 'Open', code: 'Op' },
      { name: 'Close', code: 'Cl' },
      { name: 'In Progress', code: 'Ip' },       
    ];
    this.peoples = [
      { name: 'Mahesh Kumar', code: 'Mk' },
      { name: 'Ayush Srivastava', code: 'As' },
      { name: 'Santosh Kumar', code: 'Sk' },       
      { name: 'Riya Gupta', code: 'Rg' },       
      { name: 'Harshita Singh', code: 'Hs' },       
    ];
  }   

  // date --
  date : Date | undefined;



  handleClose(){
    this.close.emit();
  }

   updateStatus() {
    // Handle status update logic here
  }

  updateStartDate() {
    // Handle start date logic
  }

  reassignTask() {
    // Handle task reassignment logic
  }
}
