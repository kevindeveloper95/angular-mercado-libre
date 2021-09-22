import { DeclareVarStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
   
    
 this.buildForm()
  }
 

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required,  Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z ]+$/)]],
      Apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      Clave: ['', [Validators.required, Validators.pattern(/^[1-9]+$/)]],
      checkbox: ['', [Validators.requiredTrue]],
    });

    /* this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });*/
  } 


  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else {
      this.form.markAllAsTouched();
    }
  }

  get emailField(){
    return this.form.get('email')?.hasError('required');
  }

} 

