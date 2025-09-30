
    // --- FUNCTION TO RENDER MENTORS ---
    function renderMentors() {
        const mentorList = document.getElementById('mentorList');
        if (!mentorList) return; 

        let html = '';
        
        // Loop through the data and build the HTML string
        mentors.forEach((mentor, index) => { // Use index for identifying the mentor
            // Placeholder URL generation using specific background color from data
            const imageUrl = `https://placehold.co/200x200/${mentor.imageBg}/7b4397?text=${mentor.imageText}`;

            html += `
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${mentor.delay}">
                    <div class="card mentor-profile-card shadow-sm h-100">
                        <div class="row g-0">
                            <div class="col-4">
                                <img src="${imageUrl}" class="img-fluid rounded-start h-100 object-fit-cover" alt="Mentor - ${mentor.name}">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">${mentor.name}</h5>
                                    <p class="card-text text-muted small">${mentor.specialty}</p>
                                    <!-- UPDATED: Call openBookingModal with the mentor's index -->
                                    <a href="#" class="btn btn-gold btn-sm mt-2" onclick="event.preventDefault(); openBookingModal(${index});">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // Insert the generated HTML into the container
        mentorList.innerHTML = html;
    }

    // --- FUNCTION TO OPEN BOOKING MODAL ---
    function openBookingModal(index) {
        const mentor = mentors[index];
        if (!mentor) {
            console.error("Mentor data not found for index:", index);
            return;
        }

        // Populate Modal Fields
        document.getElementById('mentorNameModal').textContent = mentor.name;
        document.getElementById('mentorSpecialtyModal').textContent = mentor.specialty;
        document.getElementById('mentorPriceModal').textContent = mentor.price;
        document.getElementById('mentorSlotsModal').textContent = mentor.availableSlots;
        document.getElementById('mentorBioModal').textContent = mentor.bio;
        
        // Image URL (using the same placeholder logic)
        const imageUrl = `https://placehold.co/200x200/${mentor.imageBg}/7b4397?text=${mentor.imageText}`;
        document.getElementById('mentorImageModal').src = imageUrl;

        // Reset button and message state every time the modal is opened
        const bookingBtn = document.getElementById('proceedBookingBtn');
        const bookingMessage = document.getElementById('bookingMessage');

        bookingBtn.textContent = 'Proceed to Calendar Booking';
        bookingBtn.disabled = false;
        if (bookingMessage) {
            bookingMessage.classList.add('d-none'); // Hide message initially
        }
        
        // Show the modal
        const modalElement = document.getElementById('bookingModal');
        const bookingModal = new bootstrap.Modal(modalElement);
        bookingModal.show();
    }

    // --- UPDATED: FUNCTION TO HANDLE FINAL BOOKING CLICK (No Console Log) ---
    function handleCalendarBooking(buttonElement) {
        const originalText = buttonElement.textContent;
        const bookingMessage = document.getElementById('bookingMessage');
        const modalElement = document.getElementById('bookingModal');
        
        // Clear previous messages and ensure it's hidden
        if (bookingMessage) {
            bookingMessage.classList.add('d-none');
        }

        // 1. Show processing state
        buttonElement.textContent = 'Redirecting...';
        buttonElement.disabled = true;

        // 2. Simulate successful navigation/redirection after a short delay
        setTimeout(() => {
            // Show the success/redirection message visually
            if (bookingMessage) {
                bookingMessage.classList.remove('d-none');
            }
            
            // 3. Close the modal after a short delay, simulating that the user has been redirected
            setTimeout(() => {
                // Use the getInstance method to safely retrieve the Bootstrap modal object
                const bookingModal = bootstrap.Modal.getInstance(modalElement);
                if (bookingModal) {
                    bookingModal.hide(); // Hide the modal
                }
                
                // Reset button state for the next time the modal is opened
                buttonElement.textContent = originalText;
                buttonElement.disabled = false;

            }, 2500); // Show message for 2.5 seconds before closing

        }, 500); // Wait 0.5 seconds before showing the message
    }
    
    // Call the render function once the DOM is ready
    window.onload = renderMentors; 