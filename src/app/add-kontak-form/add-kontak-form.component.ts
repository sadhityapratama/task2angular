import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Kontak, KontakModel } from '../model/kontak';
import { KontakService } from '../service/kontak.service';

@Component({
  selector: 'app-add-kontak-form',
  templateUrl: './add-kontak-form.component.html',
  styleUrls: ['./add-kontak-form.component.css']
})
export class AddKontakFormComponent implements OnInit {

  constructor(private kontakService: KontakService,private location: Location) { }

  modelKontak = new KontakModel('','','','')
  kontaks: Kontak[] = [];

  ngOnInit(): void {
    this.kontaks = []
  }

  goBack(): void {
    this.location.back()
  }

  onSubmit(){
    // this.submitted = true;
    this.addKontak()
  }

  addKontak(
    name: string = this.modelKontak.name, 
    phone: string = this.modelKontak.phone,
    skill: string = this.modelKontak.skill,
    notes : string = this.modelKontak.notes
    ): void {
      name = name.trim();
      if(!name) {return}
      this.kontakService.addKontakService({name, phone,skill,notes} as Kontak)
        .subscribe(kontak => {
          this.kontaks.push(kontak)
        })
  }
}
