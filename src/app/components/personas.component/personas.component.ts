import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersona } from '../../services/service.persona';

@Component({
  selector: 'app-personas.component',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
  providers: [ServicePersona]
})
export class PersonasComponent implements OnInit{

  public personas!: Array<Persona>

  constructor(private _service:ServicePersona){

  }

  ngOnInit(): void {
    this._service.getPersonas().then(response=>{
      this.personas = response
    })
  }

}
