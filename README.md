# task-2gis_books
Тестовое задание на React.js для 2gis

## Инструкции по запуску приложения:
1. Клонировать репозиторий - git clone
2. Установить зависимости  Node.js в каталог проекта - npm install
3. Запустить проект в dev режиме - npm start
4. Перейти в браузере на localhost:3000
### Собрать проект можно выполнив npm run build.

## Чек-лист:
* ~~Обязательно используй React.~~
Само собой.
* ~~Поддерживаемые браузеры — свежий Google Chrome (десктопный и мобильный).~~
Поддерживается всеми браузерами, которые "понимают" верстку на flexBox.
* ~~По ширине виджет должен тянуться от 480px до 1280px (в дизайнах показаны 480px).~~
* ~~Храни исходные данные так, чтобы их было просто заменить на другие.~~
 JSON файл books.json в каталоге /public/date легко заменить.
* ~~В табах должны быть счётчики, показывающие количество элементов в этом статусе до фильтрации по тегам.~~
* Текущий таб и выбранные фильтры должны попадать в URL и в историю, приложение должно открываться в состоянии, указанном в URL
Нужно более подробно изучить роутинг! См. последний пункт.
* ~~Между перезагрузками страницы должны сохраняться статусы книг~~
local storage подходит для таких дел.
* Книг может быть очень много. Мы сгенерировали 30000 книг — 30000-items.json. Хочется, чтобы даже при таком количестве книг приложение не тормозило.
Тут сложнее, нужно делать какой-то более "интелектуальный" контейнер, который будет подгружать новые книги в лист по мере скролла. Опять таки см. последний пункт.
* ~~Не трать больше четырёх часов на код — просто сделай в первую очередь те пункты, в которых ты силён. А по остальным пунктам можешь просто написать свои мысли, обсудим их на собеседовании.~~
Потрачено около 5 часов на написание, с пол часа на небольшой рефакторинг и еще чуть-чуть на написание этого README.md.

## Примечания от автора:
1. Я пытался уложитсья в 4 часа, так что код рефакторился минимально, методы, названия переменных, кое-какая логика - в процессе что-то
хотелось сделать по-другому, но для анализа хода мыслей - оставил как есть:)
2. Требований к сборке приложения не было, потому использую привычный create-react-app.
![Cкрин с компонентами](https://github.com/vodolazskikh/task-2gis_books/raw/master/public/components.png)
3. Структура такая - есть основной компонент App - внутри него находятся:
* components/AppTab **(1)** - кнопки переключения табов,
* components/AppFilter **(2)** -  панель с тегами, выполняющими роль фильтра,
* components/AppItem **(3)** - вкладка с информацией о книге.
Элементы в AppItem:
* components/ItemButton **(4)** - кнопка изменения "статуса" книги,
* components/ItemTag **(5)** - тэг для фильтрации (он же переиспользуется в компоненте AppFilter)
4. Каждый компонент вынесен в отдельную директорию, для каждого свой стиль. Возможно, сейчас это излишне, но для масштабируемого приложения,
я считаю, норм подход.
5. Компоненты пытался сделать максимально переиспользуемыми, однако, не предусмотрел, например, что для компонентов 2 и 3 можно было бы
сделать общего родителя-контейнера.
6. Фильтр по тэгам показывает книги, в которых есть хотя бы один из выбранных тегов, а не все вместе. Это не баг, а фича:)
7. Заранее **спасибо** за любую конструктивную критику и любой фидбэк. Прошу прощения, если букв много.
####  Водолазских Александр - vodolazskikh@yandex.ru - [ВК](http://vk.com/vodolazskikh_alexander)