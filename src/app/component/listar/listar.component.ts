import { Usuario } from '../../entity/usuario';
import { UsuarioService } from '../../service/usuario.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'pontos', 'segundos'];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  loading = true;
  color = 'warn';
  mode = 'indeterminate';
  value = 50;

  constructor(private service: UsuarioService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let usuarios = [];
    this.route.data.subscribe(routeData=>{
      usuarios = routeData['usuarios'];
    });
    this.service.listAllUsuarios().subscribe(res => {
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



