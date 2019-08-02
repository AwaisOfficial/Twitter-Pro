import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

export class CustomFormBuilder {
   private form: FormGroup;
   constructor(){}
   
   initForm<T>(values : T , formBuilder: FormBuilder){
      
      for(const key of Object.keys(values)){
        const value = values[key];
        const controlType = value.type;
        switch(controlType){
            case 'control':
            this.form.addControl(key , formBuilder.control(value.value , Validators.compose( [ value.required ? Validators.required : null , value.custom_validation ? value.custom_validation : null ])));
            break;
            case 'array':
            this.form.addControl(key , formBuilder.array( [] ));
            break;
            case 'group':
            this.form.addControl(key, formBuilder.group({}));
            break;

            default:
            break;
        }
      }
      console.log(this.form);
      return this.form;
   }

   getValidators(value){
      return !value.validators ? '' : [ Validators.required , value.customValidtor]
   }
}