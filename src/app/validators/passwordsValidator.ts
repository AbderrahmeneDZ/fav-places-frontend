import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
    static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {

        let errorObject = null

        if (control.get('password').value !== control.get('confirmPassword').value) {
            errorObject = {
                passwordsShouldMatch: true
            }
        }

        control.get('confirmPassword').setErrors(errorObject)

        return errorObject
    }
}