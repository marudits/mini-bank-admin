import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { formatOfficeHours, formatOfficeDays } from '../../utils/helpers/bank';

@Component({
	selector: 'bank-detail',
	templateUrl: './bank-detail.component.html'
})

export class BankDetail {
	@Input()bank;
	private bankInfo;

	private table = {
		header: ['ID', 'Name', 'Address', 'Office Hours', 'Office Days'],
		column: ['id', 'name', 'address', 'formattedOfficeHours', 'formattedOfficeDays']
	}

	constructor(){}

	ngDoCheck(): void {
		this.setBankInfo();
	}

	setBankInfo(): void {
		this.bankInfo = Object.assign({}, this.bank,
			{formattedOfficeHours: formatOfficeHours(this.bank)},
			{formattedOfficeDays: formatOfficeDays(this.bank)}
		);
	}

}