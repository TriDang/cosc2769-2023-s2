const fs = require("fs");
const { customers, orders, products } = require("./data");
const {
  find_product
} = require("./functions");

const save_orders = async (callback_func) => {
  const copied_customers = customers.slice();
  copied_customers.sort((c1, c2) => {
    return c1.id - c2.id;
  });

  let data = []; // content to write to file
  copied_customers.forEach((c) => {
    const matched_orders = orders.filter((o) => o.customer_id === c.id);
    if (matched_orders.length == 0) {
      return;
    }
    // customer information line
    data.push(`${c.id}, ${c.name}`);
    matched_orders.forEach((mo) => {
      const p = find_product(mo.product_id);
      let amount = mo.quantity * p.price;
      if (p.sell_off) {
        amount = amount * (1 - p.percent / 100);
      }
      // order information line
      data.push(`  ${p.id}, ${p.name}, ${p.price}, ${mo.quantity}, ${amount}`);
    });
  });

  // string content
  const content = data.join("\n");

  // actual write data to file
  fs.open(`./order_summary.txt`, "w", (err, fd) => {
    fs.writeFile(fd, content, () => {
      fs.close(fd, () => callback_func());
    });
  });
};

exports.save_orders = save_orders;
