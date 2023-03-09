<template>
  <div class="container elevation-2 rounded-lg">
    <div class="row">
      <div class="col-5 ">
        <div>Total Pasien</div>
        <div class="total my-3">7.506</div>
        <div class="row">
          <v-chip class="ma-2 red lighten-4"
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
          height="25"
          line-width="1"
          padding="16"
        ></v-sparkline>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  border-color: #4caf50;
  border-style: solid;

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
  color: #F52525;
}
</style>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>
