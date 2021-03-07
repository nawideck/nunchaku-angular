import { TestBed } from '@angular/core/testing';

import { FormToolsService } from './form-tools.service';
import { FormControl, Validators } from '@angular/forms';

describe('FormToolsService', () => {
  let service: FormToolsService;
  let formControl: FormControl;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(FormToolsService);
    formControl = new FormControl('', [Validators.required]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Fc : dirty, valid - Form : submitted', () => {
    formControl.reset();
    formControl.setValue('Nawideck');
    formControl.markAsDirty();

    const value = service.getFieldClassValidation(formControl, true);
    expect(value['is-valid'] as boolean).toBeTruthy();
    expect(value['is-invalid']).toBeFalsy();
  });

  it('Fc : dirty, not valid - Form : submitted', () => {
    formControl.reset();
    formControl.setValue('');
    formControl.markAsDirty();

    const value = service.getFieldClassValidation(formControl, true);
    expect(value['is-valid']).toBeFalsy();
    expect(value['is-invalid']).toBeTruthy();
  });

  it('Fc : untouched, valid - Form : submitted', () => {
    formControl.reset();
    formControl.setValue('Nawideck');

    const value = service.getFieldClassValidation(formControl, true);
    expect(value['is-valid']).toBeFalsy();
    expect(value['is-invalid']).toBeFalsy();
  });

  it('Fc : untouched, not valid - Form : submitted', () => {
    formControl.reset();
    formControl.setValue('');

    const value = service.getFieldClassValidation(formControl, true);
    expect(value['is-valid']).toBeFalsy();
    expect(value['is-invalid']).toBeTruthy();
  });

  it('Fc : dirty, valid - Form : NOT submitted', () => {
    formControl.reset();
    formControl.setValue('Nawideck');
    formControl.markAsDirty();

    const value = service.getFieldClassValidation(formControl, false);
    expect(value['is-valid']).toBeTruthy();
    expect(value['is-invalid']).toBeFalsy();
  });

  it('Fc : dirty, not valid - Form : NOT submitted', () => {
    formControl.reset();
    formControl.setValue('');
    formControl.markAsDirty();

    const value = service.getFieldClassValidation(formControl, false);
    expect(value['is-valid']).toBeFalsy();
    expect(value['is-invalid']).toBeFalsy();
  });

  it('Fc : untouched, valid - Form : NOT submitted', () => {
    formControl.reset();
    formControl.setValue('Nawideck');

    const value = service.getFieldClassValidation(formControl, false);
    expect(value['is-valid']).toBeFalsy();
    expect(value['is-invalid']).toBeFalsy();
  });

  it('Fc : untouched, not valid - Form : NOT submitted', () => {
    formControl.reset();
    formControl.setValue('');

    const value = service.getFieldClassValidation(formControl, false);
    expect(value['is-valid']).toBeFalsy();
    expect(value['is-invalid']).toBeFalsy();
  });
});
