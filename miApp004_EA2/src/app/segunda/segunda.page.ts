import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  valor1:any;
  valor2:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.valor1 = this.activatedRoute.snapshot.paramMap.get("num");

    this.activatedRoute.paramMap.subscribe(x =>
    {
      this.valor2 = x.get("id");
    })

  }

}
