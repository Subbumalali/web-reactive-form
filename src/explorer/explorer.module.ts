import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ExplorerRoutingModule } from './explorer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [
		ExplorerRoutingModule
	]
})
export class ExplorerModule { }
