console.log('Hello, world!');

let fs = require("fs");

// let file = fs.readFileSync('file.txt', 'utf8');

/* Чтение файла
let fileText = fs.readFile('file.txt', 'utf8', function(error, data){
    if (error) throw error;
    console.log(data);
});

let fileText = fs.writeFile('empty.txt', '', 'utf8', function(error) {
    if (error) throw error;
    console.log('All is ok!');
});


let fileText = fs.appendFile('new.txt', '\nok!', 'utf8', function(error) {
    if (error) throw error;
    console.log('All is ok!');
}); // создание файла и ДОзапись в файл

*/

// 1. Создать файл stepen.txt . Внутрь документа записать какое-нибудь число.
// 2. Написать программу, которая считывает содержимое файла. 
// 3. Считанное из файла возвести в квадрат
// 4. Результат записать в новый файл result.txt. 
// 5. Вывести в консоль 'All is ok!' после выполнения программы.
// 6. Также записать число в 3й степени в исходный документ на новой строке

/*
let fileText = fs.readFile('stepen.txt', 'utf8', function(error, data){
    if (error) throw error;
    console.log(data);
    return data
    let a = Number(data)
    let s = a*a
    let d = fs.appendFile('result.txt', String(s),function(){
        console.log('ok')
    })
});
*/

// fs.access('empty1.txt', function(error) {
//     if (error) {
//         console.log('Файл не существует')
//     } else {
//         console.log('Файл существует');
//     }
// });

// 1. Удалить файл result.txt с помощью метода fs.unlink.
// 2. Создать в вашей папке еще одну подпапку, назвать test.
// 3. В папке test добавить еще одну папку и два файла формата .txt . Названия любые.
// 4. С помощью метода fs.readdir считать все файлы и папки из test. Вывести результат в консоль.





// fs.unlink('result.txt', function(error){
//     if (error){
//         console.log('Chitoto est')
//     }else{
//         console.log('Chitoto_2 net')
//     }
// })

// fs.readdir('test', (error, files) => {
//     if (error) throw error;
//     // console.log(files)
//     for (elem of files) {
//         // console.log(elem);
//         if (elem.indexOf('.', 0) < 0) {
//             console.log(elem + ' - это папка')
//         }
//         else {
//             console.log(elem + ' - это, возможно, файл')
//         }
//     };
// }
// );
// 1. Написать программу, которая считывает все файлы из папки. Если у файла расширение .txt, то нужно считать содержимое файла и вывести его в консоль.
// Подсказка: можно искать не только отдельный символ в строке, но и группу символов.

dir = 'test'

// fs.readdir(dir, (error, files) => {
//     if (error) throw error;

//     for (elem of files) {
//         path = dir + '\\' + elem
//         if (elem.indexOf('.txt', 0) >= 0) {
//             fs.readFile(path, (err, data) => {
//                 console.log(data);
//             })
//         }
        
//     };
// });
dir = 'test'
// fs.readdir(dir, (error, files)=> {
//     for (let elem of files) {
//         path = dir + '\\' + elem;
//         console.log(path)
//         fs.stat(path, (err, stats) => {
//             if (!stats.isDirectory()) {
//                 console.log(elem)
//             }
//         })
        
//     }
// })
// 2. написать программу, которая считывает все папки внутри папки test. Вывести на экран все названия папок.

fs.readdir('test', (error, files) => {
    for (let elem of files){
        path = dir + '\\' + elem;
        fs.stat(path, (err, stats) => {
            if (stats.isDirectory()){
                console.log(elem);
                fs.unlink(path, () => {
                    console.log('АААААААААААААААААААААААНИГИЛЯТОРНАЯ ПУШКА')
                })
            }
            
        })
    }
})

// 3. Дополнить предыдущую программу. Удалить все файлы, которые НЕ являются папками. Посмотрите метод 
// fs.unlink , если забыли как удалять

// *. Написать программу по описанию:
//     в некоторой папке лежит группа файлов формата .txt . Каждый файл подписан названиями времен года. Внутри файла через пробел записаны месяцы, которые входят в это время года (например в файле "Зима.txt" записан текст "Декабрь Январь Февраль").
//     Считать содержимое всех файлов и сформировать многомерный массив формата:
//     [ 
//         ['Январь', 'Декабрь', 'Февраль'],['Март', 'Апрель', 'Май'],['Июнь', 'Июль', 'Август'],['Сентябрь', 'Октябрь', 'Ноябрь'],
//     ]
//     * Сформируйте ассоциативный массив (объект), вместо списка