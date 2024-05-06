const validarFormulario = (seleccionarForm) => {
  const elementoForm = document.querySelector(seleccionarForm);

  const validarOpciones = [
    {
      attribute: 'required',
      esValido: (input) => input.value.trim() !== '',
      mensajeError: (label) => `${label.textContent} es requerido`,
    },
  ];

  const validarIndividual = (grupoForm) => {
    const label = grupoForm.querySelector('label');
    const input = grupoForm.querySelector('input');
    const errorContainer = grupoForm.querySelector('.error');
    const successIcon = grupoForm.querySelector('.success-icon');
    const errorIcon = grupoForm.querySelector('.error-icon');

    for (const option of validarOpciones) {
      if (input.hasAttribute(option.attribute) && !option.esValido(input)) {
        errorContainer.innerText = option.mensajeError(label);
        errorIcon.classList.remove('hidden');
        successIcon.classList.add('hidden');
      }
    }
  };

  elementoForm.setAttribute('novalidate', '');

  elementoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validarGruposFormulario(elementoForm);
  });

  const validarGruposFormulario = (formAValidar) => {
    const gruposForm = Array.from(formAValidar.querySelectorAll('.grupoForm'));

    gruposForm.forEach((grupoForm) => {
      validarIndividual(grupoForm);
    });
  };
};

validarFormulario('#formulario-registrar');
