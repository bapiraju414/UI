import {Component,Inject, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule } from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../student-add-edit/core/core.service'


@Component({
  selector: 'app-student-add-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatInputModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,MatIconModule,MatButtonModule,
    MatToolbarModule,MatDialogModule,MatDatepickerModule,MatRadioModule,MatSelectModule],
  templateUrl: './student-add-edit.component.html',
  styleUrl: './student-add-edit.component.css'
})
export class StudentAddEditComponent {  

  studentForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,private _dialogRef: MatDialogRef<StudentAddEditComponent>,
  private _coreService: CoreService) {
    this.studentForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  ngOnInit(): void {
    this.studentForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.studentForm.valid) {
      if (this.data) {
        // this._empService
        //   .updateEmployee(this.data.id, this.studentForm.value)
        //   .subscribe({
        //     next: (val: any) => {
        //       this._coreService.openSnackBar('Employee detail updated!');
        //       this._dialogRef.close(true);
        //     },
        //     error: (err: any) => {
        //       console.error(err);
        //    },
          //});
      } else {
        // this._empService.addEmployee(this.empForm.value).subscribe({
        //   next: (val: any) => {
        //     this._coreService.openSnackBar('Employee added successfully');
        //     this._dialogRef.close(true);
        //   },
        //   error: (err: any) => {
        //     console.error(err);
        //   },
        // });
      }
    }
  }
}
