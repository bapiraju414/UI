import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.models';
import { AsyncPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-root',
  standalone: true,
  //providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet, HttpClientModule, AsyncPipe,MatToolbarModule,MatButtonModule, MatIconModule,MatDatepickerModule,MatRadioModule,MatDialogModule,FormsModule,MatFormFieldModule,MatInputModule,StudentAddEditComponent],
  templateUrl: './app.component.html', 
  styleUrl: 'app.component.css',
})
export class AppComponent {
  // http = inject(HttpClient);

  //  contacts$ = this.getContacts();
  //  private getContacts():Observable<Contact[]>{
  //        return this.http.get<Contact[]>('https://localhost:7277/api/Contacts');

  //  }
  
   constructor(private _dialog: MatDialog){}
      
    openAddEditStudentForm() {
      this._dialog.open(StudentAddEditComponent)
    }


}
