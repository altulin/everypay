import { createListenerModal } from './modal.js';
const validateEmail = (email) => {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};
const formList = Array.from(document.querySelectorAll(`.valid`));
const elems = Array.from(document.querySelectorAll(`.val-elem`));
const form_big_el = Array.from(document.querySelector(`.form-big`).querySelectorAll(`.val-elem`))


const validate = (e) => {
  let valid_flag = false;

  let email_flag = false;
  let name_flag = false;
  let text_flag = false;
  e.preventDefault();
  const form = e.target;
  const val_elems = Array.from(form.querySelectorAll(`.val-elem`))

  if (form.matches(`.form-simple`)) {
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
  }


  if (form.matches(`.form-big`)) {
    val_elems.map((item) => {
      if (item.matches(`.val-elem--email`)) {
        if (validateEmail(item.value)) {
          email_flag = true
        } else {
          item.classList.add(`not-val`)
        }
      }

      if (item.matches(`.val-elem--name`)) {
        // console.log(item.value.length)
        if (item.value.length > 0) {
          name_flag = true
        } else {
          item.classList.add(`not-val`)
        }
      }

      if (item.matches(`.val-elem--textarea`)) {
        if (item.value.length > 0) {
          text_flag = true
        } else {
          item.classList.add(`not-val`)
        }
      }

      if (email_flag && name_flag && text_flag) {
        sendForm(form);
      } else {
        form.classList.add(`not-valid`)
      }
    })
  }
};

const success = (form) => {
  try {
    form.querySelector(`.form-simple__banner`).classList.add(`success`)
  } catch { }

  if (form.matches(`.form-big`)) {
    createListenerModal()
    MicroModal.show('modal-1');

  }
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

  // const val_el = form_big.querySelector
  form_big_el.map((el) => {
    el.addEventListener(`click`, () => {
      form_big_el.map((n) => n.classList.remove(`not-val`))
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
