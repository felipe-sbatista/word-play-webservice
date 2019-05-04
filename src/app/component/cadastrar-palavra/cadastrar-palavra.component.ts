import { Component, OnInit } from '@angular/core';
import { PalavraService } from 'src/app/service/palavra.service';

@Component({
  selector: 'app-cadastrar-palavra',
  templateUrl: './cadastrar-palavra.component.html',
  styleUrls: ['./cadastrar-palavra.component.css']
})
export class CadastrarPalavraComponent implements OnInit {

  constructor(private service: PalavraService) { }

  image = new Image();
  ngOnInit() { }

  uploadFile(files): void {
   this.service.upload(files[0]);
  }

}
