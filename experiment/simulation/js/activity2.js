function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Find Z in L * Z = C</h5>
        <p>Learning Objective: L<sup>T</sup> * X = Z and L * Z = C, we need to find value of Z. </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act2() {
    let temp_btn = (document.getElementById('temp-btn-2'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_z_inputs = get_matrix_html(3, 1, [
        [`<input id='a1-utz-11' class='form-control' />`],
        [`<input id='a1-utz-21' class='form-control' />`],
        [`<input id='a1-utz-31' class='form-control' />`],
    ], 'inline-block', '25%');
    let btn_text = get_collapse_btn_text('Find Z', 'tb2-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <div style='text-align: center;'>
            <p><span style='font-size: 25px;'>$$ L^T * X \\ = \\ Z $$</span></p>
            <p><span style='font-size: 25px;'>$$ L * Z \\ = \\ C $$</span></p>
        </div>
        <br>

        <div style='text-align: center;'>
            ${get_matrix_html_with_title(3, 3, mat_l, 'L', 'inline-block', '40%')} &nbsp; <span style='font-size: 30px;'>* Z</span> &nbsp; = &nbsp; ${get_matrix_html_with_title(3, 1, mat_c, 'C', 'inline-block', '20%')}
        </div>

        <h5>Find the value of Z</h5>
        <br>
        <div id='ut-inp-div' style='text-align: center;'>Z &nbsp; = &nbsp; ${matrix_z_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_ut();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    ut_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb2-box'), 150);
}
function ut_a_c() {
    let c = [];
    let z = [];
    c.push(mat_c[0][0]);
    c.push(mat_c[1][0]);
    c.push(mat_c[2][0]);
    z = get_z(mat_l, c);
    mat_z = [];
    mat_z.push([parseFloat(z[0].toFixed(4))], [parseFloat(z[1].toFixed(4))], [parseFloat(z[2].toFixed(4))]);
    mat_c = [];
    mat_c.push([c[0]], [c[1]], [c[2]]);
}
function verify_matrix_ut() {
    let btn = (document.getElementById('temp-btn-123'));
    let inp_a;
    let inp_c;
    console.log(`matrix z =>`, mat_z);
    //for z
    for (let i = 0; i < 3; i++) {
        inp_c = document.getElementById(`a1-utz-${i + 1}1`);
        if (!verify_values(parseFloat(inp_c.value), mat_z[i][0])) {
            alert(`incorrect value in Z in at row ${i} and column 0`);
            return;
        }
    }
    alert('All entered values are correct.');
    btn.remove();
    render_ut_a_c();
    activity3();
}
function render_ut_a_c() {
    let div = (document.getElementById('ut-inp-div'));
    div.innerHTML = `Z &nbsp; = &nbsp; ${get_matrix_html(3, 1, mat_z, 'inline-block', '40%')}`;
}
///activity2();
//# sourceMappingURL=activity2.js.map