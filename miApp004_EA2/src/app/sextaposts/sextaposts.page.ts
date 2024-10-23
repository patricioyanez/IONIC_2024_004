import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../sexta/apirest.service';


@Component({
  selector: 'app-sextaposts',
  templateUrl: './sextaposts.page.html',
  styleUrls: ['./sextaposts.page.scss'],
})
export class SextapostsPage implements OnInit {
  listado : any=[];
  constructor(private activatedRoute:ActivatedRoute,
    private apirestService:ApirestService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( x =>{
      const id = x.get('id')??'';
      if(id != '')
        this.listarPosts(id);
    })
  }
  async listarPosts(id:string)
  {
    this.listado = await this.apirestService.getPosts(id);
  }
}
