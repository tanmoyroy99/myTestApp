import {NgModule} from '@angular/core';
import {
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule } from '@angular/material';

    @NgModule({
        exports: [
            MatInputModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatProgressSpinnerModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule,
            MatMenuModule,
            MatToolbarModule,
            MatGridListModule,
            MatSelectModule,
            MatOptionModule,
            MatSidenavModule,
            MatListModule,
            MatBadgeModule,
            MatIconModule,
        ]
    })
    export class MyMaterialModule {}