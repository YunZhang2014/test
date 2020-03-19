import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {RestApiService} from './rest-api.service';

export interface TableElement {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  Data: TableElement[];
  col: string[] = ['id', 'name', 'email', 'website'];
  dataSource = new MatTableDataSource<TableElement>(this.Data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  title = 'angular-pwa';

  constructor(private restApiService: RestApiService) {
    this.restApiService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }
}
