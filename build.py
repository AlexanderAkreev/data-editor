"""
    осуществяет полную сборку проекта в указанной директории
    все пути вычисляются относительно каталога скрипта
    все пути абсолютные
"""
import os
import shutil
from pathlib import Path

"""
    удаляет содержимое dir_path
    dir_path - pathlib.Path(abspath) - абсолютный путь директории
"""
def remove_dir_content(dir_path):
    for item in os.listdir(dir_path):
        item_abs_path = dir_path / item
        if os.path.isfile(item_abs_path):                
            os.remove(item_abs_path)                  
        elif os.path.isdir(item_abs_path):
            shutil.rmtree(item_abs_path)

"""
    рекурсивно копирует в директорию dist_dir директории и файлы согласно списку путей include,
    исключая директории и файлы согласно списку путей exclude

    позиционные аргументы: dist_dir, include, exclude
    обязательны: dist_dir, include

    dist_dir - pathlib.Path(abspath) - абсолютный путь конечной директории
    include - [pathlib.Path(abspath), ...] - список абсолютных путей копируемых директорий и файлов
    exclude - [pathlib.Path(abspath), ...] - список абсолютных путей исключаемых директорий и файлов
"""
def r_copy(dist_dir, include, exclude=None):
    for item in include:        
        if exclude:
            exlusion = list(filter(lambda ex: str(ex) == str(item), exclude))
            if len(exlusion):
                continue
        print(item)
        if item.is_file():
            shutil.copy(item, dist_dir)
        elif item.is_dir():
            new_dir = dist_dir / item.name
            os.mkdir(new_dir)
            new_include = [item / i for i in os.listdir(item)]
            r_copy(new_dir, new_include, exclude)



root = Path(os.path.dirname(os.path.abspath(__file__)))
client_path = root / 'client'
server_path = root / 'server'
prod_path = Path(r'C:\Program Files (x86)\Apache24\htdocs\data-editor-prod')
exclude = [
    server_path / 'composer.lock', 
    server_path / 'composer.json',
    server_path / Path('log/log.txt')
]
include = [
    root / '.htaccess',
    client_path / 'assets',
]
client_dist = client_path / 'dist'
include = include + [client_dist / i for i in os.listdir(client_dist)]
include = include + [server_path / i for i in os.listdir(server_path)]

user_choice = None
while(user_choice != 'y' and user_choice != 'n'):
    print('WARNING: all content of ' + str(prod_path) + ' will be removed and created with new build. Enter y - yes, n - no.')
    try:
        user_choice = input()
    except KeyboardInterrupt:
        break   
if user_choice == 'n':
    exit()

print()
print('Building React-project...')
print()
os.system('cd client & npm run build')
print()
print('Deploying Data Editor project to ' + str(prod_path) + '...')
print()
remove_dir_content(prod_path)
r_copy(prod_path, include, exclude)

index_php = prod_path / 'index.php'
index_html = prod_path / 'index.html'
mark = '<!--{{FRONTEND}}-->'
html_data = index_html.read_text()
php_data = index_php.read_text()
php_data = php_data.replace(mark, html_data)
index_php.write_text(php_data)
os.remove(index_html)   