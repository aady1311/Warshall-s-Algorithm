function runWarshall() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    let input = document.getElementById("matrixInput").value.trim().split("\n");
    let n = input.length;
    let graph = [];

    // Convert text input to matrix
    for (let i = 0; i < n; i++) {
        graph[i] = input[i].trim().split(" ").map(Number);
    }

    // Show initial matrix (W0)
    resultDiv.innerHTML += `
            <div class="step">
                <h3>Step 0: Initial Matrix (W₀)</h3>
                <p>This is the original adjacency matrix. '1' means a direct connection from one node to another.</p>
                <div class="matrix-box">
                    ${renderMatrix(graph)}
                </div>
            </div>`;

    // Warshall’s Algorithm with concise explanation
    for (let k = 0; k < n; k++) {
        let before = JSON.parse(JSON.stringify(graph)); // Copy before change

        let piList = [], qjList = [], addedPositions = [];

        // Collect all pi and qj where graph[i][k] and graph[k][j] are 1
        for (let i = 0; i < n; i++) {
            if (graph[i][k]) piList.push(i + 1); // store as 1-based index
        }
        for (let j = 0; j < n; j++) {
            if (graph[k][j]) qjList.push(j + 1);
        }

        // Now update graph[i][j] if applicable and track new additions
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][j] === 0 && graph[i][k] && graph[k][j]) {
                    graph[i][j] = 1;
                    addedPositions.push(`(${i + 1}, ${j + 1})`);
                }
            }
        }

        // Build explanation
        let explanation = `<h4>Step ${k + 1}:</h4>`;
        explanation += `<p>Using intermediate node ${k + 1}, we:</p>`;

        if (piList.length && qjList.length && addedPositions.length) {
            explanation += `
                    <ul>
                        <li>First column: we had 1 at positions: ${piList.join(", ")} (p<sub>i</sub>)</li>
                        <li>First row: we had 1 at positions: ${qjList.join(", ")} (q<sub>j</sub>)</li>
                        <li>We combine and add 1 at these positions in matrix: ${addedPositions.join(", ")}</li>
                    </ul>`;
        } else {
            explanation += `<p>No new paths were added in this step.</p>`;
        }

        // Show step with explanation and matrix update
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

    // Final matrix
    resultDiv.innerHTML += `
            <div class="step">
                <div class="final-answer">Final Transitive Closure (W<sub>${n}</sub>)</div>
                <p>This matrix shows all reachable paths between nodes.</p>
                <div class="matrix-box" style="margin: auto;">
                    ${renderMatrix(graph)}
                </div>
            </div>`;
}

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



    function toggleTheme() {
        document.body.classList.toggle("light-mode");
    }


