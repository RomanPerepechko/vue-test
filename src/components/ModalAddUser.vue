<template>
    <div class="modal-add">
        <div class="title-block">
            <span>{{ titleModal }}</span>
            <span @click="$emit('close')">{{ closeButtonText }}</span>
        </div>
        <div class="form-add">
            <div class="form-add__input-block">
                <span>{{ titleInputName }}</span>
                <input maxlength="20" v-model="userName" type="text" class="user-data">
            </div>
            <div class="form-add__input-block">
                <span>{{ titleInputPhone }}</span>
                <input maxlength="11" v-model="userPhone" type="text" class="user-data">
            </div>
            <div class="form-add__select-block">
                <span>{{ titleInputChief }}</span>
                <select v-model="selectedChiefId" class="select-user-chief" name="" id="">
                    <option v-for="user in chiefs" :key="user.id" :value="user.id">{{ user.name }}</option>
                </select>
            </div>
            <div class="form-add__button-block">
                <CustomButton :onClick="addNewUser" :title="saveButtonText" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from './UI/buttons/CustomButton.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CustomButton
  },
  data () {
    return {
      titleModal: 'Добавление пользователя',
      closeButtonText: 'Закрыть',
      saveButtonText: 'Сохранить',
      titleInputName: 'Имя',
      titleInputPhone: 'Телефон',
      titleInputChief: 'Начальник',
      chiefs: [],
      selectedChiefId: '',
      userName: '',
      userPhone: ''
    }
  },
  mounted () {
    this.chiefs = this.getUsers
  },
  computed: mapGetters([
    'getUsers'
  ]),
  methods: {
    ...mapActions([
      'addUser'
    ]),
    addNewUser () {
      this.addUser({ name: this.userName, phone: this.userPhone, chiefId: this.selectedChiefId })
      this.$emit('close')
    }
  }

}
</script>

<style scoped>
.form-add__button-block {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.select-user-chief {
    height: 25px;
    width: 200px;
}

.user-data {
    padding: 5px;
    box-sizing: border-box;
    height: 25px;
    width: 200px;
}

.form-add__input-block,
.form-add__select-block {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.modal-add {
    height: auto;
    width: 400px;
    border: 1px solid #000;
    padding: 20px;
    box-sizing: border-box;
}

.title-block {
    display: flex;
    justify-content: space-between;
}
</style>
