import { ValidationErrors, AbstractControl, FormControl } from '@angular/forms';

export class CustomValidator {

    static patternValidator(regExp: RegExp, error: ValidationErrors){
        return (control: AbstractControl) : { [key : string] : any} => {

            if(!control.value) return null;

            const valid = regExp.test(control.value);

            return valid ? null : error;
        }
    }

    static passwordValidator(control: AbstractControl){
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }

    static fileType(types: Array<any>) {
        return (control : FormControl) => {
            const file = control.value;
            if ( file ) {
                console.log(file , file.name);
                const extension = file.name.split('.')[1].toLowerCase();
                if ( types.indexOf( extension.toLowerCase() ) > -1) {
                  return {
                    fileType: true
                  };
                }
                
                return null;
              }
          
              return null;
        }
    }

    static addValidation(validatoins? : any){
        return (control: AbstractControl) : { [key : string] : any} => {

            if(!control.value) return null;
            
        }
    }
}
