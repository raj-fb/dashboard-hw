import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { iProduct } from '../models/products.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  
  public displayedColumns = ['sku', 'price', 'stock', 'title'];
  public dataSource = new MatTableDataSource<iProduct>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  public getAllProducts = () => {
    this.productService.getProducts()
    .subscribe(res => {
      this.dataSource.data = res as iProduct[];
    })
  }
  

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.filterPredicate = (data: any, filter) => { const dataStr =JSON.stringify(data.title).toLowerCase(); return dataStr.indexOf(filter) != -1; }
  }

}
