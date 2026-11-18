import { Component, model } from '@angular/core';
import { SimNao } from '../../core/analise.model';

let proximoId = 0;

/** Seletor Sim/Não usado nas perguntas do formulário. */
@Component({
  selector: 'app-sim-nao',
  template: `
    <span class="sn" role="radiogroup" aria-label="Sim ou Não">
      <label [class.on]="valor() === 'S'">
        <input
          type="radio"
          [name]="nome"
          value="S"
          [checked]="valor() === 'S'"
          (change)="valor.set('S')"
        />
        S
      </label>
      <label [class.on]="valor() === 'N'" class="nao">
        <input
          type="radio"
          [name]="nome"
          value="N"
          [checked]="valor() === 'N'"
          (change)="valor.set('N')"
        />
        N
      </label>
    </span>
  `,
  styles: `
    .sn {
      display: inline-flex;
      gap: 6px;
      flex-shrink: 0;
    }
    label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 32px;
      border: 1.5px solid var(--borda);
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      background: #fff;
      user-select: none;
    }
    input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
    label.on {
      background: var(--verde);
      border-color: var(--verde);
      color: #fff;
    }
    label.nao.on {
      background: var(--vermelho);
      border-color: var(--vermelho);
    }
    label:focus-within {
      outline: 2px solid var(--laranja);
    }
  `,
})
export class SimNaoComponent {
  readonly valor = model<SimNao>('');
  protected readonly nome = `sn-${proximoId++}`;
}
