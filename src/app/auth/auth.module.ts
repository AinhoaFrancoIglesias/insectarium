import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module'; 

/**
 * Módulo de autenticación que gestiona las funcionalidades relacionadas con el registro,
 * el login y el perfil de usuario.
 */
@NgModule({
  /** Componentes declarados en este módulo */
  declarations: [
    /** Componente para el registro de usuario */
    RegisterComponent,

    /** Componente para el inicio de sesión */
    LoginComponent,

    /** Componente para el perfil del usuario */
    ProfileComponent
  ],
  
  /** Módulos importados en este módulo */
  imports: [
    /** Módulo común de Angular que proporciona directivas y pipes comunes */
    CommonModule,

    /** Módulo de formularios reactivos de Angular para manejar formularios de manera eficiente */
    ReactiveFormsModule,  

    /** Módulo de rutas de autenticación que gestiona las rutas relacionadas con login, registro y perfil */
    AuthRoutingModule
  ]
})
/**
 * Módulo principal de autenticación que incluye los componentes y las dependencias necesarias
 * para gestionar el registro, login y perfil del usuario.
 */
export class AuthModule { }
