

// Function to display temporary messages

function showMessage(msg, duration = 2000, color = '#2ecc71') {
  const div = document.createElement('div');
  div.textContent = msg;
  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.right = '20px';
  div.style.background = color;
  div.style.color = 'white';
  div.style.padding = '10px 20px';
  div.style.borderRadius = '6px';
  div.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  div.style.zIndex = 9999;

  document.body.appendChild(div);

  setTimeout(() => div.remove(), duration);
}

// Form management (Create and Edit)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // avoid ev submit normal

    const action = form.action;
    const method = form.querySelector('[name="_method"]')
      ? form.querySelector('[name="_method"]').value
      : form.method;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(action, {
        method: method.toUpperCase(),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok) {
        //  If the backend returns a duplicate
        if (res.status === 400 && result.message === "Register duplicate") {
          showMessage("Ese paciente ya existe!", 3000, '#e74c3c'); // red for error
        } else {
          showMessage(result.message || 'Error al procesar la acción ❌', 3000, '#e74c3c');
        }

        // Refresh the page after displaying the error.
        setTimeout(() => {
          window.location.reload();
        }, 2000); // <- Here, wait 3 seconds and then refresh the page if there was an error or duplicate patient.

        return;
      }

      // Success message
      showMessage(result.message || 'Paciente creado correctamente ✅', 2000, '#2ecc71');

      // Redirect to the index showing the updated data
      setTimeout(() => {
        window.location.href = '/';
      }, 800); // <-- Here, it waits for 1 second and then redirects to the index, displaying the updated list of patients. 0.8 milliseconds

    } catch (err) {
      console.error('Error enviando el formulario:', err);
      showMessage('Error al procesar la acción ❌', 3000, '#e74c3c');

      // Refresh the page if there is a communication error.
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  });
});
