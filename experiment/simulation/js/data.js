// cholesky's method variables ----------------------------------------------------------------
let mat_c = [
    [
        7.2038
    ],
    [
        -14.165
    ],
    [
        71.985
    ]
];
let mat_a = [
    [
        96.8874,
        -4.023,
        9.4841
    ],
    [
        -35.4831,
        -92.0509,
        4.4445
    ],
    [
        4.0625,
        55.0972,
        -51.2556
    ]
];
let mat_l = [];
let mat_z = [];
let mat_trans_l = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//generate k values
let k1 = parseFloat((Math.random() * 200 + 100).toFixed(4));
let k2 = parseFloat((Math.random() * 200 + 100).toFixed(4));
let k3 = parseFloat((Math.random() * 200 + 100).toFixed(4));
let k4 = parseFloat((Math.random() * 200 + 100).toFixed(4));
console.log(`k1 => ${k1}, k2 => ${k2}, k3 => ${k3}, k4 => ${k4}`);
//3 x 1 random numbers in [0, 100]
function initialize_mat_c() {
    mat_c = [];
    let num1 = parseFloat((Math.random() * 100).toFixed(4));
    let num2 = parseFloat((Math.random() * 100).toFixed(4));
    let num3 = parseFloat((Math.random() * 100).toFixed(4));
    mat_c.push([num1]);
    mat_c.push([num2]);
    mat_c.push([num3]);
}
//3 x 3 random numbers in [-100, 100]
function initialize_mat_a() {
    mat_a = [];
    mat_a.push([parseFloat((k1 + k2 + k4).toFixed(4)), -k2, -k4]);
    mat_a.push([-k2, parseFloat((k2 + k3).toFixed(4)), -k3]);
    mat_a.push([-k4, -k3, parseFloat((k3 + k4).toFixed(4))]);
}
initialize_mat_c();
initialize_mat_a();
let mat_x = [];
//# sourceMappingURL=data.js.map