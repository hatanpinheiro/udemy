function fibonacci(n){
    if (n < 2) {
        return n;
    }
    let anterior = 1;
    let penultimo = 0;

    for (let i = 2; i <= n; i++) {
        if (i == n) {
            return penultimo + anterior;
        }

        let temp = penultimo;
        penultimo = anterior;
        anterior = temp + penultimo;
    }
}