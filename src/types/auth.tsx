export interface User {
    username: string;
    email: string;
  }
  
  export interface RegisterFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  }
  
  export interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
  }
  
  export interface ValidationErrors {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    acceptTerms?: string;
    general?: string;
  }