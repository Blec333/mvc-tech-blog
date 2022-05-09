async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector("#blog_title").value;
    const contents = document.querySelector("#blog_contents").value;
    
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({
        title,
        contents,
        
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.ok) {
      document.location.replace("/dashboard/blogs");
    } else {
      alert("Failed to add a new blog");
    }
  }
  
  document.querySelector(".new-blog-form").addEventListener("submit", newFormHandler);