import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, comment);
  }

  deleteComment(commentId: string): Observable<any> {
    const url = `${this.apiUrl}/${commentId}`;
    return this.http.delete<any>(url);
  }
}
