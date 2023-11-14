import {
  Component,
  CreateSignalOptions,
  Injector,
  OnInit,
  ValueEqualityFn,
  computed,
  effect,
  signal,
  untracked,
} from '@angular/core';
import 'lodash';
import { LoggerService } from '../servicios/logger.service';
declare var _: any;

@Component({
  selector: 'app-episodio6advancetopics',
  templateUrl: './episodio6advancetopics.component.html',
  styleUrls: ['./episodio6advancetopics.component.scss'],
})
export class Episodio6advancetopicsComponent implements OnInit {
  private datos = signal(['hola'], { equal: _.isEqual });

  public currentUser = signal('Santiago');
  private contador = signal(0);

  public condicionalSignal = computed(() => {
    if (this.contador() <= 5) {
      return `Es muy menos a 5 y valor ${this.contador()}`;
    } else {
      return `Mayor y el valor ${this.contador()}`;
    }
  });

  constructor(private injecto: Injector,private log:LoggerService) {
    effect(() => {
      console.log(
        'my current user is ',
        this.currentUser(),
         untracked(this.condicionalSignal)
      );

      untracked(()=>{
        this.log.registrarLog(this.condicionalSignal());
      });
    });
  }
  ngOnInit(): void {
    this.myeffect();
  }

  private myeffect() {
    effect(
      () => {
        console.log('Se efectua mi effect', this.datos());
      },
      { injector: this.injecto }
    );
  }

  public efecto1() {
    this.datos.set(['hola', 'santagi']);
  }

  public efecto2() {
    this.currentUser.update((valor) => {
      return 'betweencode';
    });
  }

  public sumando() {
    this.contador.set(this.contador() + 1);
  }
}
