import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../_models/shared'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: Department = new Department();
  isDepartmentFormValidated = false;
  submitted = false;

  addDepartmentForm: FormGroup = new FormGroup({
    DepartmentName: new FormControl(this.department, [Validators.required]),
    HOD: new FormControl(this.department, [Validators.required]),
    StartYear: new FormControl(this.department, [Validators.required]),
    StudentsCount: new FormControl(this.department, [Validators.required]),
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onDepartmentSave() {

  }



}
