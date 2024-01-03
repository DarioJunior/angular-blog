import { Routes } from '@angular/router';
import { HomeComponent } from './pages';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'content/:id',
        component: ContentComponent
    }
];
