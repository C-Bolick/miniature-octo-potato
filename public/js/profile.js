// Function to fetch and display the user profile
const fetchUserProfile = async () => {
  try {
    const response = await fetch('/api/profile');
    if (response.ok) {
      const profile = await response.json();
      displayUserProfile(profile);
    } else {
      throw new Error('Failed to fetch user profile');
    }
  } catch (error) {
    console.error(error);
    // Handle error case, e.g., display an error message
  }
};

// Function to display the user profile data on the page
const displayUserProfile = (profile) => {
  const usernameElement = document.querySelector('.username');
  const nameElement = document.querySelector('.name');
  const emailElement = document.querySelector('.email');
  const locationElement = document.querySelector('.location');
  const bioElement = document.querySelector('.bio');

  usernameElement.textContent = profile.username;
  nameElement.textContent = profile.name;
  emailElement.textContent = profile.email;
  locationElement.textContent = profile.location;
  bioElement.textContent = profile.bio;
};

// Call fetchUserProfile when the page loads
window.addEventListener('DOMContentLoaded', fetchUserProfile);
  