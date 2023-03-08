<template>
    <v-app>
        <SideBarDokter :items="routes()"/>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script>
import {ApotikAdmin} from '@/router/admin'
import SideBarDokter from '@/components/Admin/SideBarDokter.vue';

export default {
    data: () => ({ drawer: false }),
    methods: {
        routes() {
            return ApotikAdmin.children;
        }
    },
    components: { SideBarDokter }
}
</script>
