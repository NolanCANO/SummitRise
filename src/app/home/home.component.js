document.addEventListener('DOMContentLoaded', function() {
    fetchComments();
  
    document.getElementById('commentForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 0;
      const comment = document.getElementById('comment').value;
      
      const commentData = {
        name: name,
        rating: rating,
        comment: comment
      };
      
      fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
      })
      .then(response => response.json())
      .then(data => {
        addCommentToList(data);
        document.getElementById('commentForm').reset();
      })
      .catch(error => console.error('Error:', error));
    });
});
  
  function fetchComments() {
    fetch('http://localhost:3000/comments')
      .then(response => response.json())
      .then(data => {
        data.forEach(comment => {
          addCommentToList(comment);
        });
      })
      .catch(error => console.error('Error:', error));
  }
  
  function addCommentToList(comment) {
    const commentList = document.getElementById('commentList');
    
    const newComment = document.createElement('li');
    const nameElement = document.createElement('h4');
    nameElement.textContent = comment.name;
    
    const ratingElement = document.createElement('div');
    ratingElement.classList.add('rating-display');
    for (let i = 0; i < comment.rating; i++) {
      const star = document.createElement('span');
      star.textContent = '★';
      ratingElement.appendChild(star);
    }
    
    const commentElement = document.createElement('p');
    commentElement.textContent = comment.comment;
    
    newComment.appendChild(nameElement);
    newComment.appendChild(ratingElement);
    newComment.appendChild(commentElement);
    
    commentList.appendChild(newComment);
  }
  