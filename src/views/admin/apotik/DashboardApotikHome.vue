<template>
    <div class="container-bg">
    <v-sparkline class="spark"
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
  </template>
  
  <script>
    const gradients = [
      ['#222'],
      ['#42b3f4'],
      ['red', 'orange', 'yellow'],
      ['purple', 'violet'],
      ['#00c6ff', '#F0F', '#FF0'],
      ['#f72047', '#ffd200', '#1feaea'],
    ]
  
    export default {
      data: () => ({
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        gradient: gradients[5],
        value: [2, 3, 0, 1, 2, 6, 3, 5, 0, 6, 8, 4, 2, 9, 0],
        gradientDirection: 'top',
        gradients,
        fill: false,
        type: 'trend',
        autoLineWidth: false,
      }),
    }
  </script>
  
  <style>
  .container-bg {
    height:100%;
    background-color: #ECEFF2;
  }
  </style>