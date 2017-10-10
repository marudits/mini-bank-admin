import { Component, OnInit } from '@angular/core';

//Component
import { Bank } from './bank';

//Service
import { BankService } from '../../utils/services/bank.service';

@Component({
	selector: 'bank-list',
	templateUrl: './bank-list.component.html'
})

export class BankList implements OnInit {
	private listItem: Bank[];

	constructor(
		private bankService: BankService
		){}

	ngOnInit(): void {
		this.getList();
	}

	private getList(): void {
		this.bankService.getList()
			.then(items => this.listItem = items);		

	}
}
