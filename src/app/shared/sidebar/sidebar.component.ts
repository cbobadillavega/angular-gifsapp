import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  get historial():string[]{
    return this.gifsService.historial;
  }

  buscar(termino:string){
    //console.log(termino);
    this.gifsService.buscarGifs(termino);
  }
}
