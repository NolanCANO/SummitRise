import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeededModule } from '../needed/needed.module';
import { FormsModule, NgForm } from '@angular/forms';
import { CommentService } from '../comment.service';
import { AuthService } from '../auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommentComponent } from '../comment/comment.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NeededModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    CommentComponent,
    RouterModule
  ]
})
export class HomeComponent implements OnInit {
  comments: any[] = [];
  name: string = '';
  rating: number = 0;
  comment: string = '';
  isConnected: boolean = false;

  constructor(private commentService: CommentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchComments();
    this.isConnected = this.authService.isAuthenticated();
    this.name = this.authService.getValueFromToken(this.authService.getToken(), 'name');
  }

  fetchComments(): void {
    this.commentService.getComments().subscribe(data => {
      this.comments = data || this.comments;
    });
  }

  deleteComment(index: number): void {
    this.commentService.deleteComment(index.toString()).subscribe(data => {
      this.comments = data || this.comments;
    })
  }

  onSubmit(commentForm: NgForm): void {
    if (commentForm.valid && this.rating !== 0) {
      const newComment = {
        name: this.name || 'Anonyme', // Si le nom est vide, utilisez 'Anonyme'
        rating: this.rating,
        comment: this.comment
      };

      this.commentService.addComment(newComment).subscribe(data => {
        this.comments.push(data);
        this.name = '';
        this.rating = 0;
        this.comment = '';
        commentForm.resetForm();
      });
    } else {
      console.log('La note et le commentaire sont obligatoires.');
    }
  }
}
