<template>
  <div>
    <exchange-hero />
    <exchange-list :exchanges="exchanges" />
    <div class="ml-6"></div>

    <exchange-pagination />
  </div>
</template>

<script>
import ExchangeHero from '../components/Exchange-Hero.vue';
import ExchangeList from '../components/Exchange-List.vue';
import ExchangePagination from '../components/Exchange-Pagination.vue';
export default {
  name: 'App',
  components: {
    ExchangeHero,
    ExchangeList,
    ExchangePagination,
  },

  computed: {
    exchanges() {
      return this.$store.state.exchange.items;
    },
  },
  created() {
    return this.$store.dispatch('exchange/getExchanges');
  },
};
</script>

<style lang="scss">
</style>