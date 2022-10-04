async function editFormHandler(event) {
    event.preventDefault();

    const userReview = document.querySelector('#book-review').value;
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
  
    const response = await fetch(`/api/review/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        userReview,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/book/${id}`);
    } else {
      alert('Failed add review');
    }
  }
  
  document.querySelector('.review-form').addEventListener('submit', editFormHandler);