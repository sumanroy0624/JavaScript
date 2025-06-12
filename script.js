document.getElementById('workExperienceAdd').addEventListener('click', () => {
  const newNode = document.createElement('textarea');
  newNode.classList.add('form-control', 'weField', 'mt-2');
  newNode.setAttribute('rows', 3);
  newNode.setAttribute('placeholder', 'Enter here');
  document.getElementById('workExperience').insertBefore(newNode, document.getElementById('weAddButton'));
});

document.getElementById('academicQualificationAddButton').addEventListener('click', () => {
  const newNode = document.createElement('textarea');
  newNode.classList.add('form-control', 'aqField', 'mt-2');
  newNode.setAttribute('rows', 3);
  newNode.setAttribute('placeholder', 'Enter here');
  document.getElementById('academicQualication').insertBefore(newNode, document.getElementById('aqAddButton'));
});

function generateCV() {
  document.getElementById('nameT1').innerText = document.getElementById('nameField').value;
  document.getElementById('nameT2').innerText = document.getElementById('nameField').value;
  document.getElementById('contactT').innerText = document.getElementById('contactField').value;
  document.getElementById('addressT').innerText = document.getElementById('addressField').value;

  document.getElementById('fbT').href = document.getElementById('fbField').value;
  document.getElementById('instagramT').href = document.getElementById('instaField').value;
  document.getElementById('linkedinT').href = document.getElementById('linkedinField').value;

  document.getElementById('objectiveT').innerText = document.getElementById('objective').value;

  let weFields = document.getElementsByClassName('weField');
  let weList = '';
  for (let e of weFields) {
    if (e.value.trim()) weList += `<li>${e.value}</li>`;
  }
  document.getElementById('workExerienceT').innerHTML = weList;

  let aqFields = document.getElementsByClassName('aqField');
  let aqList = '';
  for (let e of aqFields) {
    if (e.value.trim()) aqList += `<li>${e.value}</li>`;
  }
  document.getElementById('academicQualificationT').innerHTML = aqList;

  // image
  let file = document.getElementById('profile-picture').files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    document.getElementById('imageT').src = reader.result;
  }

  document.getElementById('cv-form').style.display = 'none';
  document.getElementById('cv-template').style.display = 'block';
}

function BackButton() {
  document.getElementById('cv-form').style.display = 'block';
  document.getElementById('cv-template').style.display = 'none';
}

function printCV() {
  document.getElementById('printCVBtn').style.display = 'none';
  document.getElementById('back-btn').style.display = 'none';
  window.print();
}
