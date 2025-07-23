const VIEW_WIN = document.getElementById('VIEW');

const HOME = document.createElement('div');
HOME.id = 'uno';
HOME.innerHTML = `
<div id="dos">
<h1>Hello!</h1>
</div>
`;
VIEW_WIN.appendChild(HOME);
