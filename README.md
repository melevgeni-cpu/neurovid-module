# NeuroVid – лендинг AI-кинематографа

Современный лендинг для сервиса нейро-реставрации и оживления фото/видео. Построен на Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## 🚀 Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/your-org/neurovid-landing.git
cd neurovid-landing

# Установить зависимости
npm install

# Скопировать переменные окружения
cp .env.local.example .env.local

# Запустить в режиме разработки
npm run dev

Откройте http://localhost:3000.

📦 Основные команды
Команда	Действие
npm run dev	Запуск dev-сервера с горячей перезагрузкой
npm run build	Сборка production-версии
npm run start	Запуск production-сервера
npm run lint	Проверка кода линтером
🧩 Структура проекта
app/ – роутинг и глобальные стили (Next.js App Router)

components/ – переиспользуемые компоненты (layout, sections, ui)

hooks/ – кастомные React-хуки

lib/ – утилиты и вспомогательные функции

public/ – статические файлы (изображения, видео)

🌐 Переменные окружения
Создайте файл .env.local на основе .env.local.example:

NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_API_ENDPOINT=https://api.neurovid.ai/contact

📝 Лицензия
MIT

