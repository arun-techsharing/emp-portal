import { AbstractControl, ValidationErrors } from "@angular/forms";

export function disVerification(cntrl: AbstractControl): ValidationErrors | null {

    let discVal = cntrl.value;
    console.log(discVal)
    if (discVal > 100) {
      return { 'disInvalid': false };
    }
    else {
      return null;
    }
  
  }