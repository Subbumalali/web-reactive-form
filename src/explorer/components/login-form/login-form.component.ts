import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	loginForm = this.fb.group({
		email: ['',Validators.required],
		password: ''
	});
	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit(): void {
	}
	onSubmit() {
		console.log(this.loginForm.value);
	}
}
