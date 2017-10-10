import { Component, OnInit } from '@angular/core';

//Component
import { Rating } from './rating';

//Helpers
import { calculateDiffTime } from '../../utils/helpers/dateAndTime';

//Service
import { RatingService } from '../../utils/services/rating.service';

@Component({
	selector: 'rating-list',
	templateUrl: './rating-list.component.html'
})

export class RatingList implements OnInit {
	private listItem: Rating[];
	private table = {
		header: ['Name', 'Bank', 'Value', 'Comment'],
		body: ['name', 'bankName', 'value', 'text']
	}

	constructor(
		private ratingService: RatingService
		){}

	ngOnInit(): void {
		this.getList();
	}

	private getList(): void {
		let params = {include: 'bank', order: 'createdAt DESC'};
		this.ratingService.getList(params)
			.then(items => {
				let newItems = [];
				for(let item of items){
					let newItem = Object.assign(
						{}, 
						item, 
						{bankName: item.bank.name}
					);
					newItems.push(newItem);
				}
				this.listItem = newItems;
			});		

	}
}
