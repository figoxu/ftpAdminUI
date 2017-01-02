import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Product } from './model';

import { DialogModule } from '@progress/kendo-angular-dialog';
@Component({
    selector: 'kendo-grid-edit-form',
    imports:[DialogModule],
    styles: [`
        .ng-valid   { border-left: 5px solid #42a948; }
        .ng-invalid { border-left: 5px solid #a94442; }
        form.ng-invalid { border-left: 0; }
        .invalid    { color: #a94442; }
    `],
    template: `
        <kendo-dialog *ngIf="active" title="Edit" (close)="onCancel()">
            <form [formGroup]="editForm">
                <div>
                    <label for="ProductName">ProductName</label>
                    <input type="text" formControlName="ProductName" [(ngModel)]="dataItem.ProductName" />
                    <div [hidden]="editForm.controls.ProductName.valid || editForm.controls.ProductName.pristine" class="invalid">
                        ProductName is required
                    </div>
                </div>
                <div>
                    <label for="UnitPrice">UnitPrice</label>
                    <input type="text" formControlName="UnitPrice" [(ngModel)]="dataItem.UnitPrice"/>
                </div>
                <div>
                    <label for="Discontinued">Discontinued</label>
                    <input type="checkbox" formControlName="Discontinued" [(ngModel)]="dataItem.Discontinued"/>
                </div>
                <div>
                    <label for="UnitsInStock">UnitsInStock</label>
                    <input type="text" formControlName="UnitsInStock" [(ngModel)]="dataItem.UnitsInStock"/>
                    <div [hidden]="editForm.controls.UnitsInStock.valid || editForm.controls.UnitsInStock.pristine" class="invalid">
                        UnitsInStock must be between 0 and 99
                    </div>
                </div>
            </form>

            <kendo-dialog-actions>
                <button class="k-button" (click)="onCancel()">Cancel</button>
                <button class="k-button k-primary" [disabled]="!editForm.valid" (click)="onSave()">Save</button>
            </kendo-dialog-actions>
        </kendo-dialog>
    `
})
export class GridEditFormComponent {
    dataItem;
    editForm;
    @Input() public set model (product: Product) {
        this.dataItem = product;
        product === undefined ? this.active = false: this.active = true;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.editForm = new FormGroup({
            'ProductName': new FormControl("", Validators.required),
            'UnitPrice': new FormControl(),
            'UnitsInStock': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,2}')])),
            'Discontinued': new FormControl(false)
        })
    }

    public active: boolean = false;

    public onSave(): boolean {
        this.save.emit(this.dataItem);
        this.active = false;
        return false;
    }
    public onCancel(): boolean {
        this.active = false;
        this.cancel.emit(undefined);
        return false;
    }

    public addProduct() {
        this.model = new Product();
        this.active = true;
    }
}


