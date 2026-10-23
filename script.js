document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const naam = document.getElementById("naam").value;
      const vak = document.getElementById("vak").value;

      // Kullanıcıya teşekkür bildirimi göster
      feedback.style.color = "#10B981";
      feedback.innerHTML = `Hartelijk dank, <strong>${naam}</strong>! Uw aanvraag voor <strong>${vak}</strong> is succesvol ontvangen. We nemen spoedig contact met u op.`;

      // Formu temizle
      form.reset();
    });
  }
});