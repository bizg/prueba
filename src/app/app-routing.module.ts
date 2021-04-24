import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/clients',
		pathMatch: 'full',
	},
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: 'clients',
				loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
