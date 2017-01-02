import {Component,ViewChild } from '@angular/core';
import {NavComponent} from "../common/nav/nav.component";


import { Product } from './model';
import { GridEditFormComponent } from './edit-form.component';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
@Component({
    selector:'admin-account',
    imports:[GridModule,DialogModule],
    templateUrl:'app/admin/account/account.html'
})

export class AccountCmp {
    @ViewChild(NavComponent) nav:NavComponent;

    ngAfterViewInit() {
        this.nav.currentMenu="FTP账号"
    }





    public dataItem: Product;

    @ViewChild(GridEditFormComponent) protected editFormComponent: GridEditFormComponent;

    private view: Array<Product>;

    constructor(private jsonp: Jsonp) {
        console.log("Here We Go")
        this.getProducts()
            .subscribe(data => {
                this.view = data
                console.log("All Th Data I Receive :",data)
            });
    }

    public onEdit(dataItem: any): void {
        this.dataItem = dataItem;
    }

    public onCancel(): void {
        this.dataItem = undefined;
    }

    public addProduct(): void {
        this.editFormComponent.addProduct();
    }

    public onSave(product: Product): void {
        const operation = product.ProductID === undefined ?
            this.createProduct(product) :
            this.saveProducts(product);

        // operation.switchMap(x => this.getProducts())
        //     .subscribe((response: Product[]) => {
        //         this.view = response;
        //     });
    }

    public onDelete(e: Product): void {
        // this.deleteProduct(e)
        //     .switchMap(x => this.getProducts())
        //     .subscribe((response: Product[]) => {
        //         this.view = response;
        //     });
    }

    public getProducts(): Observable<Product[]> {
        return this.fetch();
    }

    public saveProducts(data: Product): Observable<Product[]> {
        return this.fetch("update", data);
    }

    public createProduct(data: Product): Observable<Product[]> {
        data.ProductID = null;
        return this.fetch("create", data);
    }

    public deleteProduct(data: Product): Observable<Product[]> {
        return this.fetch("destroy", data);
    }

    private fetch(action: string = "", data?: Product): Observable<Product[]>  {
        return this.jsonp
            .get(`http://demos.telerik.com/kendo-ui/service/Products/${action}?callback=JSONP_CALLBACK${this.serializeModels(data)}`)
            .map(response => response.json());
    }

    private serializeModels(data?: Product): string {
        return data ? `&models=${JSON.stringify([data])}` : '';
    }
}