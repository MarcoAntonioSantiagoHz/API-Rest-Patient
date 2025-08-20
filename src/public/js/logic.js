document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // evita el submit normal

    const action = form.action;
    const method = form.querySelector('[name="_method"]') 
                   ? form.querySelector('[name="_method"]').value 
                   : form.method;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(action, { 
        method: method.toUpperCase(),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      // Redirige a la lista
      window.location.href = '/';
    } catch (err) {
      console.error('Error enviando el formulario:', err);
    }
  });
});
