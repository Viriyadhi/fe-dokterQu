<template>
  <div class="container elevation-2 rounded-lg">
    <div class="row">
      <div class="col-5">
        <div>Today's Visitors</div>
        <div class="total my-3">58</div>
        <div class="row">
          <v-chip class="ma-2 blue-grey lighten-2"
            ><v-icon left size="17" color="green accent-2">
              mdi-arrow-top-right
            </v-icon>
            <div class="text-body1 text-precentage">9.3%</div>
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
.container {
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
.text-precentage {
  color: #6beba4;
}
</style>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>
