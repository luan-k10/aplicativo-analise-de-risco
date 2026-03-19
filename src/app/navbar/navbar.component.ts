import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;
  isPerfilOpen = false;
  isBuscarOpen = false;
  searchQuery: string = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isPerfilOpen = false;
    this.isBuscarOpen = false;
    if (!this.isMenuOpen) {
      this.searchQuery = '';
    }

  }

  togglePerfil() {
    this.isPerfilOpen = !this.isPerfilOpen;
    this.isMenuOpen = false;
    this.isBuscarOpen = false
    if (!this.isPerfilOpen) {
      this.searchQuery = '';
    }
  }

  toggleBuscar() {
    this.isBuscarOpen = !this.isBuscarOpen;
    this.isMenuOpen = false;
    this.isPerfilOpen = false;
    if (!this.isBuscarOpen) {
      this.searchQuery = '';
    }




  }

  // area de busca - consultar api para implantação
  onSearch(value?: string) {
    const termo = value ?? this.searchQuery.trim();
    console.log('Buscando (input):', termo);
    // Aqui você pode filtrar, chamar API, etc.
  }

  onSearchEnter() {
    const termo = this.searchQuery.trim();
    if (termo) {
      console.log('Busca confirmada (ENTER):', termo);
      // Exemplo: redirecionar
      // this.router.navigate(['/busca'], { queryParams: { q: termo } });
      this.toggleMenu(); // fecha o menu após busca
    }
  }
}
