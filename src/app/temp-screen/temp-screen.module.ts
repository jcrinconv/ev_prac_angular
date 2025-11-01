import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TempScreenAdviceComponent } from './temp-screen-advice/temp-screen-advice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TempScreenAdviceComponent],
  declarations: [TempScreenAdviceComponent],
})
export class TempScreenModule { }
