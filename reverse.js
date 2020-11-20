const reverse = (param) => {
    let result = "";

    for(var i = param.length - 1; i >= 0; i--){
        result += param[i]
    }

    return result;
}

console.log(reverse('abc'));


const fibonacci = (param)  => {
  
    let fib = [0, 1];
    let data = [];

    if(param < 3) data = fib;

    else{
        for(let i = 2; i <= param; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]; 
            data.push(fib[i]);
        }
    }
    return data;
  }

console.log(fibonacci(3));


const combinations = (n, r) => {

    const product_Range = (a,b) => {
        let prd = a,i = a;
       
        while (i++< b) {
          prd*=i;
        }
        return prd;
      }
      

  if (n==r) return 1
  else {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}

console.log(combinations(4, 2));
