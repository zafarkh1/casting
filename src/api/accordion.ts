import { Section } from "@/types";

export const accordion: Section[] = [
  {
    title: "Общие данные",
    items: [
      {
        label: "Пол",
        type: "toggle",
        options: [
          { label: "Мужчина", value: "Мужчина" },
          { label: "Женщина", value: "Женщина" },
        ],
      },
      {
        label: "Статус",
        type: "toggle",
        options: [
          { label: "Свободен", value: "Свободен" },
          { label: "В отношениях", value: "В отношениях" },
        ],
      },
      {
        label: "Возраст",
        type: "numberRange",
        options: [
          { label: "minAge", value: "minAge" },
          { label: "maxAge", value: "maxAge" },
        ],
      },
      {
        label: "Локация",
        type: "select",
        options: [
          { label: "Узбекистан", value: "Узбекистан" },
          { label: "Казахстан", value: "Казахстан" },
          { label: "Россия", value: "Россия" },
          { label: "Германия", value: "Германия" },
        ],
      },
    ],
  },
  {
    title: "Внешность",
    items: [
      {
        label: "Этническая происхождения",
        type: "select",
        options: [
          { label: "Латинка", value: "Латинка" },
          { label: "Русская", value: "Русская" },
          { label: "Казахская", value: "Казахская" },
          { label: "Узбечка", value: "Узбечка" },
        ],
      },
      {
        label: "Цвет глаз",
        type: "select",
        options: [
          { label: "Карий", value: "Карий" },
          { label: "Зелёный", value: "Зелёный" },
          { label: "Голубой", value: "Голубой" },
          { label: "Серый", value: "Серый" },
        ],
      },
      {
        label: "Цвет волос",
        type: "select",
        options: [
          { label: "Блондин", value: "Блондин" },
          { label: "Брюнет", value: "Брюнет" },
          { label: "Рыжий", value: "Рыжий" },
          { label: "Шатен", value: "Шатен" },
        ],
      },
      {
        label: "Тип телосложения",
        type: "select",
        options: [
          { label: "Стройное", value: "Стройное" },
          { label: "Мускулистое", value: "Мускулистое" },
          { label: "Полное", value: "Полное" },
        ],
      },
    ],
  },
  {
    title: "Размеры",
    items: [
      { label: "Рост", type: "input" },
      { label: "Обхват бёдер", type: "input" },
      { label: "Вес", type: "input" },
      { label: "Длина ног", type: "input" },
      { label: "Обхват груди", type: "input" },
      { label: "Размер обуви", type: "input" },
      { label: "Обхват талии", type: "input" },
      { label: "Размер одежды", type: "input" },
    ],
  },
  {
    title: "Особенности",
    items: [
      {
        label: "Физические особенности",
        type: "multiSelect",
        options: [
          { label: "Татуировки", value: "Татуировки" },
          { label: "Шрамы", value: "Шрамы" },
          { label: "Пирсинг", value: "Пирсинг" },
        ],
      },
      {
        label: "Акценты и манера речи",
        type: "multiSelect",
        options: [
          { label: "Русский", value: "Русский" },
          { label: "Английский", value: "Английский" },
          { label: "Французский", value: "Французский" },
        ],
      },
      {
        label: "Мимика и пластика",
        type: "multiSelect",
        options: [
          { label: "Живая", value: "Живая" },
          { label: "Спокойная", value: "Спокойная" },
        ],
      },
      {
        label: "Психологические особенности",
        type: "multiSelect",
        options: [
          { label: "Экстраверт", value: "Экстраверт" },
          { label: "Интроверт", value: "Интроверт" },
          { label: "Амбиверт", value: "Амбиверт" },
        ],
      },
    ],
  },
  {
    title: "Навыки",
    items: [
      {
        label: "Актёрское мастерство",
        type: "multiSelect",
        options: [
          { label: "Новичок", value: "Новичок" },
          { label: "Средний", value: "Средний" },
          { label: "Профессионал", value: "Профессионал" },
        ],
      },
      {
        label: "Работа с голосом",
        type: "multiSelect",
        options: [
          { label: "Новичок", value: "Новичок" },
          { label: "Средний", value: "Средний" },
          { label: "Профессионал", value: "Профессионал" },
        ],
      },
      {
        label: "Движение и пластика",
        type: "multiSelect",
        options: [
          { label: "Новичок", value: "Новичок" },
          { label: "Средний", value: "Средний" },
          { label: "Профессионал", value: "Профессионал" },
        ],
      },
      {
        label: "Музыкальные навыки",
        type: "multiSelect",
        options: [
          { label: "Пение", value: "Пение" },
          { label: "Инструмент", value: "Инструмент" },
          { label: "Сольфеджио", value: "Сольфеджио" },
        ],
      },
      {
        label: "Языковые навыки",
        type: "multiSelect",
        options: [
          { label: "Английский", value: "Английский" },
          { label: "Французский", value: "Французский" },
          { label: "Испанский", value: "Испанский" },
        ],
      },
      {
        label: "Социальные и коммуникативные навыки",
        type: "multiSelect",
        options: [
          { label: "Ораторское искусство", value: "Ораторское искусство" },
          { label: "Переговоры", value: "Переговоры" },
        ],
      },
      {
        label: "Профессиональные навыки для специфических ролей",
        type: "multiSelect",
        options: [
          { label: "Трюки", value: "Трюки" },
          { label: "Импровизация", value: "Импровизация" },
        ],
      },
    ],
  },
];
