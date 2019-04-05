import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatTabsModule, MatListModule, MatProgressSpinnerModule, MatMenuModule, MatDividerModule, MatBadgeModule, MatSliderModule, MatButtonToggleModule, } from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDividerModule,
    MatBadgeModule,
    MatSliderModule,
    MatButtonToggleModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDividerModule,
    MatBadgeModule,
    MatSliderModule,
    MatButtonToggleModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class MaterialModule {

}
