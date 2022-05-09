
const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector("#user_signup").value.trim();
    const password = document.querySelector("#pass_signup").value.trim();
    
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);