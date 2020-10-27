<template>
  <div id="app">
    <div class="add">
      <div class="input-group md-form form-sm form-2 pl-0">
  <input v-model="search" class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search">
</div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Tel</th>
            <th scope="=col">Event</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in searchName" :key="items.id">
            <td>{{ items.name }}</td>
            <td>{{ items.age }}</td>
            <td>{{ items.tel }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="clickEdit(items)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-success"
                @click="clickDelete(items)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" class="btn btn-primary" @click="clickAdd()">
          Add New
        </button>
      </div>
      <div class="container">
         
        <editemployee
          :employee="employee"
          @save="clickSave"
          v-if="isEdit"
        ></editemployee>
      </div>
    </div>
  </div>
</template>

<script>
import editemployee from "./components/addNew";
import Paginate from 'vuejs-paginate'
export default {
  name: "App",
  data() {
    return {
      selec: "example1",
      Example: "hello",
      list: [
        {
          id: 1,
          name: "Phạm Ngọc Minh",
          age: "20",
          tel: "0326598745"
        },
        {
          id: 2,
          name: "Nguyễn Thị Mỹ",
          age: "32",
          tel: "0259763549"
        },
        {
          id: 3,
          name: "Đào Anh Trình",
          age: "16",
          tel: "0649875365"
        },
        {
          id: 4,
          name: "Trần Thị Ninh",
          age: "19",
          tel: "0326485676"
        },
        {
          id: 5,
          name: "Ma Anh",
          age: "21",
          tel: "0698756494"
        }
      ],
      employee: null,
      isEdit: false,
      search: '',
      array:[],
    };
  },
  computed:{
    searchName: function(){
      return this.list.filter((items)=>{
        return items.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: {
    editemployee: editemployee,
    Paginate: Paginate
  },
  methods: {
    clickAdd() {
      let employee = {
        id: Math.floor(Math.random() * 1000000),
        name: "",
        age: "",
        tel: ""
      }
      this.employee = employee;
      this.isEdit = true;
    },
    clickSave(employee) {
      let index = this.list.findIndex(items => items.id == employee.id);
      if (index >= 0) {
        this.list.splice(index, 1, employee);
      } else {
        this.list.push(employee);
      }

      this.isEdit = false;
    },
    clickEdit(employee) {
      this.employee = JSON.parse(JSON.stringify(employee));
      this.isEdit = true;
    },
    clickDelete(employee) {
      let index = this.list.findIndex(items => items.id == employee.id);
      this.list.splice(index, 1);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
}

#comp {
  margin-top: 50px;
}
.add {
  margin-top: 30px;
  width: 50%;
  margin-left: 25%;
}

.input-group.md-form.form-sm.form-1 input{
  border: 1px solid #bdbdbd;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-2 input {
  border: 1px solid #bdbdbd;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.input-group.md-form.form-sm.form-2 input.lime-border {
  border: 1px solid #cddc39;
}
.input-group.md-form.form-sm.form-2 input.amber-border {
  border: 1px solid #ffca28;
}
.input-group{
  margin-bottom: 10px;
}
.table{
  text-align: center;
}
</style>
