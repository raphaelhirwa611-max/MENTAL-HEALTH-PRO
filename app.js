const addictionCards = document.querySelectorAll('.addiction-card');
const focusLabel = document.getElementById('focusLabel');
const planButton = document.getElementById('planButton');
const planList = document.getElementById('planList');

const contactInfo = {
  email: 'raphaelhirwa611@gmail.com',
  whatsapp: '0798623350',
  whatsappLink: 'https://wa.me/254798623350'
};

const aboutEmail = document.getElementById('aboutEmail');
const aboutWhatsapp = document.getElementById('aboutWhatsapp');

if (aboutEmail) {
  aboutEmail.href = `mailto:${contactInfo.email}`;
  aboutEmail.textContent = contactInfo.email;
}

if (aboutWhatsapp) {
  aboutWhatsapp.href = contactInfo.whatsappLink;
  aboutWhatsapp.textContent = `WhatsApp: ${contactInfo.whatsapp}`;
}

const plans = {
  Alcohol: [
    'Stop all access to alcohol and reduce triggers in your environment.',
    'Build a daily structure with exercise, prayer, and meaningful activity.',
    'Create accountability with a trusted person and honest check-ins.',
    'Replace your drinking habit with healthy routines and stable rest.',
    'Track your wins daily and celebrate every stage of recovery.'
  ],
  Telephone: [
    'Set strict boundaries on phone use and turn off addictive apps.',
    'Remove your device from your bedroom and focus zone during recovery.',
    'Replace scrolling with reading, journaling, exercise, or prayer.',
    'Protect your time so you can rebuild focus, productivity, and peace.',
    'Check your digital habits daily and stay accountable to your goals.'
  ],
  Porn: [
    'Block access to triggering content and remove unsafe habits from your environment.',
    'Speak openly with a counselor or mentor instead of hiding the struggle.',
    'Use discipline, prayer, and daily structure to reset your mind.',
    'Replace shame with honest reflection and healthier emotional habits.',
    'Stay accountable and continue strengthening your self-control.'
  ],
  Masturbation: [
    'Remove triggers and protect your space from repeated temptation.',
    'Build a disciplined daily plan with exercise, prayer, and healthy routines.',
    'Focus on emotional healing and inner control instead of shame.',
    'Use accountability and healthy habits to regain confidence and balance.',
    'Stay consistent and trust the process of rebuilding a stronger life.'
  ]
};

let selectedAddiction = 'Alcohol';

addictionCards.forEach((card) => {
  card.addEventListener('click', () => {
    addictionCards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    selectedAddiction = card.dataset.addiction;
    focusLabel.textContent = selectedAddiction;
  });
});

planButton.addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim() || 'Friend';
  const age = document.getElementById('ageInput').value || 'your age';
  const stage = document.getElementById('stageInput').value;
  const support = document.getElementById('supportInput').value;

  const items = plans[selectedAddiction]
    .map((point) => `<li>${point}</li>`)
    .join('');

  planList.innerHTML = `
    <li>${name}, you are facing a serious challenge, but recovery is possible.</li>
    <li>Your current stage is: ${stage}.</li>
    <li>Your support style is: ${support}.</li>
    <li>Your recovery focus is ${selectedAddiction.toLowerCase()} and rebuilding stability.</li>
    ${items}
  `;
});
