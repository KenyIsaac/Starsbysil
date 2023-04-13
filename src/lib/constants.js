export const contactInputs = [
  {
    pattern: '^[-_ a-zA-Z0-9ğüşöçİĞÜŞÖÇ]{4,100}$',
    label: 'Nombre y apellido',
    type: 'text',
    key: 1,
    name: 'name_surname',
    message: 'Ingrese su nombre completo',
    placeholder: 'Por favor, ingrese su nombre y apellido completos.',
    required: true
  },
  {
    pattern: '^(?:\\+|00)90\\d{10}$|^0\\d{10}$',
    label: 'Número de teléfono',
    type: 'text',
    key: 2,
    name: 'phone_number',
    message: 'Ingrese solo números',
    placeholder: 'Número de contacto',
    required: true,
    maxLength: 13,
    inputmode: 'numeric'
  },
  {
    label: 'Mensaje',
    type: 'textarea',
    key: 3,
    name: 'message',
    message: 'Ingrese el mensaje.',
    placeholder: 'Por favor, ingrese el mensaje que nos quiere hacer llegar.',
    required: false
  }
];

export const animations = {
  slideLeft: 'translateX(20%)',
  slideRight: 'translateX(-20%)',
  slideDown: 'translateY(-20%)',
  slideUp: 'translateY(20%)'
};