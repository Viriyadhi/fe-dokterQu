<template>
  <div class="container1 elevation-2 rounded-lg">
    <div class="row">
      <div class="col-5">
        <div class="ml-2">Total Pasien</div>
        <div class="total my-3 ml-2">7.506</div>
        <div class="row">
          <v-chip class="ma-5 red lighten-4"
            ><v-icon left size="17" color="red darken-1">
              mdi-arrow-bottom-right
            </v-icon>
            <div class="text-body1 percentage-txt">3.5%</div>
          </v-chip>
          <div class="d-flex align-center">from yesterday</div>
        </div>
      </div>
      <div class="col-7">
        <v-sparkline
          class="spark"
          :labels="labels"
          :value="value"
          color="blue lighten-1"
          height="80"
          line-width="1"
          padding="16"
        ></v-sparkline>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container1 {
  border-color: #4caf50;
  border-style: solid;
  width: 100%;
}
.total {
  color: #4caf50;
  font-size: 25px;
  font-weight: bold;
}
.chip {
  background-color: #4caf50;
}
.percentage-txt {
  color: #f52525;
}
</style>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>
