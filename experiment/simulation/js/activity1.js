let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Flow through branched pipes</h5>
        <p>Learning Objective: Calculate the discharge rate</p>
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
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Caculate Discharge', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> Three reservoirs A, B, C are connected by a pipe system. The lengths and diameter of pipes 1, 2, 3 are 800m, 1000m, 800m and 300mm, 200mm, 150mm respectively. Determine piezometric head at D. </h5>
        <h5>Z<sub>A</sub> = ${ZA}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Z<sub>B</sub> = ${ZB}m &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Z<sub>C</sub> = ${ZC}m</h5>
        <h5> Take f = 0.005</h5>
        <br>
        <div style='text-align: center;'><img style='width: 50%;' src='./images/activity1.png'></div>
        <br><br>

        <h5>Applying Bernouli's equation at A and D</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_A = Z_D + \\frac{P_D}{\\rho g} + h f_1 $$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_D + \\frac{P_D}{\\rho g} = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> - <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span> v<sub>1</sub><sup>2</sup> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...eq 1
        </p>

        <h5>Applying Bernouli's equation at D and B</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_D + \\frac{P_D}{\\rho g} = Z_B + h f_2$$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_D + \\frac{P_D}{\\rho g} = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> + <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> v<sub>2</sub><sup>2</sup> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...eq 2
        </p>

        <h5>Substracting eq 2 from eq 1</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_A - Z_B - h f_1 - h f_2 = 0$$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$  $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> - <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> v<sub>1</sub><sup>2</sup> - <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> v<sub>2</sub><sup>2</sup> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...eq A
        </p>

        <h5>Applying Bernouli's equation at D and C</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_D + \\frac{P_D}{\\rho g} = Z_C + h f_3 $$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_D + \\frac{P_D}{\\rho g} = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> + <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> v<sub>3</sub><sup>2</sup> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...eq 3
        </p>

        <h5>Substracting eq 3 from eq 1</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_A - Z_C - h f_1 - h f_3 = 0$$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$  $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> - <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> v<sub>1</sub><sup>2</sup> - <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span> v<sub>3</sub><sup>2</sup> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...eq B
        </p>

        <h5>From eq A</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_{AB} - rv_1 * v_1^2 = rv_2 * v_2^2 $$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_2 = \\sqrt{\\frac{Z_{AB} - rv_1 * v_1^2}{rv_2}} $$
            </span>
        </p>
        
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_2 = \\sqrt{} $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal13-inp'> <span id='cal13-val-sp'></span> - <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal14-inp'> <span id='cal14-val-sp'></span> v<sub>1</sub><sup>2</sup>/<input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal15-inp'> <span id='cal15-val-sp'></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...eq I
        </p>

        <h5>From eq B</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Z_{AC} - rv_1 * v_1^2 = rv_3 * v_3^2 $$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_3 = \\sqrt{\\frac{Z_{AC} - rv_1 * v_1^2}{rv_3}} $$
            </span>
        </p>
        
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_3 = \\sqrt{} $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal16-inp'> <span id='cal16-val-sp'></span> - <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal17-inp'> <span id='cal17-val-sp'></span> v<sub>1</sub><sup>2</sup>/<input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal18-inp'> <span id='cal18-val-sp'></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...eq II
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ A_1 = \\frac{\\pi}{4} d_1^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal19-inp'> <span id='cal19-val-sp'></span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ A_2 = \\frac{\\pi}{4} d_2^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal20-inp'> <span id='cal20-val-sp'></span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ A_3 = \\frac{\\pi}{4} d_3^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal21-inp'> <span id='cal21-val-sp'></span>
        </p>

        <h5>From continuity equation</h5>
        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ Q_1 = Q_2 + Q_3 $$
            </span>
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ A_1 V_1 = A_2 V_2 + A_3 V_3 $$
            </span>
        </p>
        
        <h5>Using eq I and II in continuity equation, we get</h5>
        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ v_1 = \\frac{A_2}{A_1} * \\sqrt{\\frac{Z_{AB} - rv_1 * v_1^2}{rv_2}} + \\frac{A_3}{A_1} * \\sqrt{\\frac{Z_{AC} - rv_1 * v_1^2}{rv_3}}$$
            </span>
        </p>

        <h5>Solving the above equation by using any iterative method, find v</h5>
        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ v_1 = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal22-inp'> <span id='cal22-val-sp'></span>
        </p>
        
        <h5>
            Calculate piezometric head at D
        </h5>
        <p style='text-align: center;'> <span style='display: inline-block;'>
            <span style='display: inline-block;' >
                $$ Z_D + \\frac{P_D}{\ρg} = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal23-inp'> <span id='cal23-val-sp'></span>
        </p>


        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-2' >Verify</button></div>
    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculations();
}
function internal_calculations() {
    rv1 = (4 * f * L1) / (2 * g * d1_cal);
    rv2 = (4 * f * L2) / (2 * g * d2_cal);
    rv3 = (4 * f * L3) / (2 * g * d3_cal);
    ZAB = ZA - ZB;
    ZAC = ZA - ZC;
    A1 = (Math.PI / 4) * Math.pow(d1_cal, 2);
    A2 = (Math.PI / 4) * Math.pow(d2_cal, 2);
    A3 = (Math.PI / 4) * Math.pow(d3_cal, 2);
    for (let i = 1; i <= 100; i++) {
        v1 =
            (A2 / A1) * Math.sqrt((ZAB - rv1 * Math.pow(v1, 2)) / rv2) +
                (A3 / A1) * Math.sqrt((ZAC - rv1 * Math.pow(v1, 2)) / rv3);
        console.log('v1 is = ', v1);
    }
    piezometric = ZA - rv1 * Math.pow(v1, 2);
}
function verify0() {
    let btn = (document.getElementById('temp-btn-2'));
    console.log('ZA ', ZA);
    console.log('ZB ', ZB);
    console.log('ZC ', ZC);
    console.log('rv1 = ', rv1);
    console.log('rv2 = ', rv2);
    console.log('rv3 = ', rv3);
    console.log('ZAB = ', ZAB);
    console.log('ZAC = ', ZAC);
    console.log('A1 = ', A1);
    console.log('A2 = ', A2);
    console.log('A3 = ', A3);
    console.log('v1 = ', v1);
    console.log('piezometric = ', piezometric);
    let inp1 = (document.getElementById('cal01-inp'));
    let sp1 = (document.getElementById('cal01-val-sp'));
    let inp2 = (document.getElementById('cal02-inp'));
    let sp2 = (document.getElementById('cal02-val-sp'));
    let inp3 = (document.getElementById('cal03-inp'));
    let sp3 = (document.getElementById('cal03-val-sp'));
    let inp4 = (document.getElementById('cal04-inp'));
    let sp4 = (document.getElementById('cal04-val-sp'));
    let inp5 = (document.getElementById('cal05-inp'));
    let sp5 = (document.getElementById('cal05-val-sp'));
    let inp6 = (document.getElementById('cal06-inp'));
    let sp6 = (document.getElementById('cal06-val-sp'));
    let inp7 = (document.getElementById('cal07-inp'));
    let sp7 = (document.getElementById('cal07-val-sp'));
    let inp8 = (document.getElementById('cal08-inp'));
    let sp8 = (document.getElementById('cal08-val-sp'));
    let inp9 = (document.getElementById('cal09-inp'));
    let sp9 = (document.getElementById('cal09-val-sp'));
    let inp10 = (document.getElementById('cal10-inp'));
    let sp10 = (document.getElementById('cal10-val-sp'));
    let inp11 = (document.getElementById('cal11-inp'));
    let sp11 = (document.getElementById('cal11-val-sp'));
    let inp12 = (document.getElementById('cal12-inp'));
    let sp12 = (document.getElementById('cal12-val-sp'));
    let inp13 = (document.getElementById('cal13-inp'));
    let sp13 = (document.getElementById('cal13-val-sp'));
    let inp14 = (document.getElementById('cal14-inp'));
    let sp14 = (document.getElementById('cal14-val-sp'));
    let inp15 = (document.getElementById('cal15-inp'));
    let sp15 = (document.getElementById('cal15-val-sp'));
    let inp16 = (document.getElementById('cal16-inp'));
    let sp16 = (document.getElementById('cal16-val-sp'));
    let inp17 = (document.getElementById('cal17-inp'));
    let sp17 = (document.getElementById('cal17-val-sp'));
    let inp18 = (document.getElementById('cal18-inp'));
    let sp18 = (document.getElementById('cal18-val-sp'));
    let inp19 = (document.getElementById('cal19-inp'));
    let sp19 = (document.getElementById('cal19-val-sp'));
    let inp20 = (document.getElementById('cal20-inp'));
    let sp20 = (document.getElementById('cal20-val-sp'));
    let inp21 = (document.getElementById('cal21-inp'));
    let sp21 = (document.getElementById('cal21-val-sp'));
    let inp22 = (document.getElementById('cal22-inp'));
    let sp22 = (document.getElementById('cal22-val-sp'));
    let inp23 = (document.getElementById('cal23-inp'));
    let sp23 = (document.getElementById('cal23-val-sp'));
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(ZA.toFixed(2)))) {
        alert('ZA value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(rv1.toFixed(2)))) {
        alert('rv1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(ZB.toFixed(2)))) {
        alert('ZB value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(rv2.toFixed(2)))) {
        alert('rv2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(ZAB.toFixed(2)))) {
        alert('ZAB is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(rv1.toFixed(2)))) {
        alert('rv1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(2)), parseFloat(rv2.toFixed(2)))) {
        alert('rv2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(2)), parseFloat(ZC.toFixed(2)))) {
        alert('ZC is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(2)), parseFloat(rv3.toFixed(2)))) {
        alert('rv3 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(2)), parseFloat(ZAC.toFixed(2)))) {
        alert('ZAC is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp11.value).toFixed(2)), parseFloat(rv1.toFixed(2)))) {
        alert('rv1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp12.value).toFixed(2)), parseFloat(rv3.toFixed(2)))) {
        alert('rv3 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp13.value).toFixed(2)), parseFloat(ZAB.toFixed(2)))) {
        alert('ZAB is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp14.value).toFixed(2)), parseFloat(rv1.toFixed(2)))) {
        alert('rv1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp15.value).toFixed(2)), parseFloat(rv2.toFixed(2)))) {
        alert('rv2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp16.value).toFixed(2)), parseFloat(ZAC.toFixed(2)))) {
        alert('ZAC is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp17.value).toFixed(2)), parseFloat(rv1.toFixed(2)))) {
        alert('rv1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp18.value).toFixed(2)), parseFloat(rv3.toFixed(2)))) {
        alert('rv3 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp19.value).toFixed(2)), parseFloat(A1.toFixed(2)))) {
        alert('A1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp20.value).toFixed(2)), parseFloat(A2.toFixed(2)))) {
        alert('A2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp21.value).toFixed(2)), parseFloat(A3.toFixed(2)))) {
        alert('A3 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp22.value).toFixed(2)), parseFloat(v1.toFixed(2)))) {
        alert('v1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp23.value).toFixed(2)), parseFloat(piezometric.toFixed(2)))) {
        alert('piezometric is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${ZA.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${rv1.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${ZB.toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${rv2.toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${ZAB.toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${rv1.toFixed(4)}`;
    inp7.remove();
    sp7.innerText = `${rv2.toFixed(4)}`;
    inp8.remove();
    sp8.innerText = `${ZC.toFixed(4)}`;
    inp9.remove();
    sp9.innerText = `${rv3.toFixed(4)}`;
    inp10.remove();
    sp10.innerText = `${ZAC.toFixed(4)}`;
    inp11.remove();
    sp11.innerText = `${rv1.toFixed(4)}`;
    inp12.remove();
    sp12.innerText = `${rv3.toFixed(4)}`;
    inp13.remove();
    sp13.innerText = `${ZAB.toFixed(4)}`;
    inp14.remove();
    sp14.innerText = `${rv1.toFixed(4)}`;
    inp15.remove();
    sp15.innerText = `${rv2.toFixed(4)}`;
    inp16.remove();
    sp16.innerText = `${ZAC.toFixed(4)}`;
    inp17.remove();
    sp17.innerText = `${rv1.toFixed(4)}`;
    inp18.remove();
    sp18.innerText = `${rv3.toFixed(4)}`;
    inp19.remove();
    sp19.innerText = `${A1.toFixed(4)}`;
    inp20.remove();
    sp20.innerText = `${A2.toFixed(4)}`;
    inp21.remove();
    sp21.innerText = `${A3.toFixed(4)}`;
    inp22.remove();
    sp22.innerText = `${v1.toFixed(4)}`;
    inp23.remove();
    sp23.innerText = `${piezometric.toFixed(4)}m`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    alert('Experiment completed');
}
activity1();
//# sourceMappingURL=activity1.js.map