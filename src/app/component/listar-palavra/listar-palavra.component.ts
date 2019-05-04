import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Usuario } from 'src/app/entity/usuario';
import { Palavra } from 'src/app/entity/palavra';
import { PalavraService } from 'src/app/service/palavra.service';

@Component({
  selector: 'app-listar-palavra',
  templateUrl: './listar-palavra.component.html',
  styleUrls: ['./listar-palavra.component.css']
})
export class ListarPalavraComponent implements OnInit {

  displayedColumns: string[] = ['texto'];
  dataSource: MatTableDataSource<Palavra>;
  loading = true;
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: PalavraService) {

  }

  ngOnInit() {
    let usuarios = [];
    this.service.listAllPalavras().subscribe(res => {
      usuarios = res;
      this.dataSource = new MatTableDataSource(usuarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
