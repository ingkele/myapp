<template>
    <div class="cl-table-menu">
        <table border="1">
            <tr v-for="(item,index) in listTemp" :key="index">
                <td v-for="(ic,i) in item" :key="i">
                    <button @click="active(ic)" class="action">{{ ic.label }}</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Object
        },
    },
    data() {
        return {
        }
    },
    computed: {
        listTemp: function () {
            let index = 0;
            let count = 10;//把数组分为10个1组
            let arrTemp = [];
            let experts = this.menu;
            for (let i = 0; i < this.menu.length; i++) {
                index = parseInt(i / count);
                if (arrTemp.length <= index) {
                    arrTemp.push([]);
                }
                arrTemp[index].push(experts[i])
            }
            return arrTemp
        }
    },
    methods: {
        active(val) {
            this.$emit("active", val);
        }
    }
}
</script>

<style lang="scss">
.cl-table-menu {
    width: 100%;
    height: 100%;
    table {
        border: none;
        border-spacing: 0px;
        border-collapse: collapse;
        td {
            width: 120px;
            height: 60px;
            text-align: center;
            border: 1px solid #96b97d;
            color: #96b97d;
            box-sizing: border-box;
            padding: 0px;
            .action {
                width: 100%;
                height: 100%;
                border: none;
                background: none;
                color: #96b97d;
            }
            .action:hover {
                background: #96b97d;
                color: black;
            }
        }
    }
}
</style>