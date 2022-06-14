<template>
    <div class="">
        <div class="table-users">
            <div class="table-title">
                <div @click="sortBy('name')" class="table-title__name-col">{{ nameColTitle }}</div>
                <div @click="sortBy('phone')" class="table-title__phone-col">{{ phoneColTitle }}</div>
            </div>
            <div v-for="user in userList" :key="user.id" class="table-content">
                <TableRow :user="user" />
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TableRow from './TableRow.vue'
export default {
  components: {
    TableRow
  },
  data () {
    return {
      nameColTitle: 'Имя',
      phoneColTitle: 'Телефон',
      userList: []
    }
  },
  mounted () {
    this.userList = this.getUsersTree
  },
  computed: {
    ...mapGetters([
      'getUsersTree'
    ])
  },
  methods: {
    ...mapActions([
      'sortData',
      'clear'
    ]),
    sortBy (type) {
      this.sortData(type)
    }
  }
}
</script>
<style scoped>
.table-title {
    display: flex;
}

.table-title__name-col {
    border-right: none !important;
}

.table-title__name-col,
.table-title__phone-col {
    width: 50%;
    border: 1px solid #000;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table-title__phone-col {
    min-width: 200px;
}

.table-users {
    width: 400px;
    height: auto;
}
</style>
