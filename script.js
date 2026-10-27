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

      // Yeni gönderim başlarken bildirim kutusunu temizle ve gizle
      if (feedback) {
        feedback.innerText = "";
        feedback.style.display = "none";
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
            feedback.style.display = "block";
            feedback.style.backgroundColor = "#ecfdf5";
            feedback.style.borderColor = "#a7f3d0";
            feedback.style.color = "#065f46";
            feedback.innerText =
              "Bedankt voor je aanmelding! We nemen binnen 24 uur contact met je op.";
          }
          form.reset();

          // 5 saniye sonra yeşil kutuyu otomatik gizle
          setTimeout(() => {
            if (feedback) {
              feedback.style.display = "none";
            }
          }, 5000);
        } else {
          if (feedback) {
            feedback.style.display = "block";
            feedback.style.backgroundColor = "#fef2f2";
            feedback.style.borderColor = "#fecaca";
            feedback.style.color = "#991b1b";
            feedback.innerText =
              "Er is iets misgegaan. Probeer het later opnieuw.";
          }
        }
      } catch (error) {
        if (feedback) {
          feedback.style.display = "block";
          feedback.style.backgroundColor = "#fef2f2";
          feedback.style.borderColor = "#fecaca";
          feedback.style.color = "#991b1b";
          feedback.innerText =
            "Er is een verbindingsfout opgetreden. Probeer het later opnieuw.";
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
