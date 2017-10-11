import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { BankPage } from '../../pages/bank/index';
import { BankForm } from '../../components/bank/bank-form.component';
import { HomePage } from '../../pages/home/index';
import { RatingPage } from '../../pages/rating/index';

const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'bank', component: BankPage },
	{ path: 'bank/add', component: BankForm },
	{ path: 'rating', component: RatingPage }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}