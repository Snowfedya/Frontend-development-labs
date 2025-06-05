<?php
// КОНФИГУРАЦИЯ
// -----------------------------------------------------------------------------
// Базовый путь, относительно которого будут искаться папки лабораторных.
// '.' означает текущую директорию, где находится этот index.php
$base_path = '.';

// Определяем пути к HTML-файлам для каждой лабораторной работы.
// Ключ массива используется для заголовка секции.
$labs_config = [
    'lab1' => 'lab1/html', // HTML-файлы для Лабораторной 1 находятся в lab1/html/
    'lab2' => 'lab2/html', // HTML-файлы для Лабораторной 2 находятся в lab2/html/
    'lab3' => 'lab3',      // HTML-файлы для Лабораторной 3 находятся непосредственно в lab3/
    'lab4' => 'lab4',      // HTML-файлы для Лабораторной 4 находятся непосредственно в lab4/
    'lab5' => 'lab5'       // HTML-файлы для Лабораторной 5 находятся непосредственно в lab5/
];

// Названия для разделов лабораторных работ
$lab_titles = [
    'lab1' => 'Лабораторная работа 1',
    'lab2' => 'Лабораторная работа 2',
    'lab3' => 'Лабораторная работа 3',
    'lab4' => 'Лабораторная работа 4',
    'lab5' => 'Лабораторная работа 5',
];

// Список файлов, которые нужно игнорировать при сканировании (например, сам этот индексный файл)
$ignore_files = ['index.php', 'index.html']; // Добавьте другие файлы при необходимости

// ФУНКЦИЯ ДЛЯ ФОРМАТИРОВАНИЯ ИМЕНИ ССЫЛКИ
// -----------------------------------------------------------------------------
/**
 * Создает "красивое" имя для ссылки из имени файла.
 * Например, "1_simple_page.html" превратится в "1 Simple Page".
 * @param string $filename Имя файла (например, "1_simple_page.html")
 * @return string Отформатированное имя
 */
function get_pretty_link_name($filename) {
    $name_without_extension = pathinfo($filename, PATHINFO_FILENAME);
    // Заменяем точки (кроме последней перед расширением), подчеркивания и дефисы на пробелы
    $pretty_name = preg_replace('/[\._-]/', ' ', $name_without_extension);
    // Удаляем лишние пробелы
    $pretty_name = preg_replace('/\s+/', ' ', $pretty_name);
    // Первую букву каждого слова делаем заглавной
    $pretty_name = ucwords(trim($pretty_name));
    return $pretty_name ?: $filename; // Возвращаем исходное имя, если результат пустой
}

?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Навигация по лабораторным работам</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 20px auto;
            padding: 0 20px;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }
        h1 {
            text-align: center;
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 30px;
        }
        .lab-section {
            background-color: #fff;
            margin-bottom: 30px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .lab-section h2 {
            color: #0056b3;
            margin-top: 0;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        ul {
            list-style-type: none;
            padding-left: 0;
        }
        li {
            margin-bottom: 10px;
            padding: 5px 0;
            border-bottom: 1px dashed #eee;
        }
        li:last-child {
            border-bottom: none;
        }
        a {
            color: #0066cc;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
            color: #004080;
        }
        .file-original-name {
            font-size: 0.9em;
            color: #777;
            margin-left: 8px;
        }
        footer {
            text-align: center;
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #777;
            font-size: 0.9em;
        }
        .no-files {
            color: #777;
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>Навигация по лабораторным работам</h1>

    <?php foreach ($labs_config as $lab_key => $relative_path_to_lab_files) : ?>
        <?php
        // Формируем полный путь к директории с файлами лабораторной
        $current_lab_dir_path = $base_path . '/' . $relative_path_to_lab_files;
        
        // Получаем отображаемое имя для лабораторной
        $lab_display_title = isset($lab_titles[$lab_key]) ? $lab_titles[$lab_key] : 'Лабораторная работа: ' . ucfirst($lab_key);
        
        $html_files_found = [];
        if (is_dir($current_lab_dir_path)) {
            // Ищем все .html файлы в указанной директории
            $files_in_dir = glob($current_lab_dir_path . '/*.html');
            
            if ($files_in_dir) {
                foreach ($files_in_dir as $file_full_path) {
                    $file_basename = basename($file_full_path);
                    // Пропускаем файлы из списка $ignore_files
                    if (!in_array($file_basename, $ignore_files)) {
                        $html_files_found[$file_basename] = $file_full_path;
                    }
                }
            }
            // Сортируем файлы по имени для единообразного отображения
            ksort($html_files_found);
        }
        ?>

        <div class="lab-section">
            <h2><?php echo htmlspecialchars($lab_display_title); ?></h2>
            <?php if (!empty($html_files_found)) : ?>
                <ul>
                    <?php foreach ($html_files_found as $file_name => $file_path) : ?>
                        <li>
                            <a href="<?php echo htmlspecialchars(str_replace($base_path . '/', '', $file_path)); ?>">
                                <?php echo htmlspecialchars(get_pretty_link_name($file_name)); ?>
                            </a>
                            <span class="file-original-name">(<?php echo htmlspecialchars($file_name); ?>)</span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php else : ?>
                <p class="no-files">HTML файлы не найдены в директории: <?php echo htmlspecialchars($current_lab_dir_path); ?></p>
            <?php endif; ?>
        </div>
    <?php endforeach; ?>

</body>
</html>
