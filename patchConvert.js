const fs = require("fs");
const dirGeojson = "D:/mapBoxGL/"; // geojson文件目录
const dirPbf = "D:/PBF/"; // 生成切片的目录
fs.readdir(dirGeojson, function (err, files) {
	let res = "";
	files.forEach((item) => {
		res += "tippecanoe -e " + dirPbf + item.split(".")[0] + " -pC -Z12 -z18 -f " + dirGeojson + item + ";";
	});
	// 将生成切片命令写入文件
	fs.writeFile("./tippecanoe-command.txt", res, function () {
		console.info("ok");
	});
});
