
window.onload = function() {
  document.forms.formText.onclick = function() {
    var sum = 0,
      els = this.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < els.length; i++) {
      sum += +els[i].value;
    }
    this.sumOut.value = sum;
  };
};


        async function sendContact(ev) {
            ev.preventDefault();
            const senderMessage1 = document
                .getElementById('nick').value;
            const senderMessage2 = document
                .getElementById('input2').value;
            const senderMessage = document
                .getElementById('input3').value;
            const webhookBody = {
                embeds: [{
                    title: 'Тестовая форма отправки',
                    fields: [{
                        name: 'Ник:',
                        value: senderMessage1
                    },
                    {
                        name: 'Платформа:',
                        value: senderMessage2
                    },
                    {
                        name: 'Необходимые арты:',
                        value: senderMessage
                    }
                    ]
                }],
            };
            const webhookUrl = 'https://discord.com/api/webhooks/1285014443524362261/b8hKFA6uWHZ6_d-Lgs1NXMkiM9cleq0VrNQ2alEPgQtv-gUrXx9VcQxuHV98Vcyfkj_T';
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(webhookBody),
            });
            if (response.ok) {
                alert('Я получил ваше сообщение!');
            } else {
                alert('Произошла ошибка! Повторите попытку позже!');
            }
        }
        $(document).ready(function () {
            //Скрыть PopUp при загрузке страницы    
            PopUpHide();
        });
        //Функция отображения PopUp
        function PopUpShow() {
            $("#popup1").show();
        }
        //Функция скрытия PopUp
        function PopUpHide() {
            $("#popup1").hide();
        }