
import { ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-deactivate-account',
  templateUrl: './deactivate-account.component.html',
})

export class DeactivateAccountComponent  {
  constructor(
    
   ) {}

  form: FormGroup



  saveSettings() {
    
    alert('Account has been successfully deleted!');
    
  }

 
}


