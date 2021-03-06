import { Component, OnInit } from '@angular/core';

// import { DragulaService } from '../../services/dragula.service';
import { DragulaService } from 'ng2-dragula';

import * as $ from 'jquery';

// We only put interfaces in the models folder when they are reused across components
export interface DragObject { id: number; text: string; allowMove: boolean }

@Component({
    selector: 'app-drag-demo',
    styleUrls: ['./drag-demo.component.scss'],
    viewProviders: [DragulaService],
    templateUrl: './drag-demo.component.html'
})
export class DragDemoComponent implements OnInit {
    public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
    public many2: Array<string> = ['Explore', 'them'];
    list1: DragObject[] = [
        { id: 0, text: 'You can drag and drop these elements between these two containers', allowMove: true },
        { id: 1, text: 'There\'s also the possibility of moving elements around in the same container, changing their position', allowMove: true },
        { id: 2, text: 'A drop event is fired whenever an element is dropped anywhere other than its origin', allowMove: true },
        { id: 3, text: 'The over event fires when you drag something over a container, and out fires when you drag it away from the container', allowMove: true }
    ];
    list2: DragObject[] = [
        { id: 4, text: 'There are also events such as cancel, cloned, drag, dragend, remove, shadow, dropModel, and removeModel', allowMove: true },
        { id: 5, text: 'Make sure to check out the dragula and ng2-dragula documentation on GitHub!', allowMove: true },
        { id: 6, text: 'Don\'t move me!!!', allowMove: false },
    ];

    constructor(private dragulaService: DragulaService) { }

    ngOnInit(): void {
        const self = this;
        this.dragulaService.createGroup('dragContainer', {
            isContainer: (el: any) => false, // only elements in drake.containers will be taken into account
            moves: (el: any, source: any, handle: any, sibling: any) =>
                // Elements are always draggable by default
                true
            ,
            accepts: (el: any, target: any, source: any, sibling: any) => {
                // Elements can be dropped in any of the `containers` by default
                const itemId: number = parseInt($(el).attr('id'), 10);
                const item = self.list1.find(d => d.id === itemId) || self.list2.find(d => d.id === itemId);
                if (!item.allowMove) {
                    return false;
                } else {
                    return true;
                }
            },
            invalid: (el: any, handle: any) => false, // don't prevent any drags from initiating by default
            direction: 'vertical', // Y axis is considered when determining where an element would be dropped
            copy: false, // Elements are moved by default, not copied
            copySortSource: true, // Elements in copy-source containers can be reordered
            revertOnSpill: true, // Spilling will put the element back where it was dragged from, if this is true
            removeOnSpill: false,  // Spilling will `.remove` the element, if this is true
            mirrorContainer: document.body, // Set the element that gets mirror elements appended
            ignoreInputTextSelection: true // Allows users to select input text, see details below
        });
        // Look at DragulaService for additional events to subscribe to
        // Drag, dragend, drop cancel, remove, shadow, over, out, cloned
        this.dragulaService.over('dragContainer').subscribe((value: any) => {
            // Do something here
        });
        this.dragulaService.out('dragContainer').subscribe((value: any) => {
            // Do something here
        });
    }

    private onOver(args: any): void {
        // Container is the source not the target container
        const [el, container, source] = args;
        const itemId: number = parseInt($(el).attr('id'), 10);
        const item = this.list1.find(d => d.id === itemId) || this.list2.find(d => d.id === itemId);
        if (container !== source) {
            if (item.allowMove) {
                $(container).addClass('drag-success');
            } else {
                $(container).addClass('drag-error');
            }
        }
    }

    private onOut(args: any): void {
        const [el, container, source] = args;
        $(container).removeClass('drag-success drag-error');
    }

    private removeObject(list: Array<any>, objToRemove: any): void {
        // Finds the object in the list with the matching id and removes it
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === objToRemove.id) {
                list.splice(i, 1);
                break;
            }
        }
    }

}
