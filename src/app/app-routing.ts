import { Routes, RouterModule } from '@angular/router';

import { MainHomeComponent } from './main-home/main-home.component';
import { MainResumeComponent } from './main-resume/main-resume.component';

const routes: Routes = [
    {
        path: '',
        component: MainHomeComponent
    },
    {
        path: 'resume',
        component: MainResumeComponent
    }
];

export const appRoutingModule = RouterModule.forRoot(routes);