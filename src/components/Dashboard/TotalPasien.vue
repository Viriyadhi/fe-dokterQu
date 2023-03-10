<template>
  <div class=" containers rounded-lg">
    <div class="text-h6">Total Pasien</div>
    <div class="datable">
      <!-- <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      fixed-header
    >
      <template slot:item.value="{ item }">
      <v-chip v-if="item.value"
        color="red"
      >
        {{ item.value }}
      </v-chip>
    </template>
    </v-data-table> -->

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Order Id</th>
              <th class="text-left">User</th>
              <th class="text-left">tanggal</th>
              <th class="text-left">jumlah</th>
              <th class="text-left">status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.id">
              <td>{{ item.id }}</td>
              <td>
                <div class="d-flex align-center">
                  <v-avatar class="mr-2" color="teal" size="30">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIF.M%2fVz4woKYY7N%2fGhiQqXmWA&pid=Api&P=0"
                      alt="John"
                    />
                  </v-avatar>
                  <div>
                    <div class="text-subtitle1">
                      {{ item.user }}
                    </div>
                    <div class="text-caption">
                      {{ item.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td>{{ item.tanggal }}</td>
              <td>{{ item.jumlah }}</td>
              <td>
                <div style="color:green">•{{ item.status }}</div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>
<style>
.datable {
  width: 100%;
  padding: 5px;
}
.containers {
  padding: none;
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Order id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "User", value: "user" },
        { text: "Tanggal", value: "tanggal" },
        { text: "Jumlah", value: "jumlah" },
        { text: "Status", value: "status" },
      ],
      desserts: [
        {
          id: "#2203",
          user: "johny simon",
          tanggal: "may 9 , 2022",
          jumlah: "2.100.000",
          status: "Dibayar",
          email: "johnySimon@gmail.com",
        },
        {
          id: "#2204",
          user: "Greg Cool J",
          tanggal: "may 9 , 2022",
          jumlah: "2.200.000",
          status: "Dibayar",
          email: "Greg Cool j@gmail.com",
        },
        {
          id: "#2223",
          user: "Bean Hoard",
          tanggal: "may 9 , 2022",
          jumlah: "2.220.000",
          status: "Dibayar",
          email: "Bean Hoard@gmail.com",
        },
        {
          id: "#2103",
          user: "jack candy",
          tanggal: "may 9 , 2022",
          jumlah: "2.100.000",
          status: "Dibayar",
          email: "jack candy@gmail.com",
        },
        {
          id: "#2203",
          user: "Boy wiliam",
          tanggal: "may 9 , 2022",
          jumlah: "2.100.000",
          status: "Dibayar",
          email: "Boy wiliam@gmail.com",
        },
        {
          id: "#2203",
          user: "john Simon",
          tanggal: "may 9 , 2022",
          jumlah: "2.100.000",
          status: "Dibayar",
          email: "johnySins@gmail.com",
        },
      ],
    };
  },
};
</script>
