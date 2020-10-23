const filter = document.querySelector('#filter');
const redirect = document.querySelector('.content');

loadEventListeners();

function loadEventListeners() {
  filter.addEventListener('keyup', filterQuestion);
  redirect.addEventListener('click', form);
}

function filterQuestion(e) {
  const text = e.target.value.toLowerCase();

  // forEach works because it is array
  document.querySelectorAll('.card2').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })

  console.log(text);
}

function form() {
  location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=owPtDy1AM0aozYswiCIlPhzoeU7LPHhNhRpHtuyY6b9UM0RVWE1OTFA5MEdNS01BNzhaTVI0SVpMRy4u'
}

// var div = document.createElement('div');

// div.className = 'entry';

// var button = document.createElement('button')

// button.setAttribute('type', 'button');

// button.className = 'cancel';

// button.appendChild(document.createTextNode('X'))

// div.appendChild(button)

// div.appendChild(document.createTextNode('Hosted by GROUP-15'));

// document.querySelector('#background').appendChild(div);

// $(button).on('click', function () {
//   div.remove();
// })