import { Component, Input, OnInit } from '@angular/core';
import { Kontak } from '../model/kontak';
import {ActivatedRoute} from '@angular/router';
import { KontakService } from '../service/kontak.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kontak-detail',
  templateUrl: './kontak-detail.component.html',
  styleUrls: ['./kontak-detail.component.css']
})
export class KontakDetailComponent implements OnInit {


  kontakDetail: Kontak | undefined;

  constructor(
    private kontakService: KontakService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getKontakDetail()
  }

  getKontakDetail(): void {
    const idParams = Number(this.route.snapshot.paramMap.get('id'));
    this.kontakService.getKontakDetail(idParams)
      .subscribe(a => this.kontakDetail = a)
  }

  goBack(): void {
    this.location.back()
  }

  onDelete(): void{
    this.deleteKontak()
    this.goHome()
  }

  goHome(): void{
    this.location.go('/dashboard')
  }

  deleteKontak():void {
    const idParams = Number(this.route.snapshot.paramMap.get('id'));
    this.kontakService.deleteKontakService(idParams)
      .subscribe(a => this.kontakDetail = a)
  }
}
