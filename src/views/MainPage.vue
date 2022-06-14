<template>
  <div class="content-block">
    <div class="button-add">
      <CustomButton :onClick="toggleModal" :title="addButtonTitle" />
    </div>
    <div class="main-content">
      <TableUsersVue />
      <ModalAddUserVue v-if="showAddUserModal" @close="toggleModal"/>
    </div>
  </div>
</template>

<script>
import TableUsersVue from '../components/TableUsers.vue'
import ModalAddUserVue from '../components/ModalAddUser.vue'
import CustomButton from '../components/UI/buttons/CustomButton.vue'
export default {
  components: {
    CustomButton,
    TableUsersVue,
    ModalAddUserVue
  },
  data () {
    return {
      addButtonTitle: 'Добавить',
      showAddUserModal: false
    }
  },
  methods: {
    toggleModal () {
      this.showAddUserModal = !this.showAddUserModal
    }
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  width: 100%;
  max-width: 900px;
  min-width: 900px;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
}
</style>
