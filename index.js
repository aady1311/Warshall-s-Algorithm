function renderMatrix(matrix) {
    let html = `<div class="matrix-wrapper"><table>`;
    for (let i = 0; i < matrix.length; i++) {
        html += "<tr>";
        for (let j = 0; j < matrix[i].length; j++) {
            html += "<td>" + matrix[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table></div>";
    return html;
}

function ordinal(n) {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}


function runWarshall() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    let input = document.getElementById("matrixInput").value.trim().split("\n");
    let n = input.length;
    let graph = [];


    for (let i = 0; i < n; i++) {
        graph[i] = input[i].trim().split(" ").map(Number);
    }


    resultDiv.innerHTML += `
        <div class="step">
            <h3>Step 0: Initial Matrix (W₀)</h3>
            <p>This is the original adjacency matrix. '1' means a direct connection from one node to another.</p>
            <div class="matrix-box">
                ${renderMatrix(graph)}
            </div>
        </div>`;

    for (let k = 0; k < n; k++) {
        let before = JSON.parse(JSON.stringify(graph));

        let piList = [], qjList = [], addedPositions = [];


        for (let i = 0; i < n; i++) {
            if (before[i][k]) piList.push(i + 1);
        }
        for (let j = 0; j < n; j++) {
            if (before[k][j]) qjList.push(j + 1);
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][j] === 0 && graph[i][k] && graph[k][j]) {
                    graph[i][j] = 1;
                    addedPositions.push(`(${i + 1}, ${j + 1})`);
                }
            }
        }

        let explanation = `<h4>Step ${k + 1}:</h4>`;
        explanation += `<p>Using intermediate node ${k + 1}, we:</p>`;

        if (piList.length && qjList.length && addedPositions.length) {
            explanation += `
               <ul>
    <li><strong>${ordinal(k + 1)} column</strong>: we had 1 at positions: ${piList.join(", ")} (p<sub>i</sub>)</li>
    <li><strong>${ordinal(k + 1)} row</strong>: we had 1 at positions: ${qjList.join(", ")} (q<sub>j</sub>)</li>
    <li>We combine and add 1 at these positions in matrix: ${addedPositions.join(", ")}</li>
</ul>
`;
        } else {
            explanation += `<p>No new paths were added in this step.</p>`;
        }

        resultDiv.innerHTML += `
            <div class="step">
                ${explanation}
                <div class="matrix-row">
                    <div class="matrix-box">
                        <h4>Before (W<sub>${k}</sub>)</h4>
                        ${renderMatrix(before)}
                    </div>
                    <div class="matrix-box">
                        <h4>After (W<sub>${k + 1}</sub>)</h4>
                        ${renderMatrix(graph)}
                    </div>
                </div>
            </div>`;
    }

    resultDiv.innerHTML += `
        <div class="step">
            <div class="final-answer">Final Transitive Closure (W<sub>${n}</sub>)</div>
            <p>This matrix shows all reachable paths between nodes.</p>
            <div class="matrix-box" style="margin: auto;">
                ${renderMatrix(graph)}
            </div>
        </div>`;
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
