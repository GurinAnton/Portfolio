const formRows = document.querySelectorAll(".form-content__input");
const formRowsInputs = document.querySelectorAll(".input");

for (let i = 0; i < formRows.length; i++) {
  formRows[i].addEventListener("click", function () {
    const placeholderElement = this.querySelector(".fake-placeholder");
    placeholderElement.classList.add("active");
  });
}

for (let i = 0; i < formRowsInputs.length; i++) {
  formRowsInputs[i].addEventListener("blur", function () {
    const thisParent = this.parentElement;

    if (this.value == "") {
      thisParent.querySelector("span").classList.remove("active");
    }
  });
}

jQuery(document).ready(function ($) {
  $.iMissYou({
    title: "I Miss you !",
    favicon: {
      enabled: true,
      src: "./img/iMissYouFavicon.ico",
    },
  });
});

const mobileMenu = document.querySelector("#nav");
const mobileMenuBtn = document.querySelector("#menu-toggle input");

mobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
});

$(document).ready(function () {
  // NAV PAGE
  $("#page-nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
    begin: function () {},
    end: function () {},
    scrollChange: function ($currentListItem) {},
  });

  $("#portfolio-projects").mixItUp();

  // let allHideWorks = $("hide-work");

  //FORM VALIDATE
  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      theme: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "Введите email",
        email: "отсутсвует символ @",
      },
      theme: {
        required: "Введите тему сообщения",
      },
      message: {
        required: "Введите текст сообщения",
      },
    },
    submitHandler: function (form) {
      ajaxFormSubmit();
    },
  });

  // Функция AJAX запрса на сервер

  function ajaxFormSubmit() {
    let string = $("#form").serialize(); // Соханяем данные введенные в форму в строку.

    //Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function (html) {
        $("#form").slideUp(800);
        $("#answer").html(html);
      },
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  }
});

// ANIMATED
$(window).scroll(function () {
  $(".mov").each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("tada");
    }
  });
});
// $(window).scroll(function () {
//   $(".mov2").each(function () {
//     var imagePos = $(this).offset().top;
//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 500) {
//       $(this).addClass("fadeInLeft");
//     }
//   });
// });
// $(window).scroll(function () {
//   $(".mov3").each(function () {
//     var imagePos = $(this).offset().top;
//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 500) {
//       $(this).addClass("fadeInRight");
//     }
//   });
// });
// $(window).scroll(function () {
//   $(".mov4").each(function () {
//     var imagePos = $(this).offset().top;
//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 500) {
//       $(this).addClass("fadeInLeft");
//     }
//   });
// });
// $(window).scroll(function () {
//   $(".mov5").each(function () {
//     var imagePos = $(this).offset().top;
//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 500) {
//       $(this).addClass("fadeInRight");
//     }
//   });
// });
