import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from "../../shared/shared.module";
import { LayoutModule } from "../../layout/layout.module";
import { DialogModule } from "primeng/dialog";




@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        WebcamModule,
        SharedModule,
        LayoutModule,
        DialogModule
    ]
})
export class DashboardModule { }
