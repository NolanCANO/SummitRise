import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeededModule } from '../needed/needed.module';
import { FormsModule, NgForm } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NeededModule,
    FormsModule,
  ]
})
export class HomeComponent implements OnInit {
  comments: any[] = [];
  name: string = '';
  rating: number = 0;
  comment: string = '';

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.commentService.getComments().subscribe(data => {
      this.comments = data;
    });
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
