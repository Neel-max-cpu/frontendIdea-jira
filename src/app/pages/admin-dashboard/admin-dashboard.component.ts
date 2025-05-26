import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// icon --
import { LucideAngularModule, Pen, LogOut } from 'lucide-angular';

// data
import assignedTask from './data.json';
import myTask from './data2.json';

// alert, component
import Swal from 'sweetalert2';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';;
import { ToggleSwitch } from 'primeng/toggleswitch';



interface UserEmp {
  name: string;
  code: string;
}
interface UserRole {
  role: string;
  code: string;
}
interface ReqType {
  type: string;
  code: string;
}
interface ProdName {
  name: string;
  code: string;
}
interface Modname {
  name: string;
  code: string;
}
interface AssignTo {
  name: string;
  code: string;
}
interface ReqPriority {
  name: string;
  code: string;
}
interface Status {
  name: string;
  code: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule,NgFor, NgIf, InputTextModule, IftaLabelModule,LucideAngularModule,Dialog,Select,DatePickerModule,ToggleSwitch],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit{
  readonly Pen = Pen;
  readonly LogOut = LogOut;
  thrsl = 'images/logo2.png'; 
  checked: boolean = false; 

  //create user ---
  username: string | undefined;
  password: string | undefined;

  userEmps: UserEmp[] | undefined;
  selectedUserEmp : UserEmp | undefined;
  
  userRole: UserRole[] | undefined;
  selectedUserRole : UserRole | undefined;

  // create task  
  reqtypes: ReqType[] | undefined;
  selectedReqType : ReqType | undefined;
  
  prodName: ProdName[] | undefined;
  selectedProdName : ProdName | undefined;
  
  modName: Modname[] | undefined;
  selectedModName : Modname | undefined;

  functionalityName: string | undefined;

  assignTo : AssignTo[] | undefined;
  selectedAssignTo : AssignTo | undefined;
  
  // date --
  date : Date | undefined;

  reqPriority: ReqPriority[] | undefined;
  selectedReqPriority: ReqPriority | undefined;

  status: Status[] | undefined;
  selectedStatus: Status | undefined;
  
  ngOnInit() {
    this.userEmps = [
      { name: 'Mahesh Kumar', code: 'Mk' },
      { name: 'Ayush Srivastava', code: 'As' },
      { name: 'Santosh Kumar', code: 'Sk' },       
      { name: 'Riya Gupta', code: 'Rg' },       
      { name: 'Harshita Singh', code: 'Hs' },
    ];
    this.userRole = [
      { role: 'Admin', code: 'Ad' },
      { role: 'User', code: 'Us' },      
    ];
    this.reqtypes = [
      { type: 'Bug', code: 'Bg' },
      { type: 'Change Request', code: 'Cr' },      
      { type: 'New Request', code: 'Nr' },      
      { type: 'Support', code: 'Su' },      
    ];
    this.prodName = [
      { name: 'TATPL-DMS', code: 'Td' },
      { name: 'VST', code: 'Vs' },      
      { name: 'KUBOTA', code: 'Ku' },      
      { name: 'JBM', code: 'Jb' },      
    ];
    this.modName = [
      { name: 'CLAIM', code: 'Cl' },
      { name: 'SERVICE', code: 'Se' },      
      { name: 'PRE-SALES', code: 'Ps' },      
      { name: 'WARRANTY', code: 'Wa' },      
    ];
    this.assignTo = [
      { name: 'Mahesh Kumar', code: 'Mk' },
      { name: 'Ayush Srivastava', code: 'As' },
      { name: 'Santosh Kumar', code: 'Sk' },       
      { name: 'Riya Gupta', code: 'Rg' },       
      { name: 'Harshita Singh', code: 'Hs' },
    ];
    this.reqPriority = [
      { name: 'Low', code: 'Lo' },
      { name: 'Medium', code: 'Me' },
      { name: 'High', code: 'Hi' },       
      { name: 'Very High', code: 'Vh' },             
    ];
    this.status = [
      { name: 'Open', code: 'Op' },
      { name: 'Close', code: 'Cl' },
      { name: 'In Progress', code: 'Ip' },             
    ];
  }


  constructor(private router:Router) {} 

  UserVisible: boolean = false;
  handleUser(){
    this.UserVisible = true;
    document.body.style.overflow = "hidden";
  }
  closeDialogUser() {
    this.UserVisible = false;
    document.body.style.overflow = "auto";
  }


  TaskVisible: boolean = false;
  handleTask(){
    this.TaskVisible = true;
  }
  closeDialogTask() {
    this.TaskVisible = false;
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

  editAssignedTask:boolean = false;
  selectedItem:any = null;
  handleEditAssignedTask(item:any){
    this.selectedItem = item;
    this.editAssignedTask = true;
  }
  closeDialogEditTask(){
    this.editAssignedTask = false;    
  }

  editMyTask:boolean = false;  
  handleEditMyTask(item:any){
    this.selectedItem = item;
    this.editMyTask = true;
  }
  closeDialogEditMyTask(){
    this.editMyTask = false;    
  }

  itemsPerPage = 7;
  currentPage = 1;
  assignedTask = assignedTask;
  myTask = myTask;

  get paginatedItemsGivenByAdmin() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.assignedTask.slice(start, start + this.itemsPerPage);    
  }

  get paginatedItemsGivenToAdmin() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.myTask.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    if(!this.checked)
      return Math.ceil(this.assignedTask.length / this.itemsPerPage);
    else 
      return Math.ceil(this.myTask.length / this.itemsPerPage);

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
