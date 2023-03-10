import DasboardApotik from '@/layouts/Admin/Apotik/DashboardApotik.vue';
import DashboardApotikHome from '@/views/admin/apotik/DashboardApotikHome.vue';
import DashboardDokter from '@/layouts/Admin/Dokter/DashboardDokter.vue';

export const ApotikAdmin = {
    path: "/dashboard-admin/apotik",
    name: "DasboardApotik",
    component: DasboardApotik,
    children: [
        {
            path: "/dashboard-admin/apotik/home",
            name: "DasboardApotikMain",
            title: "Home",
            icon: "fa-solid fa-house",
            component: DashboardApotikHome,
        }
    ]
}

export const DokterAdmin = {
    path: "/dashboard-admin/dokter",
    name: "DashboardDokter",
    component: DashboardDokter,
    children: []
}