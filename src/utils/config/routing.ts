import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { BankPage } from '../../pages/bank/index';
import { HomePage } from '../../pages/home/index';

const routes: Routes = [
	{ path: '', component: HomePage },
	{ path: 'bank', component: BankPage }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}