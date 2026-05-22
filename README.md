# CODEBASE

Здесь размещается код продукта или его часть, готовая к публикации.

## Структура

```
CODEBASE/
├── avatar_engine/          # Логика вычисления состояния аватара
│   ├── health_score.py     # Взвешенная формула health score
│   └── avatar_states.py    # Маппинг score → визуальное состояние
├── data_ingestion/         # Адаптеры к источникам данных
│   ├── apple_health.py     # HealthKit интеграция
│   ├── garmin.py           # Garmin Connect API
│   └── strava.py           # Strava API
├── ai_insights/            # AI-слой для генерации инсайтов
│   ├── prompt_builder.py   # Динамическая сборка промпта
│   └── claude_client.py    # Обёртка над Anthropic API
└── README.md               # Этот файл
```

## Стек

- **Backend:** Python (FastAPI)
- **Mobile:** React Native (iOS + Android из одной кодовой базы)
- **AI:** Anthropic Claude API (claude-sonnet-4-20250514)
- **База данных:** PostgreSQL + TimescaleDB (для временных рядов метрик)
- **Инфра:** Yandex Cloud (российские серверы — требование для хранения персональных данных)

## Статус

MVP в разработке. В репозитории — прототип Avatar Engine и модуль AI-инсайтов.
