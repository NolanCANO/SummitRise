import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../auth.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, MatIcon, MatButton],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comment: any = {
    author: 'Anonyme',
    rating: 0,
    comment: ''
  };
  @Input() id: number = 0;
  isAdmin: boolean = false;

  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.comment.author = this.comment.author || 'Anonyme';
  }

  deleteComment() {
    this.deleteEvent.emit(this.id);
  }
}
