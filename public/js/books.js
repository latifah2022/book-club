async function editFormHandler(event) {
    event.preventDefault();
    const  book_name = document.querySelector('#book_name').value;
    const description = document.querySelector('#description').value;
    const user_name = document.querySelector('#user_name').value;
    

  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
  
    const response = await fetch(`/api/review/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        description,
        user_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.push(`/review/${id}`);
    } else {
      alert('Failed add review');
    }
  }
  
  document.querySelector('.add-books-form').addEventListener('submit', editFormHandler);