import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
proyecto: Proyectos = null;
constructor(
  private proyectoS: ProyectosService,
  private activatedRouter : ActivatedRoute,
  private router: Router
) {}

ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectoS.detail(id).subscribe(
    {
      next: data =>{
      this.proyecto = data;
    }, error: err =>{
       alert("Error al modificar");
       this.router.navigate(['']);
    }
  }
  )
}

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectoS.update(id, this.proyecto).subscribe(
    {
      next: data => {
      this.router.navigate(['']);
    }, error: err => {
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    }
  }
  )
}
} 
