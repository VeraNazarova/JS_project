//Зона просмотра
const area_show = document.querySelector(".area_show");
//Селектор кнопка/ссылка
const select_type = document.querySelector('select');

//Поле ввода названия кнопки
const text_elem = document.getElementById('text_elem');

//Радио-баттон выбора цветовой схемы
const change_color = document.querySelectorAll('input[name="color_type"]');

//Активированный радио-баттон выбора цветовой схемы 
let color_type = document.querySelector('input[name="color_type"]:checked');

//Радио-баттон выбора заливки
const fillings = document.querySelectorAll('input[name="filling"]');

//Активный радио-баттон выбора заливки
let change_filling = document.querySelector('input[name="filling"]:checked');

//Радио-баттон выбора размера
const sizes = document.querySelectorAll('input[name="size_elem"]');

//Активный радио-баттон выбора размера
let change_size = document.querySelector('input[name="size_elem"]:checked');


//Событие селектора кнопка/ссылка
select_type.addEventListener("change", () => {

    //проверка наличия дочерних элементов
    if (area_show.childElementCount)
        area_show.children[0].remove();

    //Создает новый элемент
    elem = creatObject (select_type.value,
                        color_type.value,
                        change_filling.value,
                        change_size.value);
    area_show.insertAdjacentElement("afterBegin", elem);
})

//Создает элемент
function creatObject(tag, color, color_filling, size) {

    let new_elem = document.createElement(tag);

    //если поле ввода имени заполнено
    if (text_elem.value)
        elem.textContent = text_elem.value;
    //если поле ввода имени пустое
    else {
        switch (color) {
            case "primary": {
                new_elem.textContent = 'Подробнее';
                break;
            }
            case "cta": {
                new_elem.textContent = 'Заказать';
                break;
            }
            case "secondary": {
                new_elem.textContent = 'Далее';
                break;
            }
        }
    }
    new_elem.classList.add(color);
    new_elem.classList.add(color_filling);
    new_elem.classList.add(size);
    console.log(new_elem);
    return new_elem;
}


//обработка события смены цветовой схемы
for (let radio of change_color) {
    radio.addEventListener("input", () => {

        color_type = document.querySelector('input[name="color_type"]:checked');

        //если элемент уже создан, то добавляем ему класс
        if (area_show.childElementCount) {
            elem.classList.add(color_type.value);

            let color_classes = ['primary', 'cta', 'secondary'];
            let index = color_classes.indexOf(color_type.value);
            
            color_classes.splice(index, 1);

            console.log( color_classes);

            for (let color_class of elem.classList) {
                for (let color of color_classes) {
                    if (color_class == color)
                        elem.classList.remove(color_class);
                }
            }
        }
    })
}

//обработка события смены заливки
for (let radio of fillings)
{
    radio.addEventListener("input", () => {
        change_fillings= document.querySelector('input[name="filling"]:checked');

         //если элемент уже создан, то добавляем ему класс
         if (area_show.childElementCount) {
            elem.classList.add(change_fillings.value);

            let filling_classes = ['rect', 'white', 'gradient'];

            let index = filling_classes.indexOf(change_fillings.value);
            
            filling_classes.splice(index, 1);

        
            for (let class_elem of elem.classList) {
                for (let filling of filling_classes) {
                    if (class_elem == filling)
                        elem.classList.remove(filling);
                }
            }
        }
    })
}

//Обработчик события смены размера
for(let radio of sizes)
{
    radio.addEventListener("input", () => {
        change_sizes= document.querySelector('input[name="size_elem"]:checked');

         //если элемент уже создан, то добавляем ему класс
         if (area_show.childElementCount) {
            elem.classList.add(change_sizes.value);

            let size_classes = ['mobile', 'desctop'];

            let index = size_classes.indexOf(change_sizes.value);
            
            size_classes.splice(index, 1);

        
            for (let class_elem of elem.classList) {
                for (let size of size_classes) {
                    if (class_elem == size)
                        elem.classList.remove(class_elem);
                }
            }
        }
    })
}

