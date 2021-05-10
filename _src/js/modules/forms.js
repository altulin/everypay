
const validateEmail = (email) => {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};
const formList = Array.from(document.querySelectorAll(`.valid`));
const elems = Array.from(document.querySelectorAll(`.val-elem`));



const validate = (e) => {
  let valid_flag = false;
  e.preventDefault();
  const form = e.target;
  const val_elems = Array.from(form.querySelectorAll(`.val-elem`))

  val_elems.map((item) => {
    if (item.matches(`.val-elem--email`)) {
      const email = item.value

      if (validateEmail(email)) {
        valid_flag = true
      }
    }

    if (valid_flag) {

      sendForm(form);
    } else {
      form.classList.add(`not-valid`)
    }
  });
};

const success = (form) => {
  form.querySelector(`.form-simple__banner`).classList.add(`success`)
};

const sendForm = (form) => {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://httpbin.org/anything', true);
  request.addEventListener('readystatechange', function () {
    if ((request.readyState == 4) && (request.status == 200)) {
      success(form);
    }
  });
  request.send();
};


// reset err
export const resetErr = (formList) => {
  elems.map((item) => {
    item.addEventListener(`click`, () => {
      formList.map((elem) => elem.classList.remove(`not-valid`))
    })
  })
};


export const submitForm = () => {
  if (formList.length > 0) {
    resetErr(formList)
    formList.map((item) => {
      item.addEventListener(`submit`, (e) => {
        validate(e);
      })
    })
  }
};
