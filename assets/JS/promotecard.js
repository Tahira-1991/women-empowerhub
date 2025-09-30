// Get references to filter, search, and modal elements
const categoryFilter = document.getElementById('categoryFilter');
const locationFilter = document.getElementById('locationFilter');
const ratingFilter = document.getElementById('ratingFilter');
const searchBar = document.getElementById('searchBar');
const businessListContainer = document.getElementById('business-list');
const noResultsMessage = document.getElementById('no-results-message');

const profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const profileCategory = document.getElementById('profile-category');
const profileRating = document.getElementById('profile-rating');
const profileDescription = document.getElementById('profile-description');
const profileBio = document.getElementById('profile-bio');
const profileMission = document.getElementById('profile-mission');
const profileContact = document.getElementById('profile-contact');

// Function to generate the star icons for a given rating
function generateStarHtml(rating) {
  let starHtml = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    starHtml += '<i class="bi bi-star-fill text-warning"></i>';
  }
  if (hasHalfStar) {
    starHtml += '<i class="bi bi-star-half text-warning"></i>';
  }
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starHtml += '<i class="bi bi-star text-warning"></i>';
  }
  return `<div class="d-flex align-items-center">${starHtml} <span class="ms-2 text-warning">${rating.toFixed(1)}</span></div>`;
}

// Function to render the businesses based on filters
function renderBusinesses() {
  const selectedCategory = categoryFilter.value;
  const selectedLocation = locationFilter.value;
  const minRating = parseFloat(ratingFilter.value);
  const searchTerm = searchBar.value.toLowerCase();
  
  // Clear the container first
  businessListContainer.innerHTML = '';
  let resultsFound = false;

  businesses.forEach((business, index) => {
    // Check if the business matches all filter criteria
    const categoryMatch = selectedCategory === 'all' || business.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || business.location === selectedLocation;
    const ratingMatch = business.rating >= minRating;
    const searchMatch = business.name.toLowerCase().includes(searchTerm) || business.description.toLowerCase().includes(searchTerm);
    
    // If all filters match, create the card and append it
    if (categoryMatch && locationMatch && ratingMatch && searchMatch) {
      resultsFound = true;
      const starRatingHtml = generateStarHtml(business.rating);
      
      const cardHtml = `
        <div class="col-md-6 col-xl-4 business-item" data-aos="fade-up" data-aos-delay="${index * 50}">
          <div class="card business-card h-100 shadow-sm">
            <img src="${business.image}" class="card-img-top object-fit-cover" alt="${business.name}" style="height:200px">
            <div class="card-body">
              <h5 class="card-title fw-semibold">${business.name}</h5>
              <p class="small mb-1">
                ${starRatingHtml}
              </p>
              <p class="card-text text-muted small">${business.description}
                <br><i class="bi bi-geo-alt-fill me-1 text-danger"></i>${business.location.charAt(0).toUpperCase() + business.location.slice(1)}, Pakistan
              </p>
              <button class="btn btn-outline-primary btn-sm mt-2 view-profile-btn" data-bs-toggle="modal" data-bs-target="#profileModal" data-index="${index}">View Profile</button>
            </div>
          </div>
        </div>
      `;
      businessListContainer.innerHTML += cardHtml;
    }
  });

  // Show or hide the "no results" message
  if (resultsFound) {
    noResultsMessage.classList.add('d-none');
  } else {
    noResultsMessage.classList.remove('d-none');
  }
}

// Function to handle showing the profile modal
function showProfile(event) {
  const index = event.target.dataset.index;
  const profile = fullProfiles[index];

  if (profile) {
    profileImage.src = profile.image;
    profileImage.alt = profile.name;
    profileName.textContent = profile.name;
    // Removed profileCategory and profileDescription from modal body
    profileRating.innerHTML = generateStarHtml(profile.rating);
    profileDescription.textContent = profile.description;
    profileBio.textContent = profile.bio;
    profileMission.textContent = profile.mission;
    profileContact.href = profile.contact;
    profileModal.show();
  }
}

// Add event listeners to the filters and search bar
categoryFilter.addEventListener('change', renderBusinesses);
locationFilter.addEventListener('change', renderBusinesses);
ratingFilter.addEventListener('change', renderBusinesses);
searchBar.addEventListener('input', renderBusinesses);

// Add event listener for the "View Profile" buttons
businessListContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('view-profile-btn')) {
    showProfile(event);
  }
});

// Run the filter on page load to set the initial state
document.addEventListener('DOMContentLoaded', renderBusinesses);