const categoriesContainer = document.getElementById('categories');
const exampleTitle = document.getElementById('exampleTitle');
const exampleCode = document.getElementById('exampleCode');
const outputDiv = document.getElementById('output');
const runBtn = document.getElementById('runCode');
const copyBtn = document.getElementById('copyCode');
const searchInput = document.getElementById('search');

// Populate Categories
const categories = [...new Set(examples.map(ex => ex.category))];
categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.textContent = cat;
  btn.classList.add('category-btn');
  btn.addEventListener('click', () => showExamples(cat));
  categoriesContainer.appendChild(btn);
});

// Show examples in category
function showExamples(category) {
  const filtered = examples.filter(ex => ex.category === category);
  const example = filtered[0]; // Show first example by default
  displayExample(example);
}

// Display example
function displayExample(example) {
  exampleTitle.textContent = example.title;
  exampleCode.textContent = example.code;
  outputDiv.textContent = '';
  runBtn.onclick = () => runCode(example.code);
}

// Run code
function runCode(code) {
  try {
    outputDiv.textContent = eval(code);
  } catch (err) {
    outputDiv.textContent = err;
  }
}

// Copy code
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(exampleCode.textContent);
});

// Search functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const found = examples.find(ex => ex.title.toLowerCase().includes(query));
  if (found) displayExample(found);
});
