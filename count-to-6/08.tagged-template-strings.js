console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(literals, ...values) {
	var escapedValues = values.map(v => v
					.replace(/\&/g, "&amp;")
					.replace(/\'/g, "&#39;")
					.replace(/\"/g, "&quot;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;"));
					
    return literals[0] + 
		escapedValues
		.map((value, index) => value + literals[index + 1])
		.join('');
}