let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">System of Linear Equations: Cholesky's Methods</h4>

        <div class="fs-16px">
        <h5>Pivoting</h5>
        <p>Learning Objective: Find the Lower Triagular Matrix</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
// let mat1 = get_matrix_html(3, 1, [[1], [2], [3]], 'inline-block');
// console.log(mat1);
//html for matrix inputs
let matrix_l_inputs = get_matrix_html(3, 3, [
    [
        `<input id='a1-matl-11' class='form-control' />`,
        `<input id='a1-matl-12' class='form-control' />`,
        `<input id='a1-matl-13' class='form-control' />`,
    ],
    [
        `<input id='a1-matl-21' class='form-control' />`,
        `<input id='a1-matl-22' class='form-control' />`,
        `<input id='a1-matl-23' class='form-control' />`,
    ],
    [
        `<input id='a1-matl-31' class='form-control' />`,
        `<input id='a1-matl-32' class='form-control' />`,
        `<input id='a1-matl-33' class='form-control' />`,
    ],
], 'inline-block', '60%');
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Find L', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 3, mat_a, 'A', 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>* X</span> &nbsp; = &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'C', 'inline-block', '20%')}</div>
        <br>

        <h5>We need to find the Lower triangular matrix L given that L * L<sup>T</sup>  = A</h5> <br>

        <div id='piv-inp-div' style='text-align: center;'>L &nbsp; = &nbsp; ${matrix_l_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_a_c();'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    find_l();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
function verify_matrix_a_c() {
    let btn = (document.getElementById('temp-btn-12'));
    let inp_a;
    let inp_c;
    console.log(`matrix L =>`, mat_l);
    //for a
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            inp_a = (document.getElementById(`a1-matl-${i + 1}${j + 1}`));
            if (!verify_values(parseFloat(inp_a.value), mat_l[i][j])) {
                alert(`incorrect value in l matrix at row ${i} and column ${j}`);
                return;
            }
        }
    }
    alert('You have enter correct value.');
    btn.remove();
    render_pivoted_a_c();
    activity2();
}
function find_l() {
    mat_l = lower_L(mat_a);
    for (let i = 0; i < mat_l.length; i++) {
        for (let j = 0; j < mat_l[0].length; j++) {
            if (mat_l[i][j] != 0) {
                mat_l[i][j] = parseFloat(mat_l[i][j].toFixed(4));
            }
        }
    }
}
function render_pivoted_a_c() {
    let div = (document.getElementById('piv-inp-div'));
    div.innerHTML = `L &nbsp; = &nbsp; ${get_matrix_html(3, 3, mat_l, 'inline-block', '40%')}`;
}
activity1();
//# sourceMappingURL=activity1.js.map