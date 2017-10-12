import { Component, Input} from '@angular/core';

@Component({
	selector: 'dialog-modal',
	templateUrl: './modal.html'
})

export class DialogModal {
	@Input()info: Object;
	@Input()type: string;
	@Input()actionList: Object;
	@Input()materializeParams;
	@Input()modalActions;

	constructor(){}
}