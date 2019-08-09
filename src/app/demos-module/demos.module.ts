import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DragulaModule } from 'ng2-dragula';
import { CKEditorModule } from 'ng2-ckeditor';

import { SharedModule } from '../shared-module/shared.module';

// import 'ckeditor/ckeditor.js'; // not working due to extra files needed

import * as d3 from 'd3';
import { Selection, select } from 'd3-selection';
import { transition } from 'd3-transition';

import { D3GraphComponent } from './components/d3-graph/d3-graph.component';
import { DragDemoComponent } from './components/drag-demo/drag-demo.component';
import { EditorDemoComponent } from './components/editor-demo/editor-demo.component';
import { GraphDemoComponent } from './components/graph-demo/graph-demo.component';

import { BlockchainService } from './services/blockchain.service';

// Depends on the following being loaded from a parent module
// import { SortObjectsPipe } from '../pipes/sort-objects.pipe';

@NgModule({
    declarations: [
        D3GraphComponent,
        DragDemoComponent,
        EditorDemoComponent,
        GraphDemoComponent,
    ], // directives, components, and pipes owned by this NgModule
    imports: [
        CKEditorModule,
        CommonModule,
        DragulaModule.forRoot(),
        HttpClientModule,
        FormsModule,
        RouterModule.forChild([
            // Static Loading
            { path: 'drag', component: DragDemoComponent },
            { path: 'editor', component: EditorDemoComponent },
            { path: 'graph', component: GraphDemoComponent },
            // // Lazy Loading
            { path: 'floor', loadChildren: () => import('./floor-module/floor.module').then(m => m.FloorModule) },
            { path: 'pdf', loadChildren: () => import('./pdf-module/pdf.module').then(m => m.PdfModule) },
        ]),
        SharedModule
    ],
    providers: [
        BlockchainService
    ]
})
export class DemosModule {}
