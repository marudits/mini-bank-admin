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
	private showedItem: Object[];
	private table = {
		header: ['Name', 'Address', 'Rating', 'Favourites', 'Office Hours', 'Office Days', 'Created At'],
		body: ['name', 'address', 'rating', 'favourites', 'officeHours', 'officeDays', 'createdAt']
	}

	private formBank: string = 'modal-bank-form';

	constructor(
		private bankService: BankService
		){}

	ngOnInit(): void {
		this.getList();
	}

	private getList(): void {
		let params = {order: 'id DESC'}
		this.bankService.getList(params)
			.then((items) => {
				this.listItem = items
			});
	}
}
