import { Component, Input, OnInit } from '@angular/core';
import { Kontak } from '../model/kontak'

@Component({
  selector: 'app-kontak-child',
  templateUrl: './kontak-child.component.html',
  styleUrls: ['./kontak-child.component.css']
})
export class KontakChildComponent implements OnInit {

  @Input() kontakToChild!: Kontak[];
  tanggal = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
