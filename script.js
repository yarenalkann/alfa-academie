document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  const submitBtn = document.getElementById("formSubmitBtn");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Verzenden...";
      }
      if (feedback) {
        feedback.innerText = "";
        feedback.style.color = "#1E293B";
      }

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/mgaavokn", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          if (feedback) {
            feedback.style.color = "#10B981";
            feedback.innerText = "Bedankt voor je aanmelding! We nemen binnen 24 uur contact met je op.";
          }
          form.reset();
        } else {
          if (feedback) {
            feedback.style.color = "#EF4444";
            feedback.innerText = "Er is iets misgegaan. Probeer het later opnieuw.";
          }
        }
      } catch (error) {
        if (feedback) {
          feedback.style.color = "#EF4444";
          feedback.innerText = "Er is een verbindingsfout opgetreden. Probeer het later opnieuw.";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = "Aanmelding Versturen";
        }
      }
    });
  }
});