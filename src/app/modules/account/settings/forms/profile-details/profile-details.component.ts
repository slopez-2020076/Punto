import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  form: FormGroup

  constructor(
    private cdr: ChangeDetectorRef, 
    private fb: FormBuilder,
    private _AuthServiceService : AuthServiceService) {
    const loadingSubscr = this.isLoading$
     // .asObservable()
      //.subscribe((res) => (this.isLoading = res));
    //this.unsubscribe.push(loadingSubscr);
  }

  
  ngOnInit(): void {
    this.iniciarFormulario();
    this.CargarInfo();
  } 

  CargarInfo(){
    this._AuthServiceService.getInfoUser().subscribe({
      next: resp =>{
          //console.log(resp['getCompany'])
          this.form.controls['nombre'].setValue(resp['getCompany']['name'])
          this.form.controls['username'].setValue(resp['getCompany']['username'])
          this.form.controls['email'].setValue(resp['getCompany']['email'])
          this.form.controls['phone'].setValue(resp['getCompany']['phone'])
          this.form.controls['role'].setValue(resp['getCompany']['role'])
          //console.log(this.form)
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  iniciarFormulario(): void {
    this.form = this.fb.group({
      nombre: [''],
      username: [""],
      password: [0],
      email: [""],
      phone: [0],
      role: [""]

    })
  }  


  saveSettings() {

    let info = this.form.value
    console.log(info)

    this._AuthServiceService.UpdateInfo(info).subscribe({
      next: resp =>{
        console.log(resp);
      },error: err =>{
        console.log(err)
      }
    })

    return
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
