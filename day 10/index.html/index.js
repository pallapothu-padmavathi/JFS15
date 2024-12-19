// Function to fetch GitHub user data
function getGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`User not found: ${response.status}`);
        }
        return response.json(); 
      })
      .then(userData => {
        console.log("User data:", userData);
        displayUser(userData);  
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }
  
  getGitHubUser("Ankit7rma");
   