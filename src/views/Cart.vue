<!--  -->
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in books" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.price | formatPrice }}</td>
          <td>
            <button class="btn" @click="subtract(index)">-</button>
            {{ item.count }}
            <button @click="increment(index)" class="btn">+</button>
          </td>
          <td><button @click="remove(index)">移除</button></td>
        </tr>
      </tbody>
    </table>
    <span>总价格:{{ totalPrice }}</span>
    <p>{{ a }}------{{ b }}-----{{ c }}</p>
  </div>
</template>

<script>
import test from "@/mixin/test";
// JSON.stringify()
// const btn = document.querySelector(".remove");
// btn.addEventListener("click", function () {
//   tbody.removeChild(this.parentNode.parentNode);
// });
export default {
  mixins: [test],
  name: "Cart",
  data() {
    return {
      // a: 1,
      b: 2,
      c: 3,
      books: [
        { name: "算法导论", date: "2006-9", price: 85, count: 1 },
        { name: "UNIX编程艺术", date: "2006-2", price: 59, count: 1 },
        { name: "Vue程序设计", date: "2008-10", price: 35, count: 1 },
        { name: "颈椎康复", date: "2006-3", price: 129, count: 1 },
      ],
    };
  },

  filters: {
    formatPrice(price) {
      return "¥" + price.toFixed(2);
    },
  },
  computed: {
    totalPrice() {
      return (
        "¥" +
        this.books
          .reduce((prev, value) => prev + value.count * value.price, 0)
          .toFixed(2)
      );
    },
  },
  methods: {
    subtract(i) {
      this.books[i].count--;
      if (this.books[i].count <= 0) {
        this.books[i].count = 0;
      }
    },
    increment(i) {
      this.books[i].count++;
    },
    remove(i) {
      this.books.splice(i, 1);
    },
  },

  components: {},
};
</script>
<style lang="less" scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;

  text-align: center;
  thead {
    background-color: #ccc;
  }
  td,
  th {
    border: 1px solid #333;
    height: 30px;
    width: 150px;
  }
  .btn {
    width: 20px;
    margin: 0 2px;
  }
}
</style>
