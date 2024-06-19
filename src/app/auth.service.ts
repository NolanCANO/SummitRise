import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private registerUrl = `${this.baseUrl}/register`;
  private loginUrl = `${this.baseUrl}/login`;

  constructor(private http: HttpClient) {}

  register(name: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.registerUrl, { name, email, password }, { headers });
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.loginUrl, { email, password }, { headers });
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Check if the token exists and is not expired
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }

  getTokenPayload(token: string): any {
    const decodedToken = this.decodeToken(token);
    return decodedToken ? decodedToken : null;
  }

  getValueFromToken(token: string | null, key: string): any {
    if (!token) {
      return null;
    }
    
    const payload = this.getTokenPayload(token);
    return payload ? payload[key] : null;
  }
}
