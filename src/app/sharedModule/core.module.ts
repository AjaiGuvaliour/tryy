import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatSidenavModule,
    MatSliderModule,
    MatProgressBarModule,
} from '@angular/material';
import { SidemenuComponent } from './sidenavSettings/sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidenavSettings/sidemenu-item/sidemenu-item.component';
import { ToolbarNotificationComponent } from './sidenavSettings/toolbar-notification/toolbar-notification.component';
import { ToolbarComponent } from './sidenavSettings/toolbar/toolbar.component';
import { SidebarComponent } from './sidenavSettings/sidebar/sidebar.component';
import { UserMenuComponent } from './sidenavSettings/user-menu/user-menu.component';
import {MatCardModule} from '@angular/material/card';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({

    declarations: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarNotificationComponent,
        ToolbarComponent,

        SidebarComponent,
        UserMenuComponent
    ],

    imports: [
        CommonModule,
        HttpClientModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatChipsModule,
        MatCardModule,
        RouterModule,
        PerfectScrollbarModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatTableModule,
        MatSidenavModule,
        MatTabsModule,
        MatSliderModule,
        MatProgressBarModule,
    ],


    exports: [
        SidemenuComponent,
        SidemenuItemComponent,
        ToolbarNotificationComponent,
        ToolbarComponent,
        SidebarComponent,
        UserMenuComponent,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatChipsModule,
        RouterModule,
        PerfectScrollbarModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSidenavModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatTableModule,
        MatTabsModule,
        MatSliderModule,
        MatProgressBarModule,
        
    ],

    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }

    ]
})
export class CoreModule { }
