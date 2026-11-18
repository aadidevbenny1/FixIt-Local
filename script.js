/*
  FixIt Local - Shared JavaScript File
  Authors: Team Binary Brains (CSE326 Project, Section K3P26YK)
  Project: Local Service Complaint Marketplace
  Description: Provides search filtering for providers and handles new complaint submissions.
*/

// Feature 1: Filter provider table rows based on user search query
function filterProviders() {
  // Step 1: Get the search input element and read its value in lower case
  const searchElement = document.getElementById("provider-search-input");
  const searchQuery = searchElement.value.toLowerCase();

  // Step 2: Define array of row element IDs for all five service providers
  const providerRowIds = [
    "row-water",
    "row-electric",
    "row-waste",
    "row-plumbing",
    "row-broadband"
  ];

  // Step 3: Loop through each row and check if row text matches the search query
  for (let i = 0; i < providerRowIds.length; i = i + 1) {
    const row = document.getElementById(providerRowIds[i]);
    if (row) {
      // Get the full HTML text of the table row in lower case
      const rowContent = row.innerHTML.toLowerCase();

      // Check if search query appears anywhere in the row text
      if (rowContent.indexOf(searchQuery) !== -1) {
        // Show row if it matches
        row.style.display = "";
      } else {
        // Hide row if it does not match
        row.style.display = "none";
      }
    }
  }
}

// Feature 2: Handle complaint form submission and display pending moderation card
function handleComplaintSubmit() {
  // Step 1: Read all form input elements by their ID
  const titleInput = document.getElementById("complaint-title");
  const providerInput = document.getElementById("complaint-provider");
  const categoryInput = document.getElementById("complaint-category");
  const dateInput = document.getElementById("complaint-date");
  const detailsInput = document.getElementById("complaint-details");
  const emailInput = document.getElementById("complaint-email");
  const confirmCheckbox = document.getElementById("complaint-confirm");

  // Step 2: Check if confirmation checkbox is checked
  if (!confirmCheckbox.checked) {
    alert("Please check the confirmation box to certify your complaint.");
    return;
  }

  // Step 3: Extract values entered by the user
  const complaintTitle = titleInput.value;
  const providerName = providerInput.value;
  const categoryName = categoryInput.value;
  const dateLogged = dateInput.value;
  const complaintDetails = detailsInput.value;

  // Step 4: Simple validation check for required text inputs
  if (complaintTitle === "" || providerName === "" || categoryName === "" || dateLogged === "" || complaintDetails === "") {
    alert("Please fill in all required fields before submitting.");
    return;
  }

  // Step 5: Get preview section and card container elements
  const previewSection = document.getElementById("submission-preview-section");
  const previewCard = document.getElementById("submission-preview-card");

  // Step 6: Build the HTML markup for the new complaint card with Pending status
  const cardMarkup =
    '<article class="complaint-card">' +
    '<h3>' + complaintTitle + '</h3>' +
    '<mark class="status-badge status-pending">Pending Moderation</mark>' +
    '<dl class="complaint-meta">' +
    '<dt>Provider:</dt><dd>' + providerName + '</dd>' +
    '<dt>Category:</dt><dd>' + categoryName + '</dd>' +
    '<dt>Date Logged:</dt><dd><time>' + dateLogged + '</time></dd>' +
    '</dl>' +
    '<p>' + complaintDetails + '</p>' +
    '<p><small><strong>Ticket Status:</strong> Assigned ID #FX-508. This complaint is in the moderation queue and will appear publicly once verified by our community managers (Sample Data).</small></p>' +
    '</article>';

  // Step 7: Inject the card into the preview container and make the section visible
  previewCard.innerHTML = cardMarkup;
  previewSection.style.display = "block";

  // Step 8: Show a popup notification to confirm submission
  alert("Thank you! Your complaint has been submitted and is now Pending Moderation.");

  // Step 9: Reset input fields to clear the form
  titleInput.value = "";
  providerInput.value = "";
  categoryInput.value = "";
  dateInput.value = "";
  detailsInput.value = "";
  emailInput.value = "";
  confirmCheckbox.checked = false;
}
