import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';

const routes = [
    {
        path     : 'test',
        component: TestComponent
    }
];

@NgModule({
    declarations: [
        TestComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
    ]
})
export class TestModule
{
}
