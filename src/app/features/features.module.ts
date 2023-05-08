import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutModule } from "../layout/layout.module";


@NgModule({
    declarations: [
        FeaturesComponent
    ],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        SharedModule,
        DashboardModule,
        LayoutModule
    ]
})
export class FeaturesModule { }
