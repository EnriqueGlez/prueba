import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes = [
    {
        path     : 'user',
        component: UserComponent
    }
];

@NgModule({
    declarations: [
        UserComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        CommonModule,
    ]
})
export class UserModule
{
}
