const demos = [
`aaaaadfdadtdaaaaadfdad\\\\ aaaaadfdadt67yetfadfda\\\\
aaaaadfdadtdaaaaadfdad\\\\ aaaaadfdadt67yetfadfda\\\\
7yhvhy7tfvft6tdcdt7tfvft 7yhvhy7tfvft9ujnju96yedc
7yhvhy7tfvft6tdcdt7tfvft 7yhvhy7tfvft9ujnju96yedc`,

`\`360\`
j\\\\\\j\\\\\\j\\\\j\\\\j\\ j\\8\\j\\\\\\j\\\\j\\\\j\\
ju8\\j\\\\\\j\\\\j\\\\j\\ j98ujnbzj98ujnbz
j\\\\\\j\\\\\\j\\\\j\\\\j\\ j\\8\\j\\\\\\j\\\\j\\\\j\\
ju8\\j\\\\\\j\\\\j\\\\j\\ j98ujnbzj98jubjz`,

`vkhkpkhkvkhkpkhk ckhk]khkckhk]khk
xkhk0khkxkhk0khk zhfh7hfhzhfh7hfh`,

`\`330\`
diui=iuidiui=iui autu-utuautu-utu
xkhk]khkxkhk]khk zhghphghzhghphgh
chghohghchghohgh xhghihghxhghihgh
chghohghchghohgh zgdg9gdgzgsg5gsz`,

`s\\\\f\\\\h\\\\f\\\\s\\\\f\\h\\\\\\f\\\\ s\\\\f\\\\h\\\\f\\\\y\\\\5\\h\\\\\\fsx s\\\\f\\\\h\\\\f\\\\s\\\\f\\h\\\\\\y\\\\ 8\\i\\yhi\\y\\hfy\\h\\fshfsfsx`,

`adfetfaty67ytfatedcefazffddadcyt
adfetfaty67ytfatedcefazfdavca\\t\\ \`300\``,

`adghkalkadghkalk aghklailaghklail cdhklcilcdhklcil xgkyixpixgkyixpi zhuipz9pzhuipz9p cdtuoc=oxgtuix-i zaetuz976ytewdac`,

`\`400\`
u7\\u-\\u7\\u-\\7u-\\
y7\\y=\\y7\\y=\\7y=\\
t7\\t-\\t7\\t-\\7t-\\
y6\\y-\\y6\\y-\\6y-\\`,

`slslslsl s;s;s;s; a;a;a;a; alalalal clclclcl cjcjcjcj xjxjxjxj xgxgxgxg zgzgzgzg zfzfzfzf vfvfvfvf vjvjvjvj

\`190\``,

`C MAJOR SCALE THREE WAYS:

zcsdwr34 zcbdgjyu zcbn,/l;

\`240\``,
	
`=]'hnhi9-pkgvgkp0pyfvfy79ihdxdhi`
]

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = (array) => {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

shuffle(demos)
