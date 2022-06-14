<template>
    <div>
        <div class="table-content">
            <div class="table-content__name-col content-item">{{ user.name }}</div>
            <div class="table-content__phone-col content-item">{{ user.phone }}</div>
        </div>
        <user-row class="table-content__child-row" v-for="childUser in user.children" :key="childUser.id"
            :user="childUser">
        </user-row>
    </div>
</template>
<script>
export default {
  name: 'user-row',
  props: {
    user: Object
  }
}
</script>

<style scoped>
.table-content__child-row {
    margin-left: 20px
}

.table-content {
    margin-top: -1px;
    display: flex;
}

.table-content__name-col {
    border-right: none !important;
}

.table-content__name-col,
.table-content__phone-col {
    width: 50%;
    border: 1px solid #000;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table-content__phone-col {
    min-width: 200px;
}

.table-content__name-col,
.table-content__phone-col {
    overflow: hidden;
}
</style>
