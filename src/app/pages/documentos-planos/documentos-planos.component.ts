import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CircIconComponent } from '../../shared/circ-icon/circ-icon.component';
import { M } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-documentos-planos',
  standalone: true,
  imports: [
    CircIconComponent,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './documentos-planos.component.html',
  styleUrls: ['./documentos-planos.component.scss']
})
export class DocumentosPlanosComponent implements OnInit {
  title = 'Documentos y Planos'
  form!: FormGroup;
  veredaGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      planosConstruccion: this.fb.array([
        this.createPlano(),
        this.createPlano()
      ]),
      planillasVivienda: this.fb.array([this.createPlano()]),
    });

    // this.veredaGroup = this.createPlano(); // en vez de 2 planoContrusccion
  }

  createPlano(): FormGroup {
    return this.fb.group({
      descripcion: ['', Validators.required],
      archivo: [null, Validators.required],
    });
  }

  get planillasVivienda(): FormArray<FormGroup> {
    return this.form.get('planillasVivienda') as FormArray<FormGroup>;
  }

  get planosConstruccion(): FormArray<FormGroup> {
    return this.form.get('planosConstruccion') as FormArray<FormGroup>;
  }

  onFileSelected(event: Event, grupo: FormArray, index: number): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    grupo.at(index).get('archivo')?.setValue(file);
  }

  addFila(grupo: FormArray): void {
    grupo.push(this.createPlano());
  }

  removeFila(grupo: FormArray, index: number): void {
    grupo.removeAt(index);
  }

  getNombreArchivo(control: FormGroup): string {
    const archivo = control.get('archivo')?.value;
    return archivo?.name || '';
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
