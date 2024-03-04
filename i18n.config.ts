export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  defaultLocale: 'en',
  messages: {
    en: {
      menu: {
        home: 'Home',
        services: 'Services',
        contacts: 'Contacts',
        storybook: 'Storybook',
      },
      homepage: {
        title: 'Home page',
        content: 'Page content here ...',
      },
      services: {
        title: 'My services',
        content: 'Page content here ...',
      },
      contacts: {
        title: 'Contacts page',
        content: 'Page content here ...',
      },
      storybook: {
        title: 'Storybook page',
        content: 'Page content here ...',
      },
      welcome: 'Welcome!'
    },
    ru: {
      menu: {
        home: 'Главная',
        services: 'Услуги',
        contacts: 'Контакты',
        storybook: 'Компоненты',
      },
      homepage: {
        title: 'Главная страница',
        content: 'Здесь будет контент страницы ...',
      },
      services: {
        title: 'Мои услуги',
        content: 'Здесь будет контент страницы ...',
      },
      contacts: {
        title: 'Мои контакты',
        content: 'Здесь будет контент страницы ...',
      },
      storybook: {
        title: 'Страница компонентов',
        content: 'Здесь будет контент страницы ...',
      },
      welcome: 'Привет!'
    }
  }
}));