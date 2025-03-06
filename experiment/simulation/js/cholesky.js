function lower_L(a) {
    let n = a.length;
    let L = Array(n).fill(0).map(x => Array(n).fill(0));
    ;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            // L[i]=[];
            let sum = 0;
            if (i == j) {
                for (let k = 0; k < j; k++) {
                    sum += Math.pow(L[j][k], 2);
                }
                L[i][i] = Math.sqrt(a[i][i] - sum);
            }
            else {
                for (let k = 0; k < j; k++) {
                    sum += L[i][k] * L[j][k];
                }
                L[i][j] = (a[j][i] - sum) / L[j][j];
            }
        }
    }
    return (L);
}
function get_z(l, c) {
    let z = [0, 0, 0];
    let n = c.length;
    for (let i = 0; i < n; i++) {
        let sum = c[i];
        for (let j = 0; j < i; j++) {
            sum -= l[i][j] * z[j];
        }
        z[i] = sum / l[i][i];
    }
    return (z);
}
function get_x(u, z) {
    let x = [];
    let n = z.length;
    for (let i = n - 1; i >= 0; i--) {
        let sum = z[i];
        console.log(sum);
        for (let j = i + 1; j < n; j++) {
            sum -= u[i][j] * x[j];
        }
        x[i] = sum / u[i][i];
    }
    return (x);
}
//# sourceMappingURL=cholesky.js.map