function TwoStacks(n) {
  let data = new Array(n).fill(null);

  let top1 = -1;
  let top2 = n;

  return {
    data,
    top1,
    top2,
    push1: (item) => {
      top1++;
      data[top1] = item;
    },
    push2: (item) => {
      top2--;
      data[top2] = item;
    },
    pop1: () => {
      if (top1 > -1) {
        let item = data[top1];
        data[top1] = null;
        top1--;
        return item;
      } else {
        console.log("Stackoverflow");
        return null;
      }
    },
    pop2: () => {
      if (top2 < n) {
        let item = data[top2];
        data[top2] = null;
        top2++;
        return item;
      } else {
        console.log("Stackoverflow");
        return null;
      }
    },
  };
}

const twoStack = new TwoStacks(10);
twoStack.push1("1");
twoStack.push1("2");
twoStack.push1("3");
twoStack.push2("-1");
twoStack.push2("-2");
twoStack.pop1();
twoStack.pop1();
twoStack.pop1();
twoStack.pop2();
twoStack.pop2();
twoStack.pop2();
