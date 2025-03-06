function activity3() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Final Solution</h5>
        <p>Learning Objective: To find the values of X</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    find_l_transpose();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act3() {
    let temp_btn = (document.getElementById('temp-btn-3'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_x_inputs = get_matrix_html(3, 1, [
        [`<input id='a1-x-11' class='form-control' />`],
        [`<input id='a1-x-21' class='form-control' />`],
        [`<input id='a1-x-31' class='form-control' />`],
    ], 'inline-block', '25%');
    let btn_text = get_collapse_btn_text('Final Solution', 'tb3-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <div style='text-align: center;'>
            <p><span style='font-size: 25px;'>$$ L^T * X \\ = \\ Z $$</span></p>
        </div>

        <div style='text-align: center;'>${get_matrix_html_with_title(3, 3, mat_trans_l, 'L<sup>T<sup>', 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>* X</span>  &nbsp; =  &nbsp; ${get_matrix_html_with_title(3, 1, mat_z, 'Z', 'inline-block', '15%')}</div>
        <br><br>

        <h5>Calculate and enter the values of X</h5>
        <br>

        <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>X</span> = ${matrix_x_inputs}</div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_bs();'  id='temp-btn-1234' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    bs_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb3-box'), 150);
}
function bs_a_c() {
    let z = [];
    z.push(mat_z[0][0]);
    z.push(mat_z[1][0]);
    z.push(mat_z[2][0]);
    console.log(mat_z);
    mat_x = get_x(mat_trans_l, z);
    mat_z = [];
    mat_z.push([z[0]], [z[1]], [z[2]]);
}
function verify_matrix_bs() {
    let btn = (document.getElementById('temp-btn-1234'));
    let inp_c;
    console.log(`matrix x =>`, mat_x);
    //for x
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-x-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_x[i])) {
            alert(`incorrect value in 3 x 1 matrix for X[${i + 1}]`);
            return;
        }
    }
    btn.remove();
    // render_bs_a_c();
    alert('You have successfully completed this experiment.');
    maindiv.innerHTML = `Experiment Compeleted Successfully.`;
}
// function render_bs_a_c() {
//     let div: HTMLDivElement = <HTMLDivElement> document.getElementById('ut-inp-div');
//     div.innerHTML = `${get_matrix_html(3, 3, mat_a, 'inline-block', "40%")}`;
// }
function find_l_transpose() {
    for (let i = 0; i < mat_l.length; i++) {
        for (let j = 0; j < mat_l[0].length; j++) {
            mat_trans_l[i][j] = mat_l[j][i];
        }
    }
}
//# sourceMappingURL=activity3.js.map