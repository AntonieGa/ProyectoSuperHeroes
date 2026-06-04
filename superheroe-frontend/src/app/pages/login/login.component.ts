import { Component, inject } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common'; // Añadida por seguridad de renderizado
=======
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, RouterLink], // Incluido CommonModule
  templateUrl: './login.html',
  styleUrl: './login.component.scss',
=======
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toast = inject(HotToastService);

  loginData = {
    email: '',
<<<<<<< HEAD
    password: '',
  };

  onLogin() {
=======
    password: ''
  };

  onLogin() {
    // Validación visual previa
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
    if (!this.loginData.email || !this.loginData.password) {
      this.toast.error('Por favor, llena todos los campos.');
      return;
    }

<<<<<<< HEAD
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Respuesta completa del servidor:', res);
        const nombreReal = res.user?.nombre || res.nombre || 'Usuario';
        this.toast.success(`¡Bienvenido, ${nombreReal}! 🦸‍♂️`);
=======
    // Hacemos la petición real al servidor
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Respuesta completa del servidor:', res);

        // Extraemos el nombre devuelto por tu endpoint de sesión
        const nombreReal = res.user?.nombre || res.nombre || 'Usuario';

        this.toast.success(`¡Bienvenido, ${nombreReal}! 🦸‍♂️`);

        // SÓLO si la respuesta es correcta, redirigimos al catálogo
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error('Error devuelto por el servidor:', err);
        this.toast.error('Error: Verifica tus credenciales. Usuario o contraseña incorrectos.');
<<<<<<< HEAD
      },
=======
      }
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
    });
  }
}
