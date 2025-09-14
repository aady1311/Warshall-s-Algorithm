# 🔁 Warshall's Algorithm - Transitive Closure Visualizer

This project is a **fully responsive web-based visualization** tool that demonstrates **Warshall’s Algorithm** for finding the **transitive closure** of a relation (represented using an adjacency matrix).

It is built with modern HTML, CSS, and JavaScript and includes **step-by-step matrix updates** and **human-readable explanations** for educational clarity.

---

## 📘 What is Transitive Closure?

In set theory and graph theory, the **transitive closure** of a relation R on a set S is the smallest transitive relation that contains R.

### Example:
If `A → B` and `B → C`, then we must add `A → C` to ensure transitivity.

This project takes a binary relation as input (in the form of an adjacency matrix), and finds the transitive closure using **Warshall’s algorithm**.

---

## 🌟 Features

- ✅ Accepts custom input adjacency matrix
- 📊 Shows step-by-step computation of the transitive closure
- 🧠 Provides **easy-to-understand** logic explanation for each step
- 🌓 Includes a **Light/Dark Mode Toggle** for user accessibility
- 📱 Fully **responsive** design for mobile, tablet, and desktop screens
- 🎨 Clean UI inspired by weather card-style layouts
- 🧾 Displays:
  - Initial matrix (W₀)
  - Matrices for each step (W₁, W₂, ...)
  - Final transitive closure matrix
  - Descriptive explanation of new entries added at each step

---

## 💡 How It Works

1. User inputs a square adjacency matrix (space-separated rows).
2. Warshall's algorithm processes the matrix in steps:
   - For each intermediate node `k`, it checks:
     - If there is a path from `i → k` and `k → j`, then `i → j` must be added.
3. For each value of `k`, the app:
   - Saves the **before** and **after** matrix
   - Lists which `(i,j)` positions were updated
   - Shows those updates as matrix differences and textual explanation

---

## 🧪 Example

### Input Matrix:
0 1 0
1 0 1
0 0 0

### Output (Final Transitive Closure):

1 1 1
1 1 1
0 0 0


Each step updates new paths discovered using intermediate nodes.

## 🚀 How to Use

1. Clone or download the repo
2. Open `index.html` in your browser
3. Enter a valid adjacency matrix
4. Click `Run Algorithm`
5. Toggle theme if desired
6. View each step and explanation

---

## 📁 Project Structure

📦 Warshall-Visualizer/
┣ 📄 index.html ← Main app file
┣ 📄 style.css ← Styles (dark/light mode, responsiveness)
┣ 📄 script.js ← Warshall logic and DOM rendering
┗ 📄 README.md ← You're reading this!


---

## 🌈 Theme Support

Includes a toggle switch to change between:

- ☀️ Light Mode
- 🌙 Dark Mode

The theme applies smoothly and updates in real-time.

---

## 📚 Educational Use

This project is perfect for:

- 👨‍🏫 Teaching Warshall’s algorithm
- 📖 Assignment explanations
- 🧠 Practicing graph theory
- 👩‍💻 Visual learners understanding matrix updates

---

## 🧾 Conclusion

Using Warshall’s Algorithm, we have successfully computed the **transitive closure** of the given binary relation.  
This closure adds all the necessary indirect connections to make the relation **transitive**.

Through this visualized, step-by-step process, users can **see how each new connection is made** using intermediate nodes, rather than trying to interpret a final matrix without explanation.

This approach enhances understanding and is ideal for students, teachers, and developers working with graph theory or discrete mathematics.

---

## 👨‍💻 Author

Developed by **Aditya Yadav**  
Feel free to fork, use, or enhance this tool. Contributions welcome!

---

## 🛠️ Future Improvements (Suggestions)

- Highlight only changed matrix values step-by-step
- Allow exporting result as PDF or image
- Import matrix from `.csv` file
- Add animation to matrix updates
- Multi-language support for explanations

---

## 📎 License

This project is open source and free to use under the MIT License.
