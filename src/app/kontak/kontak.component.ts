import { Component, OnInit } from '@angular/core';
import { KontakService } from '../service/kontak.service';
import { Kontak, KontakModel } from '../model/kontak';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kontak',
  templateUrl: './kontak.component.html',
  styleUrls: ['./kontak.component.css']
})
export class KontakComponent implements OnInit {

  kontak: Kontak[] = [];

  constructor(private kontakService: KontakService, private location: Location) { }

  ngOnInit(): void {
    this.kontak = []
    this.getKontak()
  }

  getKontak(): void {
    this.kontakService.getKontak()
      .subscribe(kontaks => this.kontak = kontaks);
  }
}
