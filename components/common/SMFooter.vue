<script setup lang="ts">
import SMSocialLinks from '@/components/middle/SMSocialLinks.vue';
import YaCounter from '@/assets/images/ya-counter.jpg';
import IconOk from '@/assets/icons/social/sm-ok.svg';
import IconVk from '@/assets/icons/social/sm-vk.svg';


const menuArray = [
  {
    id: 0,
    title: 'О нас',
    url: '/about-us',
    active: true,
  },
  {
    id: 1,
    title: 'Направления деятельности',
    url: '/areas-of-activity',
    active: false,
  },
  {
    id: 2,
    title: 'Новости и события',
    url: '/news-and-events',
    active: false,
  },
  {
    id: 3,
    title: 'Фотогалерея',
    url: '/photogallery',
    active: false,
  },
  {
    id: 4,
    title: 'Документы',
    url: '/documents',
    active: false,
  },
  {
    id: 5,
    title: 'Сведения об организации',
    url: '/information-about-organization',
    active: false,
  },
  {
    id: 6,
    title: 'Контакты',
    url: '/contacts',
    active: false,
  },
  {
    id: 7,
    title: 'Полезная информация',
    url: '/useful-information',
    active: false,
  },
  {
    id: 8,
    title: 'Противодействие коррупции',
    url: '/anti-corruption',
    active: false,
  },
  {
    id: 9,
    title: 'Противодействие экстремизму',
    url: '/countering-extremism',
    active: false,
  },
  {
    id: 10,
    title: 'Обратная связь',
    url: '/feedback',
    active: false,
  },
  {
    id: 11,
    title: 'Политика конфиденциальности',
    url: '/privacy-policy',
    active: false,
  },
  {
    id: 12,
    title: 'Навигатор по сайту',
    url: '/site-navigator',
    active: false,
  },
];

const socialArray = [
  {
    id: 0,
    title: 'Перейти в группу ВК',
    url: 'https://vk.com',
    component: IconVk,
  },
  {
    id: 1,
    title: 'Перейти в группу ОК',
    url: 'https://ok.ru',
    component: IconOk,
  },
];
</script>


<template>
  <footer class="sm-footer">
    <div class="sm-footer__container">
      <div class="sm-footer__top">
        <div
          :class="[
            'sm-footer__top-grid',
            'sm-footer__top-grid_nav',
          ]"
        >
          <SMList
            dir="vertical"
            view="gray"
            :data="menuArray"
          />
        </div>
        <div class="sm-footer__top-grid sm-footer__top-grid_social">
          <SMSocialLinks
            :data="socialArray"
          />
        </div>
      </div>

      <div class="sm-footer__bottom">
        <div
          :class="[
            'sm-footer__bottom-grid',
            'sm-footer__bottom-grid_privacy',
          ]"
        >
          <router-link
            to="/privacy-policy"
            class="sm-footer__link"
          >
            Политика конфиденциальности
          </router-link>
        </div>
        <div
          :class="[
            'sm-footer__bottom-grid',
            'sm-footer__bottom-grid_counter',
          ]"
        >
          <img :src="YaCounter" />
        </div>
      </div>
    </div>
  </footer>
</template>
