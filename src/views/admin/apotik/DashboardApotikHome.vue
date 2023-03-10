<template>
  <div class="container-bg">
    <div class="">
      <v-sparkline
        class="spark"
        :value="value"
        :gradient="gradient"
        :smooth="radius || false"
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
      ></v-sparkline>
    </div>
    <v-card>
      <v-row class="card-row px-3">
        <v-card class="pa-5 col-6">
          <TotalPasien />
        </v-card>
        <div class="pa-5 col-6">
          <v-card class="">
            <TotalPasienChart />
          </v-card>
          <v-card class="mt-7">
            <TodaysVisitors />
          </v-card>
        </div>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import TotalPasien from "@/components/Dashboard/TotalPasien.vue";
import TotalPasienChart from "@/components/Dashboard/TotalPasienChart.vue";
import TodaysVisitors from "@/components/Dashboard/TodaysVisitors.vue";

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "DashboardApotikHome",
  components: {
    TotalPasien,
    TodaysVisitors,
    TotalPasienChart,
  },

  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [2, 3, 0, 1, 2, 6, 3, 5, 0, 6, 8, 4, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
  }),
};
</script>

<style>
.container-bg {
  height: 100%;
  background-color: #eceff2;
}
</style>
