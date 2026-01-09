import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InquiryFormComponent {
  private readonly fb = inject(FormBuilder);
  heroImage = 'assets/hero-picture.png';

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s()-]{7,}$/)]],
    email: ['', [Validators.required, Validators.email]],
    location: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1200)]],
  });

  isSubmitting = false;
  successMessage = '';

  get f() {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      console.log('Odeslaná poptávka:', this.form.getRawValue());

      await new Promise((r) => setTimeout(r, 500));

      this.successMessage = 'Poptávka byla odeslána.';
      this.form.reset({
        name: '',
        phone: '',
        email: '',
        location: '',
        description: '',
      });
    } finally {
      this.isSubmitting = false;
    }
  }
}
